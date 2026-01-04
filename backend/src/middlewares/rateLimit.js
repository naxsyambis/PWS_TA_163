const db = require('../models/db');

module.exports = async (req, res, next) => {
  const apiKeyId = req.apiKey.id;
  const today = new Date().toISOString().slice(0, 10);

  const [[row]] = await db.query(
    'SELECT * FROM rate_limits WHERE api_key_id = ? AND limit_date = ?',
    [apiKeyId, today]
  );

  if (!row) {
    await db.query(
      'INSERT INTO rate_limits (api_key_id, request_count, limit_date) VALUES (?,1,?)',
      [apiKeyId, today]
    );
    return next();
  }

  if (row.request_count >= 100) {
    return res.status(429).json({ message: 'Rate limit exceeded' });
  }

  await db.query(
    'UPDATE rate_limits SET request_count = request_count + 1 WHERE id = ?',
    [row.id]
  );

  next();
};
