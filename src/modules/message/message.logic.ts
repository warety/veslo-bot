import { CONSTANTS } from '../../contsants';

const messageLogic = () => {
  const parseText = (text: string): { message?: string; action: string } => {
    if (text.toLowerCase().includes('весло'.toLowerCase())) {
      return {
        message: CONSTANTS.MESSAGES.VESLO,
        action: CONSTANTS.ACTIONS.SEND_MESSAGE,
      };
    }
    return {
      action: CONSTANTS.ACTIONS.DO_NOTHING,
    };
  };

  return {
    parseText,
  };
};

export { messageLogic };
