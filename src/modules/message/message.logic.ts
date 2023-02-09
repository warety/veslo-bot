import { CONSTANTS } from '../../contsants';
import { Logger } from '../../utils/logger';

const messageLogic = (logger: Logger) => {
  const parseText = (text: string): { message?: string; action: string } => {
    if (text.toLowerCase().includes('весло'.toLowerCase())) {
      logger.debug(`Found in text: ${text}`);
      return {
        message: CONSTANTS.MESSAGES.VESLO,
        action: CONSTANTS.ACTIONS.SEND_MESSAGE,
      };
    }
    logger.debug(`Nothing found in ${text}`);
    return {
      action: CONSTANTS.ACTIONS.DO_NOTHING,
    };
  };

  return {
    parseText,
  };
};

export { messageLogic };
