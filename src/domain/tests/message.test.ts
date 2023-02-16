import { isWordsInText } from "../message";

describe('Message Domain Test', () => {

  it('Should find word', () => {
    const testString = 'Неверный запрос, либо запрос содержит непонятные слова';
    const result = isWordsInText(testString.toLowerCase(), ['Неверный запрос, либо запрос содержит непонятные слова']);
    
    expect(result).toBe(true);
  })
});