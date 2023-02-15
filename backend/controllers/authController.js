const asyncHandler = require('express-async-handler');
const { generateOtp, sendBySms } = require('../services/otpService')
const { generateToken } = require('../services/tokenService');
const { hashOtp } = require('../services/hashService');
const User = require('../schema/userSchema');

const sendOtp = asyncHandler(async (req,res) => {
    const { phone } = req.body;
    if(!phone) {
        res.status(400).json({message: 'Phone field is required'})
    }

    const otp = await generateOtp();

    const ttl = 1000*60; //  1 min
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;

    const hash = hashOtp(data);

    try{
        // await sendBySms(phone, otp)
        return res.json({
            hash: `${hash}.${expires}`,
            phone,
            otp
        })
    } catch(error) {
        res.status(500);
        throw new Error("Message sending failed")
    }

    


    res.send(otp);
})

const verifyOtp = asyncHandler(async (req,res) => {
    const { otp, hash, phone } = req.body;
    if(!otp || !hash || !phone ) {
        res.status(400);
        throw new Error("All fields are required")
    }

    const [hashOtp, expires] = hash.split('.');
    if(Date.now() > expires) {
        res.status(400);
        throw new Error("Otp expired")
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = verifyOtp(hashOtp, data);
    if(!valid) {
        res.status(400);
        throw new Error("Invalid OTP");
    }

    let user;

    try {
        user = await User.findOne({phone});

        if(!user) {
            user = await User.create({phone});
        }
    } catch (error) {
        res.status(500);
        throw new("Db error");
    }

    // Token
    const { accessToken, refreshToken } =  generateToken({_id: user._id, activated: false}); 

    res.cookie('refreshtoken', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    })

    res.json({ accessToken})
})

module.exports = {
    sendOtp,
    verifyOtp,
}