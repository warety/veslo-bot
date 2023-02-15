import { Rule } from '../domain/rule';

interface RulesStorage {
  retrieveRules: () => Promise<Rule[]>;
  addRule: (rule: Rule) => Promise<Rule>;
  addRulesBulk: (rules: Rule[]) => Promise<Rule[]>;
}

export type { RulesStorage };
