/**
 * Chat Service — håndterer AI-samtaler
 *
 * TODO: Forbind til OpenAI API og database
 */

const promptService = require('./promptService');

/**
 * Send en besked og få AI-svar
 */
async function chat(message, conversationId = null) {
  const systemPrompt = await promptService.getPrompt('default-assistant');

  // TODO: Implementer AI API-kald og gem i database
  return {
    conversationId: conversationId || generateId(),
    message: {
      role: 'assistant',
      content: `[Placeholder] Modtog: "${message}"`,
    },
    systemPrompt: systemPrompt?.name,
  };
}

/**
 * Hent en samtale
 */
async function getConversation(conversationId) {
  // TODO: Hent fra database
  return {
    id: conversationId,
    messages: [],
  };
}

function generateId() {
  return `conv_${Date.now()}`;
}

module.exports = { chat, getConversation };
