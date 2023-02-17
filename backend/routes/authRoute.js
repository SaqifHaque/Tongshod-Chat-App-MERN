const router = require('express').Router();
const { sendOtp, verifyOtp, activate } = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/activate', activate);

module.exports = router;