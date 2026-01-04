const db = require('./db');

exports.findApiKey = async (apiKey) => {
  const [rows] = await db.query(
    `SELECT ak.*, u.is_active
     FROM api_keys ak
     JOIN users u ON ak.user_id = u.id
     WHERE ak.api_key = ? AND ak.status = 'active'`,
    [apiKey]
  );
  return rows[0];
};
