import { CONSTANTS } from '../../contsants';
import { Bot } from '../../types';
import { actionMapper, loggerFabric } from '../../utils';
import { messageLogic } from './message.logic';

const messageHandler = (bot: Bot) => {
  const logger = loggerFabric('message');

  const logic = messageLogic(logger);
  bot.on('message', (msg) => {
    try {
      logger.debug(msg);
      const { chat, text = '', from, message_id } = msg;
      const { id: chatId } = chat;

      const actions = [];

      if (from) {
        actions.push(logic.parseUser(from.id));
      }

      actions.push(logic.parseText(text));

      actions.forEach(({ message = '', action }) => {
        if (action === CONSTANTS.ACTIONS.DO_NOTHING) return;
        bot[actionMapper(action)](chatId, message, {
          reply_to_message_id: message_id
        });
      });
    } catch (error) {
      logger.error(`${error}`);
    }
  });
};

export { messageHandler };
