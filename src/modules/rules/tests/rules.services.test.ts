import { Rule } from '../../../domain/rule';
import { injectedRulesStorage } from '../rules.services';

describe('Rules Services Tests', () => {
  let rulesStorage = injectedRulesStorage()();

  describe('RuleStorage Tests', () => {
    beforeEach(() => {
      rulesStorage = injectedRulesStorage()();
    });

    it('Add one rule', async () => {
      const newRule: Rule = {
        triggerWords: ['test'],
        reaction: {
          action: 'sendMessage',
          message: 'hello',
        },
      };

      const addedRule = await rulesStorage.addRule(newRule);

      const rules = await rulesStorage.retrieveRules();

      expect(addedRule.triggerWords).toBe(newRule.triggerWords);
      expect(addedRule.reaction.action).toEqual('sendMessage');
      expect(rules.length).toEqual(1);
    });

    it('Add array rules', async () => {
      const newRules: Rule[] = [
        {
          triggerWords: ['test'],
          reaction: {
            action: 'sendMessage',
            message: 'hello',
          },
        },
        {
          triggerWords: ['teqw'],
          reaction: {
            action: 'sendMessage',
            message: 'hell2',
          },
        },
      ];

      const addedRules = await rulesStorage.addRulesBulk(newRules);

      const rules = await rulesStorage.retrieveRules();

      expect(addedRules.length).toEqual(2);
      expect(rules.length).toEqual(2);
    });
  });
});
