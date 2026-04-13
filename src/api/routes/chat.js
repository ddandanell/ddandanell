const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.sendMessage);
router.get('/:conversationId', chatController.getConversation);

module.exports = router;
