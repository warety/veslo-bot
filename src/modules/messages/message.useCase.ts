import { CONSTANTS } from '../../contsants';
import { isWordsInText, Message } from '../../domain/message';
import { Reaction, Rule } from '../../domain/rule';
import { RulesStorage } from '../../services/rulesStorage';

const injectedProcessMessage = ({ rulesStorage }: { rulesStorage: RulesStorage }) => {
  const applyRuleToMessage = (message: Message, rule: Rule): Reaction => {
    const { text = '' } = message;
    if (isWordsInText(text, rule.triggerWords)) return rule.reaction;
    return { action: CONSTANTS.ACTIONS.DO_NOTHING };
  };

  const processMessage = async (message: Message): Promise<Reaction[]> => {
    const rules = await rulesStorage.retrieveRules();

    return rules.map((rule) => applyRuleToMessage(message, rule));
  };

  return processMessage;
};

export { injectedProcessMessage };
