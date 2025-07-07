import {
  ReceiveMessageCommand,
  SQSClient,
  DeleteMessageCommand,
} from "@aws-sdk/client-sqs";
import type { S3Event } from "aws-lambda";
import dotenv from "dotenv";
import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";

dotenv.config();

const S3_REGION = String(process.env.S3_REGION);
const SECRET_ACCESS_KEY = String(process.env.S3_SECRET_ACCESS_KEY);
const ACCESS_KEY_ID = String(process.env.S3_ACCESS_KEY_ID);
const QUEUE_URL = String(process.env.QUEUE_URL);

const client = new SQSClient({
  region: S3_REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const ecsClient = new ECSClient({
  region: S3_REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

async function init() {
  const command = new ReceiveMessageCommand({
    QueueUrl: QUEUE_URL,
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 20,
  });

  while (true) {
    const { Messages } = await client.send(command);
    if (!Messages) {
      console.log("no Message in queue");
      continue;
    }

    try {
      for (const message of Messages) {
        const { MessageId, Body } = message;

        console.log(`Message Recived`, { MessageId, Body });

        //validate and parse the event
        if (!Body) continue;

        const event = JSON.parse(Body) as S3Event;

        if ("Service" in event && "Event" in event) {
          if (event.Event === "s3:TestEvent") {
            await client.send(
              new DeleteMessageCommand({
                QueueUrl: QUEUE_URL,
                ReceiptHandle: message.ReceiptHandle,
              })
            );
            continue;
          }
        }

        for (const record of event.Records) {
          const { s3 } = record;
          const {
            bucket,
            object: { key },
          } = s3;

          //spin docket container
          const runTaskCommand = new RunTaskCommand({
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
                    { name: "KEY", value: key },
                  ],
                },
              ],
            },
          });
          await ecsClient.send(runTaskCommand);
        }
        //delete the message form queue
        await client.send(
          new DeleteMessageCommand({
            QueueUrl: QUEUE_URL,
            ReceiptHandle: message.ReceiptHandle,
          })
        );
      }
    } catch (error) {
      console.log("events got in loop", error);
    }
  }
}

init();
