const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
  console.log(msg);
});

bot.on("video", () => {});
