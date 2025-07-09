import { WebDriver } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
import { Builder, Browser, By, until } from "selenium-webdriver";
import { CHROME_CONSTANTS } from "./constants";
import { InitializeWebSocketServer } from "./ws/ws";
import { findAndOptionallyClickElement, yourName } from "./elements";

async function openMeet(driver: WebDriver) {
  const name = "Meeting bot";

  try {
    await driver.get("https://meet.google.com/evc-ptmn-jrc");

    //GOT IT POPUP
    await findAndOptionallyClickElement(
      driver,
      '//span[contains(text(),"Got it")]'
    );

    //ENTER YOUR USERNAME
    await yourName(driver, name);

    //TURN OFF MICROPHONE
    await findAndOptionallyClickElement(
      driver,
      "//div[@role='button' and @aria-label='Turn off microphone']"
    );

    //TURN OFF WEBCAM
    await findAndOptionallyClickElement(
      driver,
      "//div[@role='button' and @aria-label='Turn off camera']"
    );

    //JOIN BUTTON
    await findAndOptionallyClickElement(
      driver,
      '//span[contains(text(),"Ask to join")]'
    );

    //MEETKEEP YOUSAFE button notification
    await findAndOptionallyClickElement(
      driver,
      '//*[@id="yDmH0d"]/div[3]/span/div[2]/div/div/div[3]/div[2]/button/span[6]'
    );

    //COUNTER POPUP if more than 2 people join get notiifcatiopn
    await findAndOptionallyClickElement(
      driver,
      '//*[@id="yDmH0d"]/div[3]/div[2]/div/div[2]/button'
    );
  } catch (e) {
    console.error(" Error:", e);
  } finally {
    // await driver.quit();
  }
}

async function getDriver() {
  const options = new Options();
  CHROME_CONSTANTS.CHROME_OPTIONS.forEach((option) => {
    options.addArguments(option);
  });

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  return driver;
}

async function startScreenshare(driver: WebDriver) {
  console.log("startScreenshare called");

  const response = await driver.executeScript(`
     (async () => {
        const ws = new WebSocket('ws://localhost:8000');
        let wsReady = false;

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
            wsReady = true;
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            wsReady = false;
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket server');
            wsReady = false;
        };

        const mediaStreamOptions = ${JSON.stringify(
          CHROME_CONSTANTS.MEDIA_STREAM_OPTIONS
        )};
        const stream = await navigator.mediaDevices.getDisplayMedia(mediaStreamOptions);

        const audioContext = new AudioContext();
        const audioEl1 = document.querySelectorAll("audio")[0];
        const audioEl2 = document.querySelectorAll("audio")[1];
        const audioEl3 = document.querySelectorAll("audio")[2];
        const audioStream1 = audioContext.createMediaStreamSource(audioEl1.srcObject)
        const audioStream2 = audioContext.createMediaStreamSource(audioEl2.srcObject)
        const audioStream3 = audioContext.createMediaStreamSource(audioEl3.srcObject)

        const dest = audioContext.createMediaStreamDestination();
        audioStream1.connect(dest)
        audioStream2.connect(dest)
        audioStream3.connect(dest)

        const combinedStream = new MediaStream([
            ...stream.getVideoTracks(),
            ...dest.stream.getAudioTracks()
        ]);

        const mediaRecorder = new MediaRecorder(combinedStream, {
            mimeType: "video/webm; codecs=vp8,opus",
            timeSlice: 10000,
            videoBitsPerSecond: 1800000,
        });

        console.log("Starting media recording...");
        mediaRecorder.start(10000);

        mediaRecorder.ondataavailable = (event) => {
            if (wsReady) {
            try {
                ws.send(event.data);
                console.log('Sent data');
            } catch (error) {
                console.error('Error sending chunk:', error);
            }
            } else {
            console.error('WebSocket is not ready to send data');
            }
        };

        mediaRecorder.onstop = () => {
            stream.getTracks().forEach(track => track.stop());
            ws.close();
            console.log('Media recording stopped');
        };
        })();
    `);

  console.log(response);
  await 1000000;
}

async function main() {
  const driver = await getDriver();
  await openMeet(driver);
  InitializeWebSocketServer(8000);
  await startScreenshare(driver);
}

main();
