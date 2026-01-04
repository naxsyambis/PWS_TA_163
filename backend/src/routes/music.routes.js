const router = require('express').Router();
const auth = require('../middleware/auth.jwt');
const music = require('../controllers/music.controller');

router.get('/search', auth, music.search);

module.exports = router;
