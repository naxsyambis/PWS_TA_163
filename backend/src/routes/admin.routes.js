const router = require('express').Router();
const auth = require('../middlewares/auth.jwt');
const admin = require('../controllers/admin.controller');

router.get('/users', auth, admin.users);
router.post('/apikey/:userId', auth, admin.generateApiKey);

module.exports = router;
