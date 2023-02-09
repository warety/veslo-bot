import winston from 'winston';

type LogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

type LogFile = {
  filename: string,
  level?: LogLevel,
};

type LoggerConfig = {
  level: LogLevel,
  writeToConsole?: boolean,
  logFiles?: LogFile[],
  metaInfo?: string,
};

type Logger = {
  [key in LogLevel]: (msg: string) => void;
}

class DefaultLogger implements Logger {
  private logger: winston.Logger;
  constructor(config: LoggerConfig) {
    const {
      level,
      writeToConsole = false,
      logFiles = [],
      metaInfo,
    } = config;

    const transports = logFiles.map(({ filename, level }) => new winston.transports.File({ filename, level }));
    this.logger = winston.createLogger({
      level,
      defaultMeta: { service: metaInfo },
      format: winston.format.json(),
      transports: transports,
    });

    if (writeToConsole) {
      this.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    };


    this.logger.log('info', 'start');
  }

  error(msg: string) {
    this.logger.log('error', msg);
  }

  warn(msg: string) {
    this.logger.log('warn', msg);
  }

  info(msg: string) {
    this.logger.log('info', msg);
  }

  http(msg: string) {
    this.logger.log('http', msg);
  }

  verbose(msg: string) {
    this.logger.log('verbose', msg);
  }

  debug(msg: string) {
    this.logger.log('debug', msg);
  }

  silly(msg: string) {
    this.logger.log('silly', msg);
  }

};

export {
  DefaultLogger,
  LogLevel
}


