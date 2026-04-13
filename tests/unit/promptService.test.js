const promptService = require('../../src/services/promptService');

describe('Prompt Service', () => {
  test('lister system prompts', async () => {
    const prompts = await promptService.listPrompts();
    expect(Array.isArray(prompts)).toBe(true);
    expect(prompts.length).toBeGreaterThan(0);
  });

  test('henter et specifikt prompt', async () => {
    const prompt = await promptService.getPrompt('default-assistant');
    expect(prompt).not.toBeNull();
    expect(prompt.name).toBe('default-assistant');
    expect(prompt.content).toBeTruthy();
  });

  test('returnerer null for ukendt prompt', async () => {
    const prompt = await promptService.getPrompt('does-not-exist');
    expect(prompt).toBeNull();
  });
});
