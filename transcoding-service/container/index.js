const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs/promises");
const fsOld = require("node:fs");

const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");

const RESOLUTIONS = [
  { name: "360p", width: 480, height: 360 },
  { name: "480", width: 858, height: 480 },
  { name: "720", width: 1280, height: 720 },
];

const BUCKE_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "REDACTED_KEY",
    secretAccessKey: "REDACTED_SECRET",
  },
});

async function init() {
  //Download the original video
  const command = new GetObjectCommand({
    Bucket: BUCKE_NAME,
    Key: KEY,
  });
  const result = await s3Client.send(command);
  const originalFilePath = `original-video.webm`;
  await fs.writeFile(originalFilePath, result.Body);
  const originalVideoPath = path.resolve(originalFilePath);

  //start the transcoder

  const promises = RESOLUTIONS.map((resolution) => {
    const output = `video-${resolution.name}.mp4`;

    return new Promise((resolve) => {
      ffmpeg(originalVideoPath)
        .output(output)
        .videoCodec("libx264")
        .audioCodec("aac")
        .withSize(`${resolution.width}x${resolution.height}`)
        .on("end", async () => {
          //upload the video
          const putCommand = new PutObjectCommand({
            Bucket: "production.ghost-ai",
            Key: output,
            Body: fsOld.createReadStream(path.resolve(output)),
          });
          await s3Client.send(putCommand);
          console.log(`Uploaded${output}`);
          resolve();
        })
        .format("mp4")
        .run();
    });
  });
  await Promise.all(promises);
}

init();
