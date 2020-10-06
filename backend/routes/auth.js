const router = require('express').Router();
const {authRegister, authLogin, authGetName } = require('../controllers/auth');

router.post('/register', authRegister);
router.post('/login', authLogin);
router.post('/name', authGetName);

module.exports = router;