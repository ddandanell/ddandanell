const { generateId, estimateTokens, truncate } = require('../../src/utils/helpers');

describe('Helpers', () => {
  describe('generateId', () => {
    test('genererer et unikt ID', () => {
      const id = generateId();
      expect(id).toBeTruthy();
      expect(typeof id).toBe('string');
    });

    test('tilføjer prefix til ID', () => {
      const id = generateId('test');
      expect(id.startsWith('test_')).toBe(true);
    });
  });

  describe('estimateTokens', () => {
    test('estimerer tokens fra tekst', () => {
      const tokens = estimateTokens('Hello world!');
      expect(tokens).toBeGreaterThan(0);
    });
  });

  describe('truncate', () => {
    test('truncerer lang tekst', () => {
      const result = truncate('Dette er en meget lang tekst der skal trunceres', 20);
      expect(result.length).toBeLessThanOrEqual(20);
      expect(result.endsWith('...')).toBe(true);
    });

    test('beholder kort tekst', () => {
      const result = truncate('Kort', 20);
      expect(result).toBe('Kort');
    });
  });
});
