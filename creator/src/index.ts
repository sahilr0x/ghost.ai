import { WebDriver } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
import { Builder, Browser, By, until } from "selenium-webdriver";
import { CHROME_CONSTANTS } from "./constants";

async function openMeet(driver: WebDriver) {
  const name = "Meeting bot";

  try {
    await driver.get("https://meet.google.com/skz-pfhe-gth");

    try {
      const popupButton = await driver.wait(
        until.elementLocated(By.xpath('//span[contains(text(),"Got it")]')),
        5000
      );
      await popupButton.click();
    } catch (e) {
      console.log("No 'Got it' popup");
    }

    const nameInput = await driver.wait(
      until.elementLocated(By.xpath('//input[@aria-label="Your name"]')),
      10000
    );

    await nameInput.clear();
    await nameInput.sendKeys(name);

    const joinButton = await driver.wait(
      until.elementLocated(By.xpath('//span[contains(text(),"Ask to join")]')),
      10000
    );
    await joinButton.click();
  } catch (e) {
    console.error(" Error:", e);
  } finally {
    // await driver.quit();
  }
}

async function getDriver() {
  const options = new Options();
  // options.setChromeBinaryPath(
  //   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  // );
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--use-fake-ui-for-media-stream");
  options.addArguments("--window-size=1080,720");
  options.addArguments("--auto-select-desktop-capture-source=[RECORD]");
  options.addArguments("--auto-select-desktop-capture-source=[RECORD]");
  options.addArguments("--enable-usermedia-screen-capturing");
  options.addArguments('--auto-select-tab-capture-source-by-title="Meet"');
  options.addArguments("--allow-running-insecure-content");
  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  return driver;
}

async function startScreenshare(driver: WebDriver) {
  console.log("startScreensharecalled");
  const response = await driver.executeScript(`



(async () => {
const mediaStreamOptions = ${JSON.stringify(
    CHROME_CONSTANTS.MEDIA_STREAM_OPTIONS
  )}
    const stream = await navigator.mediaDevices.getDisplayMedia(mediaStreamOptions);

    const audioContext = new AudioContext();
    const audioEl1 = document.querySelectorAll("audio")[0];
    const audioEl2 = document.querySelectorAll("audio")[1];
    const audioEl3 = document.querySelectorAll("audio")[2];

    const audioStream1 = audioContext.createMediaStreamSource(audioEl1.srcObject);
    const audioStream2 = audioContext.createMediaStreamSource(audioEl2.srcObject);
    const audioStream3 = audioContext.createMediaStreamSource(audioEl3.srcObject);

    const dest = audioContext.createMediaStreamDestination();
    audioStream1.connect(dest);
    audioStream2.connect(dest);
    audioStream3.connect(dest);

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
        console.log("Data available:", event.data);
    };

    mediaRecorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop());
        console.log('Media recording stopped');
    };

    window.stopRecording = () => {
        if (mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
    };
})();
      
  `);

  console.log(response);
  driver.sleep(1000000);
}
async function main() {
  const driver = await getDriver();
  await openMeet(driver);
  await startScreenshare(driver);
}

main();
