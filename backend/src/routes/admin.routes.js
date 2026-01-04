const router = require('express').Router();
const admin = require('../controllers/admin.controller');
const auth = require('../middlewares/auth.jwt'); // Pastikan path file ini benar

// Admin melihat semua daftar client
router.get('/users', auth, admin.users);

// Admin menghapus client (Fitur CRUD yang diminta)
router.delete('/users/:id', auth, admin.removeUser); 

// Admin memberikan/generate API Key untuk client tertentu
router.post('/apikey/:userId', auth, admin.generateApiKey);

module.exports = router;