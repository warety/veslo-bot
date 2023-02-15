import { Rule } from '../../../domain/rule';
import { injectedAddRules } from '../rules.useCase';

describe('Rules Use Cases Tests', () => {
  describe('Add Rules Use Case', () => {
    const addRules = injectedAddRules({
      rulesStorage: {
        retrieveRules: () => Promise.resolve([]),
        addRule: (rule: Rule) => Promise.resolve(rule),
        addRulesBulk: (rules: Rule[]) => Promise.resolve(rules),
      },
    });

    it('Rule added', async () => {
      const newRule: Rule = {
        triggerWords: ['test'],
        reaction: {
          action: 'sendMessage',
          message: 'hello',
        },
      };

      const addedRule = await addRules([newRule]);

      expect(addedRule[0].triggerWords).toBe(newRule.triggerWords);
      expect(addedRule[0].reaction.action).toEqual('sendMessage');
    });
  });
});
