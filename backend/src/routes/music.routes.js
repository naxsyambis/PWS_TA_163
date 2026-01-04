const router = require('express').Router();
const music = require('../controllers/music.controller');
const auth = require('../middlewares/auth.jwt');

// Mendukung semua endpoint: /api/public/tracks/search, /api/public/artists/info, dll
router.get('/:category/:action', auth, music.getMusicData);

module.exports = router;