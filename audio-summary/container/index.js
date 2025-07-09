const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs/promises");
const fsOld = require("node:fs");
const path = require("node:path");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
require("dotenv").config();

const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;
const OUTPUT_BUCKET = process.env.OUTPUT_BUCKET || "";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

async function extractAudio(videoPath, outputAudioPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .noVideo()
      .audioCodec("pcm_s16le")
      .format("wav")
      .save(outputAudioPath)
      .on("end", resolve)
      .on("error", reject);
  });
}

async function transcribeAudio(audioPath) {
  const audioData = fsOld.createReadStream(audioPath);

  const response = await axios.post(
    "https://api.deepgram.com/v1/listen?punctuate=true&diarize=true",
    audioData,
    {
      headers: {
        Authorization: `Token `,
        "Content-Type": "audio/wav",
      },
      timeout: 120000, // 2 minutes
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    }
  );
  return response.data;
}

function generateSummary(transcript) {
  const speakers = transcript.results.channels[0].alternatives[0].words.reduce(
    (acc, word) => {
      const speaker = word.speaker;
      if (!acc[speaker]) acc[speaker] = [];
      acc[speaker].push(word.punctuated_word || word.word);
      return acc;
    },
    {}
  );

  return Object.entries(speakers)
    .map(([speaker, words]) => `Speaker ${speaker}: ${words.join(" ")}`)
    .join("\n\n");
}

async function waitForS3Object(
  bucket,
  key,
  s3Client,
  retries = 10,
  delayMs = 5000
) {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });

  for (let i = 1; i <= retries; i++) {
    try {
      console.log(`⏳ [${i}/${retries}] Checking for S3 key: ${key}`);
      const result = await s3Client.send(command);
      console.log("S3 object found");
      return result;
    } catch (err) {
      if (err.Code === "NoSuchKey" || err.name === "NoSuchKey") {
        console.log("Key not found, retrying...");
        await new Promise((r) => setTimeout(r, delayMs));
      } else {
        throw err;
      }
    }
  }

  throw new Error(` Failed to find key in S3 after ${retries} retries: ${key}`);
}

async function init() {
  try {
    // Download video
    const result = await waitForS3Object(BUCKET_NAME, KEY, s3Client);
    const videoPath = path.resolve("video.webm");
    await fs.writeFile(videoPath, result.Body);

    // Extract audio
    const audioPath = path.resolve("audio.wav");
    await extractAudio(videoPath, audioPath);

    // Transcribe with Deepgram
    const transcript = await transcribeAudio(audioPath);

    // Summarize
    const summary = generateSummary(transcript);
    console.log("🔍 Summary:\n", summary);

    // Upload summary to S3
    const summaryKey = KEY.replace(/\.[^/.]+$/, "") + "-summary.txt";
    const putCommand = new PutObjectCommand({
      Bucket: OUTPUT_BUCKET,
      Key: summaryKey,
      Body: summary,
    });
    await s3Client.send(putCommand);
    console.log(`✅ Uploaded summary to S3 as ${summaryKey}`);

    // Cleanup temp files
    await fs.unlink(videoPath);
    await fs.unlink(audioPath);
  } catch (err) {
    console.error("❌ Error:", err.message || err);
    process.exit(1);
  }
}

init();
