import { CONSTANTS } from '../../../contsants';
import { messageLogic } from '../message.logic';

describe('Message Logic Tests', () => {
  const logic = messageLogic();

  describe('Parse Text Tests', () => {
    it(`Should return "${CONSTANTS.MESSAGES.VESLO}"`, () => {

      const testString = 'Тут есть весло';
      const result = logic.parseText(testString);

      expect(result?.message).toBe(CONSTANTS.MESSAGES.VESLO);
    });

    it(`Should return nothing`, () => {
      
      const testString = 'А тут нет';
      const result = logic.parseText(testString);

      expect(result?.message).toBeUndefined();
    });
  });
});
