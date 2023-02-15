import { CONSTANTS } from '../../../contsants';
import { Message } from '../../../domain/message';
import { rulesStorageMock } from '../../../services/mocks';
import { injectedProcessMessage } from '../message.useCase';

describe('Proccess Message Tests', () => {
  const message: Message = {
    id: '1',
    from: {
      id: '1',
      username: 'Alex',
    },
    chat: {
      id: '2',
      name: 'Group',
      type: 'group',
    },
  };

  const processMessage = injectedProcessMessage({ rulesStorage: rulesStorageMock() });

  describe('Parse Text Tests', () => {
    it(`Should return "${CONSTANTS.MESSAGES.VESLO}"`, async () => {
      const testString = 'Тут есть весло';
      const testMessage = { ...message, text: testString };
      const result = await processMessage(testMessage);

      expect(result[0].action).toBe(CONSTANTS.ACTIONS.SEND_STICKER);
      expect(result[0].message).toBe(CONSTANTS.STICKERS.VESLO);
    });

    it(`Should return nothing`, async () => {
      const testString = 'А тут нет';

      const testMessage = { ...message, text: testString };
      const result = await processMessage(testMessage);

      expect(result[0].message).toBeUndefined();
      expect(result[0].action).toBe(CONSTANTS.ACTIONS.DO_NOTHING);
    });
  });
});
