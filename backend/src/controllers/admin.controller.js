const { getAllUsers } = require('../models/user.models');
const crypto = require('crypto');
const { createApiKey } = require('../models/apiKey.model');

exports.users = async (req, res) => {
  res.json(await getAllUsers());
};

exports.generateApiKey = async (req, res) => {
  const apiKey = 'pk_' + crypto.randomBytes(16).toString('hex');
  await createApiKey(req.params.userId, apiKey);
  res.json({ apiKey });
};
