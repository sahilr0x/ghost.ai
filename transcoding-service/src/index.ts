import {
  ReceiveMessageCommand,
  SQSClient,
  DeleteMessageCommand,
} from "@aws-sdk/client-sqs";
import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";
import type { S3Event } from "aws-lambda";
import dotenv from "dotenv";

dotenv.config();

// Required ENV variables
const REGION = process.env.S3_REGION!;
const ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID!;
const SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY!;
const QUEUE_URL = process.env.QUEUE_URL!;
const OUTPUT_BUCKET = process.env.OUTPUT_BUCKET || "production.ghost-ai";

const sqsClient = new SQSClient({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const ecsClient = new ECSClient({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

async function init() {
  const receiveCommand = new ReceiveMessageCommand({
    QueueUrl: QUEUE_URL,
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 20,
  });

  while (true) {
    const { Messages } = await sqsClient.send(receiveCommand);
    if (!Messages || Messages.length === 0) {
      console.log("No message in queue");
      continue;
    }

    for (const message of Messages) {
      const { MessageId, Body, ReceiptHandle } = message;
      console.log(` Message Received`, { MessageId });

      if (!Body || !ReceiptHandle) continue;

      try {
        const event = JSON.parse(Body);

        // Ignore test events
        if ("Service" in event && event.Event === "s3:TestEvent") {
          await sqsClient.send(
            new DeleteMessageCommand({ QueueUrl: QUEUE_URL, ReceiptHandle })
          );
          continue;
        }

        const s3Event = event as S3Event;
        for (const record of s3Event.Records) {
          const { bucket, object } = record.s3;
          const inputKey = decodeURIComponent(object.key.replace(/\+/g, " ")); // handle URL encoding

          // Step 1: Trigger video-transcoder task
          console.log(" Triggering video-transcoder task...");
          await ecsClient.send(
            new RunTaskCommand({
              taskDefinition:
                "arn:aws:ecs:ap-south-1:074994084951:task-definition/video-transcoder",
              cluster: "arn:aws:ecs:ap-south-1:074994084951:cluster/dev-1",
              launchType: "FARGATE",
              networkConfiguration: {
                awsvpcConfiguration: {
                  assignPublicIp: "ENABLED",
                  securityGroups: ["sg-01cdc9cf4277a25b5"],
                  subnets: [
                    "subnet-02565dce321e2f4e5",
                    "subnet-0d01b5b7f02e8346d",
                    "subnet-00c2a65a14eb05867",
                  ],
                },
              },
              overrides: {
                containerOverrides: [
                  {
                    name: "video-transcoder",
                    environment: [
                      { name: "BUCKET_NAME", value: bucket.name },
                      { name: "KEY", value: inputKey },
                    ],
                  },
                ],
              },
            })
          );
          console.log(" Video-transcoder ECS task started.");

          // Directly trigger audio-summary using original webm from ghostai-automation-1
          console.log("🎧 Triggering audio-summary task...");
          await ecsClient.send(
            new RunTaskCommand({
              taskDefinition:
                "arn:aws:ecs:ap-south-1:074994084951:task-definition/audio-summary",
              cluster: "arn:aws:ecs:ap-south-1:074994084951:cluster/dev-1",
              launchType: "FARGATE",
              networkConfiguration: {
                awsvpcConfiguration: {
                  assignPublicIp: "ENABLED",
                  securityGroups: ["sg-01cdc9cf4277a25b5"],
                  subnets: [
                    "subnet-02565dce321e2f4e5",
                    "subnet-0d01b5b7f02e8346d",
                    "subnet-00c2a65a14eb05867",
                  ],
                },
              },
              overrides: {
                containerOverrides: [
                  {
                    name: "audio-summary",
                    environment: [
                      { name: "BUCKET_NAME", value: "ghostai-automation-1" },
                      { name: "KEY", value: inputKey },
                      { name: "OUTPUT_BUCKET", value: "production.ghost-ai" },
                    ],
                  },
                ],
              },
            })
          );
          console.log("✅ Audio-summary ECS task started.");
        } // Step 4: Delete SQS message
        await sqsClient.send(
          new DeleteMessageCommand({ QueueUrl: QUEUE_URL, ReceiptHandle })
        );
        console.log(" Deleted message from queue.");
      } catch (err) {
        console.error(" Error processing message:", err);
      }
    }
  }
}

init();
