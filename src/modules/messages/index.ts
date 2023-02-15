import { makeMessageHandler } from './message.handler';
import { makeProcessMessage } from './message.useCase';
import { mapMessageToDomain } from './message.mapper';
import { CONSTANTS } from '../../contsants';
import { loggerFabric } from '../../utils';


const defaultRules = [
  {
    triggerWords: [CONSTANTS.TRIGGER_WORD.VESLO, 'test'],
    reaction: {
      message: CONSTANTS.STICKERS.VESLO,
      action: CONSTANTS.ACTIONS.SEND_STICKER,
    },
  },
];

const rulesStorageTest = {
  retrieveRules: () => Promise.resolve(defaultRules),
}


const processMessage = makeProcessMessage({ rulesStorage: rulesStorageTest });

const messageHandler = makeMessageHandler({
  processMessage,
  messageMapper: mapMessageToDomain,
  logger: loggerFabric('messages'),
})

export { messageHandler };
