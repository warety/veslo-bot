import { BotMessage } from '../../types';
import { Message } from '../../domain/message';

const mapMessageToDomain = (message: BotMessage): Message => ({
  id: String(message.message_id),
  chat: {
    id: String(message.chat.id),
    name: message.chat.username || message.chat.title || '',
    type: message.chat.type,
  },
  from: {
    id: String(message.from?.id),
    username: message.from?.username || '',
  },
  text: message.text,
});

export { mapMessageToDomain };
