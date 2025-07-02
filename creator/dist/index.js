"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_1 = require("selenium-webdriver/chrome");
const { Builder, Browser, By, until } = require("selenium-webdriver");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = new chrome_1.Options();
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-extensions");
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--use-fake-ui-for-media-stream");
        const driver = yield new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();
        const name = "Meeting bot";
        try {
            yield driver.get("https://meet.google.com/ghw-oneu-zsu");
            // Wait and click "Got it" button if it appears
            try {
                const popupButton = yield driver.wait(until.elementLocated(By.xpath('//span[contains(text(),"Got it")]')), 5000);
                yield popupButton.click();
            }
            catch (e) {
                console.log("No 'Got it' popup");
            }
            // Wait for the name input
            const nameInput = yield driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Your name"]')), 10000);
            yield nameInput.clear();
            yield nameInput.sendKeys(name);
            const joinButton = yield driver.wait(until.elementLocated(By.xpath('//span[contains(text(),"Ask to join")]')), 10000);
            yield joinButton.click();
            yield driver.sleep(10000);
        }
        catch (e) {
            console.error("❌ Error:", e);
        }
        finally {
            yield driver.quit();
        }
    });
}
main();
