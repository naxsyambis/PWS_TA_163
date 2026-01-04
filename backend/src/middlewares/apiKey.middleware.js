const { findApiKey } = require('../models/apiKey.model');

module.exports = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({ message: 'API Key required' });
  }

  const keyData = await findApiKey(apiKey);
  if (!keyData || keyData.is_active === 0) {
    return res.status(403).json({ message: 'Invalid API Key' });
  }

  req.apiKey = keyData;
  next();
};
