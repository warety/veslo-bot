import { applyRuleToMessage, Message } from '../../domain/message';
import { Reaction, Rule } from '../../domain/rule';

interface RulesStorage {
  retrieveRules: () => Promise<Rule[]>;
}

const makeProcessMessage = ({ rulesStorage }: {
  rulesStorage: RulesStorage,
}) => {
  const processMessage = async (message: Message): Promise<Reaction[]> => {

    const rules = await rulesStorage.retrieveRules();

    return rules.map((rule) => applyRuleToMessage(message, rule));
  };

  return processMessage
}

export { makeProcessMessage };
