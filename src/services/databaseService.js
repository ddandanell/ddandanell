/**
 * Database Service — håndterer database-forbindelse og queries
 *
 * TODO: Forbind til PostgreSQL via connection pool
 */

/**
 * Kør en database query
 */
async function query(sql, params = []) {
  // TODO: Implementer med en database driver (pg, knex, etc.)
  console.log('DB Query:', sql, params);
  return [];
}

/**
 * Hent en enkelt række
 */
async function findOne(table, conditions = {}) {
  const keys = Object.keys(conditions);
  const where = keys.map((k, i) => `${k} = $${i + 1}`).join(' AND ');
  const values = Object.values(conditions);

  const sql = `SELECT * FROM ${table}${where ? ` WHERE ${where}` : ''} LIMIT 1`;
  const rows = await query(sql, values);
  return rows[0] || null;
}

/**
 * Indsæt en ny række
 */
async function insert(table, data = {}) {
  const keys = Object.keys(data);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');
  const values = Object.values(data);

  const sql = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders}) RETURNING *`;
  const rows = await query(sql, values);
  return rows[0];
}

module.exports = { query, findOne, insert };
