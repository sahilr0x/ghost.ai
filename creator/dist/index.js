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
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = new chrome_1.Options();
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-extensions");
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--no-sandbox");
        let driver = yield new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();
        try {
            yield driver.get("https://meet.google.com/ghw-oneu-zsu");
            yield driver.sleep(10000);
        }
        finally {
            yield driver.quit();
        }
    });
}
main();
