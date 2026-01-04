const router = require('express').Router();
const auth = require('../middleware/auth.jwt');
const admin = require('../controllers/admin.controller');

router.get('/users', auth, admin.users);
router.delete('/users/:id', auth, admin.deleteUser);

module.exports = router;
