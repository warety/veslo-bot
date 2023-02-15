import { Rule } from '../../domain/rule';
import { RulesStorage } from '../../services/rulesStorage';

const injectedRulesStorage = () => {
  const rulesStorage = (): RulesStorage => {
    const rules: Rule[] = [];
    return {
      retrieveRules: async () => Promise.resolve(rules),
      addRule: async (rule) => {
        rules.push(rule);
        return Promise.resolve(rule);
      },
      addRulesBulk: async (newRules) => {
        rules.push(...newRules);
        return Promise.resolve(rules);
      },
    };
  };

  return rulesStorage;
};

export { injectedRulesStorage };
