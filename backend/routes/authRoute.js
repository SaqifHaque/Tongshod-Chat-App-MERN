const router = require('express').Router();
const { sendOtp, verifyOtp, activate, refreshToken, logout } = require('../controllers/authController');
const authorization = require('../middleware/authMiddleware');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/activate', authorization, activate);
router.get('/refresh', refreshToken); 
router.post('/logout', authorization, logout);

module.exports = router;