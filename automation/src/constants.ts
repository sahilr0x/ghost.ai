export const CHROME_CONSTANTS = {
  CHROME_OPTIONS: [
    "----user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
    "--disable-blink-features=AutomationControlled",
    "--use-fake-ui-for-media-stream",
    "--window-size=1920,1080",
    "--disable-notifications",
    "--auto-select-desktop-capture-source=[RECORD]",
    "--enable-usermedia-screen-capturing",
    "--allow-running-insecure-content",
    "--safebrowsing-disable-download-protection",
    "--disable-download-notification",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-extensions",
    "--disable-software-rasterizer",
    "--remote-debugging-port=9222",
    "--headless=true",
  ],

  MEDIA_STREAM_OPTIONS: {
    video: {
      displaySurface: "browser",
    },
    systemAudio: "include",
    audio: false,
    preferCurrentTab: true,
  },
};
