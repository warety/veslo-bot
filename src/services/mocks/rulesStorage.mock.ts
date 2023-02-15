import { CONSTANTS } from '../../contsants';
import { Rule } from '../../domain/rule';
import { RulesStorage } from '../../services/rulesStorage';

const rulesStorageMock = (): RulesStorage => {
  const rules: Rule[] = [
    {
      triggerWords: ['весло', 'test'],
      reaction: {
        message: CONSTANTS.STICKERS.VESLO,
        action: CONSTANTS.ACTIONS.SEND_STICKER,
      },
    },
  ];
  return {
    retrieveRules: async () => Promise.resolve(rules),
    addRule: async (rule) => {
      rules.push(rule);
      return Promise.resolve(rule);
    },
    addRulesBulk: async (rules) => {
      rules.push(...rules);
      return Promise.resolve(rules);
    },
  };
};

export { rulesStorageMock };
