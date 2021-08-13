const { Telegraf } = require("telegraf");
require("dotenv").config();

const botToken = process.env.BOT_TOKEN; 

const bot = new Telegraf(botToken);

bot.start((ctx) => {
  ctx.reply("Welcome to the blockchain bot");
});

bot.launch();
