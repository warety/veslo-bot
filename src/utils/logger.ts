import winston, { format } from 'winston';
import { LOGGER_CONSOLE, LOGGER_LEVEL } from '../config';

type LogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

type LogFile = {
  filename: string;
  level?: LogLevel;
};

type LoggerConfig = {
  level: LogLevel;
  writeToConsole?: boolean;
  logFiles?: LogFile[];
  metaInfo?: string;
};

type Logger = {
  [key in LogLevel]: (msg: any) => void;
};

const { combine, timestamp } = format;

class DefaultLogger implements Logger {
  private logger: winston.Logger;
  constructor(config: LoggerConfig) {
    const { level, writeToConsole = false, logFiles = [], metaInfo } = config;

    const transports = logFiles.map(({ filename, level }) => new winston.transports.File({ filename, level }));
    this.logger = winston.createLogger({
      level,
      defaultMeta: { service: metaInfo },
      format: combine(timestamp(), format.json()),
      transports: transports,
    });

    if (writeToConsole) {
      this.logger.add(new winston.transports.Console({}));
    }
  }

  error(msg: any) {
    this.logger.log('error', msg);
  }

  warn(msg: any) {
    this.logger.log('warn', msg);
  }

  info(msg: any) {
    this.logger.log('info', msg);
  }

  http(msg: any) {
    this.logger.log('http', msg);
  }

  verbose(msg: any) {
    this.logger.log('verbose', msg);
  }

  debug(msg: any) {
    this.logger.log('debug', msg);
  }

  silly(msg: any) {
    this.logger.log('silly', msg);
  }
}

const createLogger = (metaInfo: string): Logger => {
  return new DefaultLogger({
    level: LOGGER_LEVEL,
    writeToConsole: LOGGER_CONSOLE,
    logFiles: [
      {
        level: 'error',
        filename: 'error.log',
      },
      {
        level: 'debug',
        filename: 'combined.log',
      },
    ],
    metaInfo,
  });
};

export { createLogger, DefaultLogger, LogLevel, Logger };
