import { Bot } from 'types';

const messageHandler = (bot: Bot) => {
  bot.on('message', (msg) => {

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'А вот и весло');
  });
};

export { messageHandler };
