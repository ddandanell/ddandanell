const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');

router.get('/', promptController.listPrompts);
router.get('/:name', promptController.getPrompt);

module.exports = router;
