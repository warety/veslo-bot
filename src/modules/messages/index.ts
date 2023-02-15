import { makeMessageHandler } from './message.handler';
import { injectedProcessMessage } from './message.useCase';
import { mapMessageToDomain } from './message.mapper';
import { createLogger } from '../../utils';
import { rulesStorage } from '../rules';

const processMessage = injectedProcessMessage({ rulesStorage: rulesStorage });

const messageHandler = makeMessageHandler({
  processMessage,
  messageMapper: mapMessageToDomain,
  logger: createLogger('messages'),
});

export { messageHandler };
