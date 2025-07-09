import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export async function findAndOptionallyClickElement(
  driver: WebDriver,
  xpath: string,
  timeout = 10000,
  click = true
): Promise<boolean> {
  try {
    const el = await driver.wait(
      until.elementLocated(By.xpath(xpath)),
      timeout
    );

    if (click) {
      await el.click();
      console.log(`[✔] Clicked element: ${xpath}`);
    } else {
      console.log(`[✔] Element located (no click): ${xpath}`);
    }

    return true;
  } catch (err) {
    console.warn(`[✖] Element not found: ${xpath}`);
    return false;
  }
}

export async function yourName(driver: WebDriver, name: string) {
  const nameInput = await driver.wait(
    until.elementLocated(By.xpath('//input[@aria-label="Your name"]')),
    10000
  );

  await nameInput.clear();
  await nameInput.sendKeys(name);
}
