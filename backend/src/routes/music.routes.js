const router = require('express').Router();
const music = require('../controllers/music.controller');
const auth = require('../middlewares/auth.jwt'); // Pastikan path middleware benar

// Pastikan baris ke-5 (tempat error terjadi) memanggil fungsi yang benar
router.get(
  '/youtube/global/:country/:timeframe',
  auth, 
  music.youtubeGlobal // Fungsi ini harus ada di music.controller.js
);

module.exports = router;