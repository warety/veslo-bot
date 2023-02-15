import { createLogger } from '../../utils';
import { injectedRulesHandler } from './rules.handler';
import { injectedRulesStorage } from './rules.services';
import { injectedAddRules } from './rules.useCase';

const rulesStorage = injectedRulesStorage()();

const addRules = injectedAddRules({ rulesStorage: rulesStorage });
const rulesHandler = injectedRulesHandler({ addRules, logger: createLogger('rules') });

export { rulesHandler, rulesStorage };
