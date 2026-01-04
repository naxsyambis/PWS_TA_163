const router = require('express').Router();
const auth = require('../controllers/auth.controller');

// Rute untuk pendaftaran user baru
router.post('/register', auth.register);

// Rute untuk login
router.post('/login', auth.login);

module.exports = router;