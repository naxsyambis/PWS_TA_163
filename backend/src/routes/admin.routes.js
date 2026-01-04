const router = require('express').Router();
const auth = require('../middlewares/auth.jwt');
const admin = require('../controllers/admin.controller');

// Rute untuk melihat semua client
router.get('/users', auth, admin.users);

// Rute untuk menghapus client (Hanya memanggil admin.removeUser)
router.delete('/users/:id', auth, admin.removeUser);

module.exports = router;