import TelegramBot from 'node-telegram-bot-api';
import { CONSTANTS } from '../../contsants';
import { Message } from '../../domain/message';
import { Reaction } from '../../domain/rule';
import { Bot } from '../../types';
import { actionMapper, Logger } from '../../utils';


const makeMessageHandler = ({ processMessage, messageMapper, logger }: {
  processMessage: (message: Message) => Promise<Reaction[]>,
  messageMapper: (msg: TelegramBot.Message) => Message,
  logger: Logger
}) => {
  const messageHandler = (bot: Bot) => {
    bot.on('message', async (msg) => {
      try {
        logger.debug(msg);
        const { chat, message_id } = msg;
        const { id: chatId } = chat;

        const actions = await processMessage(messageMapper(msg));

        actions.forEach(({ message = '', action }) => {
          if (action === CONSTANTS.ACTIONS.DO_NOTHING) return;
          bot[actionMapper(action)](chatId, message, {
            reply_to_message_id: message_id,
          });
        });
      } catch (error) {
        logger.error(`${error}`);
      }
    });
  };

  return messageHandler
}


export { makeMessageHandler };
