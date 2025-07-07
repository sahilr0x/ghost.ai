import { ReceiveMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import type { S3Event } from "aws-lambda";
import dotenv from "dotenv";

dotenv.config();

const S3_REGION = String(process.env.S3_REGION);
const SECRET_ACCESS_KEY = String(process.env.S3_SECRET_ACCESS_KEY);
const ACCESS_KEY_ID = String(process.env.S3_ACCESS_KEY_ID);
const QUEUE_URL = String(process.env.S3_QUEUE_URL);

const client = new SQSClient({
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
          if (event.Event === "s3:TestEvent") continue;
        }

        for (const record of event.Records) {
          const { s3 } = record;
          const {
            bucket,
            object: { key },
          } = s3;

          //spin docket container
        }

        //delete the message form queue
      }
    } catch (error) {
      console.log("events got in loop");
    }
  }
}

init();
