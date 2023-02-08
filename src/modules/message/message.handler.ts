import { CONSTANTS } from '../../contsants';
import { Bot } from '../../types';
import { actionMapper } from '../../utils';
import { messageLogic } from './message.logic';

const messageHandler = (bot: Bot) => {
  const logic = messageLogic();
  bot.on('message', (msg) => {
    try {
      const { chat, text = '' } = msg;
      const { id: chatId } = chat;
      const { message = '', action } = logic.parseText(text);

      if (action === CONSTANTS.ACTIONS.DO_NOTHING) return;
      bot[actionMapper(action)](chatId, message);
    } catch (error) {
      console.error(error);
    }
  });
};

export { messageHandler };
