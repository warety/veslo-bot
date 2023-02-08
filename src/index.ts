import { Telegraf } from 'telegraf';

import { TELEGRAM_BOT_TOKEN } from './config';
import { chatHandler } from './modules';

const start = async () => {
  try {
    const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

    chatHandler(bot);

    await bot.launch();
  } catch (error) {
    console.error('Error on launch', error);
  }
};

start();
