import { CONSTANTS } from '../../contsants';
import { Logger } from '../../utils/logger';

const messageLogic = (logger: Logger) => {
  const parseText = (text: string): { message?: string; action: string } => {
    if (text.toLowerCase().includes(CONSTANTS.TRIGGER_WORD.VESLO.toLowerCase())) {
      logger.debug(`Found in text: ${text}`);
      return {
        message: CONSTANTS.STICKERS.VESLO,
        action: CONSTANTS.ACTIONS.SEND_STICKER,
      };
    }
    logger.debug(`Nothing found in ${text}`);
    return {
      action: CONSTANTS.ACTIONS.DO_NOTHING,
    };
  };

  const parseUser = (userId: number): { message?: string; action: string } => {
    if (userId === CONSTANTS.USER_IDS.FAMITA) {
      return {
        message: CONSTANTS.STICKERS.ANIME,
        action: CONSTANTS.ACTIONS.SEND_STICKER,
      };
    }
    return {
      action: CONSTANTS.ACTIONS.DO_NOTHING,
    };
  };

  return {
    parseText,
    parseUser,
  };
};

export { messageLogic };
