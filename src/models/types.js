/**
 * Data Models — type-definitioner
 *
 * Bruges til validering og dokumentation af datastrukturer.
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} email
 * @property {string} name
 * @property {string} role - 'user' | 'admin'
 * @property {Date} created_at
 * @property {Date} updated_at
 */

/**
 * @typedef {Object} Conversation
 * @property {number} id
 * @property {number} user_id
 * @property {string} title
 * @property {string} model
 * @property {Date} created_at
 * @property {Date} updated_at
 */

/**
 * @typedef {Object} Message
 * @property {number} id
 * @property {number} conversation_id
 * @property {string} role - 'system' | 'user' | 'assistant'
 * @property {string} content
 * @property {number} tokens_used
 * @property {Date} created_at
 */

/**
 * @typedef {Object} PromptVersion
 * @property {number} id
 * @property {string} name
 * @property {number} version
 * @property {string} content
 * @property {boolean} is_active
 * @property {Date} created_at
 */

module.exports = {};
