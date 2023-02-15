import { CONSTANTS } from '../../contsants';
import { Rule } from '../../domain/rule';
import { NotAuthorizedError } from '../../errors';
import { Bot } from '../../types';
import { Logger } from '../../utils';
import { errorMapper } from '../../utils/errorMapper';
import { mapRawRulesToDomain } from './rules.mapper';

const injectedRulesHandler = ({
  addRules,
  logger,
}: {
  addRules: (rules: Rule[]) => Promise<Rule[]>;
  logger: Logger;
}) => {
  const isAuthorized = (userId?: number) => userId === CONSTANTS.USER_IDS.FAMITA;

  const rulesHandler = (bot: Bot) => {
    bot.onText(/\/configure (.+)/, async (msg) => {
      try {
        logger.info(msg);
        const { chat, text = '', from } = msg;
        const { id: chatId } = chat;

        if (!isAuthorized(from?.id)) throw new NotAuthorizedError();

        const rules = mapRawRulesToDomain(JSON.parse(text.slice(11)));
        await addRules(rules);
        bot.sendMessage(chatId, CONSTANTS.MESSAGES.SUCCESS);
      } catch (error) {
        logger.error(`${error}`);
        bot.sendMessage(msg.chat.id, errorMapper(error), {
          reply_to_message_id: msg.message_id,
        });
      }
    });
  };

  return rulesHandler;
};

export { injectedRulesHandler };
