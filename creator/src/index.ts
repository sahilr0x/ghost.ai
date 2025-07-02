import { Options } from "selenium-webdriver/chrome";

const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

async function main() {
  const options = new Options();
  options.addArguments("--disable-notifications");
  options.addArguments("--disable-extensions");
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--no-sandbox");

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("https://meet.google.com/ghw-oneu-zsu");
    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
}

main();
