/**
 * 🚀 Rumraket — App Entry Point
 */

const express = require('express');
const config = require('../config/default.json');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/health', require('./api/routes/health'));
app.use('/api/chat', require('./api/routes/chat'));
app.use('/api/prompts', require('./api/routes/promptRoutes'));

// Error handling
app.use(require('./api/middleware/errorHandler'));

const PORT = process.env.APP_PORT || config.app.port || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Rumraket kører på port ${PORT}`);
});

module.exports = app;
