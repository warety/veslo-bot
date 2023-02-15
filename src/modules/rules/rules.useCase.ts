import { CONSTANTS } from '../../contsants';
import { applyRuleToMessage, Message } from '../../domain/message';
import { Reaction, Rule } from '../../domain/rule';

interface RulesStorage {
  retrieveRules: () => Promise<Rule[]>;
}

const defaultRules = [
  {
    triggerWords: [CONSTANTS.TRIGGER_WORD.VESLO, 'test'],
    reaction: {
      message: CONSTANTS.STICKERS.VESLO,
      action: CONSTANTS.ACTIONS.SEND_STICKER,
    },
  },
];

const processMessage = async (message: Message): Promise<Reaction[]> => {
  const rulesStorage: RulesStorage = {
    retrieveRules: async () => Promise.resolve(defaultRules),
  };

  const rules = await rulesStorage.retrieveRules();

  return rules.map((rule) => applyRuleToMessage(message, rule));
};

export { processMessage };
