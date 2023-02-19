const router = require('express').Router();
const { sendOtp, verifyOtp, activate, refreshToken } = require('../controllers/authController');
const authorization = require('../middleware/authMiddleware');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/activate', authorization, activate);
router.get('/refresh', refreshToken); 

module.exports = router;