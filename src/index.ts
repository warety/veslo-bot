import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_BOT_TOKEN } from './config';
import { loggerFabric } from './utils/logger';
import { messageHandler } from './modules';

const logger = loggerFabric('index.ts');

const start = async () => {
  try {
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
    logger.info('Bot started');
    messageHandler(bot);
  } catch (error) {
    logger.error(`Error on launch ${error}`);
  }
};

start();
