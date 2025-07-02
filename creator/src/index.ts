import { Options } from "selenium-webdriver/chrome";
const { Builder, Browser, By, until } = require("selenium-webdriver");

async function main() {
  const options = new Options();
  options.addArguments("--disable-notifications");
  options.addArguments("--disable-extensions");
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--use-fake-ui-for-media-stream");

  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  const name = "Meeting bot";

  try {
    await driver.get("https://meet.google.com/ghw-oneu-zsu");

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

    await driver.sleep(10000);
  } catch (e) {
    console.error(" Error:", e);
  } finally {
    await driver.quit();
  }
}

main();
