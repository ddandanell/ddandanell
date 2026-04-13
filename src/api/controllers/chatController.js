const chatService = require('../../services/chatService');

/**
 * Send en besked til AI og få et svar
 */
async function sendMessage(req, res, next) {
  try {
    const { message, conversationId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Besked er påkrævet' });
    }

    const response = await chatService.chat(message, conversationId);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Hent en samtale med alle beskeder
 */
async function getConversation(req, res, next) {
  try {
    const { conversationId } = req.params;
    const conversation = await chatService.getConversation(conversationId);
    res.json(conversation);
  } catch (error) {
    next(error);
  }
}

module.exports = { sendMessage, getConversation };
