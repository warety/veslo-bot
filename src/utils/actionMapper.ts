import { CONSTANTS } from '../contsants';
import { Action } from '../types';

// TODO: Написал чушь нужно подумать
const actionMapper = (action: string): Action => {
  switch (action) {
    case CONSTANTS.ACTIONS.SEND_MESSAGE:
      return 'sendMessage';
    case CONSTANTS.ACTIONS.SEND_STICKER:
      return 'sendSticker';
    default:
      throw new Error(CONSTANTS.ERRORS.ACTIONS.CANNOT_MAP_ERROR);
  }
};

export { actionMapper };
