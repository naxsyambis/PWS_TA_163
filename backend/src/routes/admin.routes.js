const router = require('express').Router();
const auth = require('../middlewares/auth.jwt');
const admin = require('../controllers/admin.controller');

// Menampilkan semua client
router.get('/users', auth, admin.users);

// Generate API Key untuk client
router.post('/apikey/:userId', auth, admin.generateApiKey);

// Menghapus client (CRUD)
router.delete('/users/:id', auth, admin.removeUser); 

module.exports = router;