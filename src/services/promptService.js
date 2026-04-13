/**
 * Prompt Service — håndterer indlæsning og håndtering af prompts
 */

const fs = require('fs').promises;
const path = require('path');

const PROMPTS_DIR = path.resolve(__dirname, '../../prompts');

/**
 * Sanitize a name to prevent path traversal attacks.
 * Only allows alphanumeric characters, hyphens, and underscores.
 */
function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9_-]/g, '');
}

/**
 * Resolve a file path within a base directory safely.
 * Throws if the resolved path escapes the base directory.
 */
function safePath(baseDir, ...segments) {
  const resolved = path.resolve(baseDir, ...segments);
  if (!resolved.startsWith(baseDir + path.sep) && resolved !== baseDir) {
    throw new Error('Path traversal detected');
  }
  return resolved;
}

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
  const safeName = sanitizeName(name);
  const filePath = safePath(PROMPTS_DIR, 'system', `${safeName}.md`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return { name: safeName, content };
  } catch {
    return null;
  }
}

/**
 * Hent og udfyld et template med variabler
 */
async function renderTemplate(templateName, variables = {}) {
  const safeName = sanitizeName(templateName);
  const filePath = safePath(PROMPTS_DIR, 'templates', `${safeName}.md`);

  try {
    let content = await fs.readFile(filePath, 'utf-8');

    for (const [key, value] of Object.entries(variables)) {
      const safeKey = key.replace(/[^a-zA-Z0-9_]/g, '');
      content = content.replace(new RegExp(`\\{\\{${safeKey}\\}\\}`, 'g'), value);
    }

    return content;
  } catch {
    return null;
  }
}

module.exports = { listPrompts, getPrompt, renderTemplate };
