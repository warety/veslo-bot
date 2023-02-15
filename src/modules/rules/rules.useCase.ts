import { Rule } from '../../domain/rule';
import { RulesStorage } from '../../services/rulesStorage';

const injectedAddRules = ({ rulesStorage }: { rulesStorage: RulesStorage }) => {
  const addRules = async (rules: Rule[]): Promise<Rule[]> => {
    return await rulesStorage.addRulesBulk(rules);
  };

  return addRules;
};

export { injectedAddRules };
