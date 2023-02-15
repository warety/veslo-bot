import { Bot } from '../../types';
import { loggerFabric } from '../../utils';

const rulesHandler = (bot: Bot) => {
  const logger = loggerFabric('rules');

  bot.onText(/\/configure (.+)/, async (msg) => {
    try {
      logger.info(msg);
      const { chat, message_id } = msg;
      const { id: chatId } = chat;

      bot.sendMessage(chatId, 'salam voram');
    } catch (error) {
      logger.error(`${error}`);
    }
  });
};

export { rulesHandler };
