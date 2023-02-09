import { LogLevel } from '../utils/logger';

const {
  TELEGRAM_BOT_TOKEN = '',
  LOGGER_LEVEL: RAW_LOGGER_LEVEL,
  LOGGER_CONSOLE: RAW_LOGGER_CONSOLE,
} = process.env;

const LOGGER_LEVEL = (RAW_LOGGER_LEVEL ? RAW_LOGGER_LEVEL : 'error') as LogLevel;
const LOGGER_CONSOLE = (RAW_LOGGER_CONSOLE ? RAW_LOGGER_CONSOLE : false) as boolean;

export {
  TELEGRAM_BOT_TOKEN,
  LOGGER_LEVEL,
  LOGGER_CONSOLE
};
