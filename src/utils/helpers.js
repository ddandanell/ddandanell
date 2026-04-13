/**
 * Utility helpers
 */

/**
 * Generer et simpelt unikt ID
 */
function generateId(prefix = '') {
  const id = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  return prefix ? `${prefix}_${id}` : id;
}

/**
 * Tæl tokens (simpel estimering)
 */
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

/**
 * Truncate tekst til max længde
 */
function truncate(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

module.exports = { generateId, estimateTokens, truncate };
