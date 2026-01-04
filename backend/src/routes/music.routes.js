const router = require('express').Router();
const music = require('../controllers/music.controller');
const apiKeyMiddleware = require('../middlewares/apiKey.middleware');
const rateLimit = require('../middlewares/rateLimit');

// Client mencari data YouTube Global
// Contoh akses: /api/public/youtube/global/ID/day?apiKey=KUNCI_ANDA
router.get(
  '/youtube/global/:country/:timeframe',
  apiKeyMiddleware, // Cek apakah API Key valid
  rateLimit,        // Batasi jumlah pencarian
  music.youtubeGlobal
);

module.exports = router;