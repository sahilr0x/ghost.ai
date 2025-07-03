export const CHROME_CONSTANTS = {
  CHROME_OPTIONS: [
    "--disable-blink-features=AutomationControlled",
    "--use-fake-ui-for-media-stream",
    "--window-size=1080,720",
    "--auto-select-desktop-capture-source=[RECORD]",
    "--auto-select-desktop-capture-source=[RECORD]",
    "--enable-usermedia-screen-capturing",
    '--auto-select-tab-capture-source-by-title="Meet"',
    "--allow-running-insecure-content",
  ],

  MEDIA_STREAM_OPTIONS: {
    video: {
      displaySurface: "browser",
    },
    systemAudio: "include",
    audio: true,
    preferCurrentTab: true,
  },
};
