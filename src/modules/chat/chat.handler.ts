import { Bot } from "types";

const chatHandler = (bot: Bot) => {
  bot.start((ctx) => ctx.reply('Welcome'));
  bot.help((ctx) => {
    ctx.reply('Send me a sticker');
  });
  let a = 2;
  console.log(a);
  bot.on('message', (ctx) => {
    console.log('message', ctx);
    ctx.reply('👍');
  });
  bot.hears('hi', (ctx) => ctx.reply('Hey there'));
};

export { chatHandler };
