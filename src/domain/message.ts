import { Chat } from './chat';
import { User } from './user';

type MessageText = string;

type Message = {
  id: string;
  chat: Chat;
  from?: User;
  text?: MessageText;
};

const isWordsInText = (text: MessageText, words: string[]) => words.some((word) => text.toLowerCase().includes(word.toLowerCase()));

export type { Message, MessageText };

export { isWordsInText };
