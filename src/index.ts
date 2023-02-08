import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_BOT_TOKEN } from './config';
import { messageHandler } from './modules';

const start = async () => {
  try {
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

    messageHandler(bot);
  } catch (error) {
    console.error('Error on launch', error);
  }
};

start();
