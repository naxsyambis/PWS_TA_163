// src/routes/public.routes.js
const router = require('express').Router();
const auth = require('../middlewares/auth.jwt'); // Gunakan JWT, bukan API Key
const music = require('../controllers/music.controller');

// Sekarang client hanya perlu Token dari Login untuk akses ini
router.get(
  '/youtube/global/:country/:timeframe',
  auth, 
  music.youtubeGlobal
);

module.exports = router;