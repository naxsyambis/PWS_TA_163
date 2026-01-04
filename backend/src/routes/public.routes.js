const router = require('express').Router();
const apiKey = require('../middlewares/apiKey.middleware');
const rateLimit = require('../middlewares/rateLimit');
const music = require('../controllers/music.controller');

router.get(
  '/youtube/global/:country/:timeframe',
  apiKey,
  rateLimit,
  music.youtubeGlobal
);

module.exports = router;
