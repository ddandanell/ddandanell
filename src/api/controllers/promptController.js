const promptService = require('../../services/promptService');

/**
 * List alle tilgængelige prompts
 */
async function listPrompts(_req, res, next) {
  try {
    const prompts = await promptService.listPrompts();
    res.json(prompts);
  } catch (error) {
    next(error);
  }
}

/**
 * Hent et specifikt prompt ved navn
 */
async function getPrompt(req, res, next) {
  try {
    const { name } = req.params;
    const prompt = await promptService.getPrompt(name);

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt ikke fundet' });
    }

    res.json(prompt);
  } catch (error) {
    next(error);
  }
}

module.exports = { listPrompts, getPrompt };
