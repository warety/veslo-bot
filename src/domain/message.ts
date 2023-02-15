import { CONSTANTS } from '../contsants';
import { Chat } from './chat';
import { Reaction, Rule } from './rule';
import { User } from './user';

type MessageText = string;

type Message = {
  id: string;
  chat: Chat;
  from?: User;
  text?: MessageText;
};

const isWordsInText = (text: MessageText, words: string[]) => words.some((word) => text.includes(word));

const applyRuleToMessage = (message: Message, rule: Rule): Reaction => {
  const { text = '' } = message;
  if (isWordsInText(text, rule.triggerWords)) return rule.reaction;
  return { action: CONSTANTS.ACTIONS.DO_NOTHING };
};

export type { Message, MessageText };

export { isWordsInText, applyRuleToMessage };
