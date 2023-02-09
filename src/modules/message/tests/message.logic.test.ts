import { CONSTANTS } from '../../../contsants';
import { Logger } from '../../../utils/logger';
import { messageLogic } from '../message.logic';

describe('Message Logic Tests', () => {

  const loggerMock: Logger = {
    debug: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    verbose: jest.fn(),
    info: jest.fn(),
    http: jest.fn(),
    silly: jest.fn(),
  };
  const logic = messageLogic(loggerMock);

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
