import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_BOT_TOKEN } from './config';
import { createLogger } from './utils/logger';
import { messageHandler, rulesHandler } from './modules';

const logger = createLogger('index.ts');

const start = async () => {
  try {
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
    logger.info('Bot started');
    messageHandler(bot);
    rulesHandler(bot);
  } catch (error) {
    logger.error(`Error on launch ${error}`);
  }
};

start();
