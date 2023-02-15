const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const { hashOtp } = require('./hashService');
const twilio = require('../utils/twilio');

const generateOtp = () => {
    const otp = crypto.randomInt(1000,9999);
    return otp;
}

const sendBySms =  asyncHandler(async (phone, otp) => {
    return await twilio.messages({
         to: phone,
         from: process.env.SMS_FROM_NUMBER,
         body: `Your Tongshod OTP is ${otp}`
    })
})

const verifyOtp = (hashedOtp, data) => {
    let computedHash = hashOtp(data);
    return computedHash === hashedOtp;

}

module.exports = {
    generateOtp,
    sendBySms,
    verifyOtp
}