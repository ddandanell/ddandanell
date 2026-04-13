/**
 * Prompt Service — håndterer indlæsning og håndtering af prompts
 */

const fs = require('fs').promises;
const path = require('path');

const PROMPTS_DIR = path.join(__dirname, '../../prompts');

/**
 * List alle system prompts
 */
async function listPrompts() {
  const systemDir = path.join(PROMPTS_DIR, 'system');

  try {
    const files = await fs.readdir(systemDir);
    return files
      .filter((f) => f.endsWith('.md'))
      .map((f) => ({
        name: f.replace('.md', ''),
        path: `system/${f}`,
      }));
  } catch {
    return [];
  }
}

/**
 * Hent et specifikt prompt ved navn
 */
async function getPrompt(name) {
  const filePath = path.join(PROMPTS_DIR, 'system', `${name}.md`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return { name, content };
  } catch {
    return null;
  }
}

/**
 * Hent og udfyld et template med variabler
 */
async function renderTemplate(templateName, variables = {}) {
  const filePath = path.join(PROMPTS_DIR, 'templates', `${templateName}.md`);

  try {
    let content = await fs.readFile(filePath, 'utf-8');

    for (const [key, value] of Object.entries(variables)) {
      content = content.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
    }

    return content;
  } catch {
    return null;
  }
}

module.exports = { listPrompts, getPrompt, renderTemplate };
