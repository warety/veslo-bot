import { CONSTANTS } from '../../contsants';
import { Bot } from '../../types';
import { actionMapper } from '../../utils';
import { loggerFabric } from '../../utils/logger';
import { messageLogic } from './message.logic';

const messageHandler = (bot: Bot) => {
  const logger = loggerFabric('message');

  const logic = messageLogic(logger);
  bot.on('message', (msg) => {
    try {
      logger.debug(msg);
      const { chat, text = '' } = msg;
      const { id: chatId } = chat;
      const { message = '', action } = logic.parseText(text);

      if (action === CONSTANTS.ACTIONS.DO_NOTHING) return;
      bot[actionMapper(action)](chatId, message);
    } catch (error) {
      logger.error(`${error}`);
    }
  });
};

export { messageHandler };
