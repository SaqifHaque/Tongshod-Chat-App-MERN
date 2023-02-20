const asyncHandler = require('express-async-handler');
const { generateOtp, sendBySms } = require('../services/otpService')
const { generateToken, storeRefreshToken, verifyRefreshToken, updateRefreshToken } = require('../services/tokenService');
const { hashOtp } = require('../services/hashService');
const User = require('../schema/userSchema');
const UserDto = require('../dtos/userDto');
const path = require('path');

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

    if(!isValid) {
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
        throw new Error("Db error");
    }

    // Token
    const { accessToken, refreshToken } =  generateToken({_id: user._id, activated: false}); 

    await storeRefreshToken(refreshToken, user._id);

    res.cookie('refreshToken', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    })

    res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    })

    const userDto = new UserDto(user);

    res.json({ user: userDto, auth: true })
})

const activate = asyncHandler(async (req, res) => {
    const { name, avatar } = req.body;
    if(name || avatar) {
        res.status(400):
        throw new Error("All Fields are required");
    }

    const buffer = Buffer.from(
        avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),'base64'
    );

    const imagePath = `${Data.now()}-${Math.round(Math.random()*1e9)}.png`

    try {
       const jimpRes = await jimp.read(buffer);
       jimpRes.resize(150, jimp.AUTO).write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch(error) {
       res.status(500);
       throw new Error('Could not process the image');
    }

    const user = await User.findOne({_id: req.user.id});
    
    if(!user) {
        res.status(404);
        throw new Error("User not found")
    }
    
    try {
        user.acticated = true;
        user.name = name;
        user.avatar = `/storage/${imagePath}`;
        user.save();
    
        res.status(200).json({ user: new UserDto(user), auth: true});
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
   
})

const refreshToken = asyncHandler(async (req,res) => {
    const { refreshToken: refreshTokenFromCookie } = req.cookies;

    let userData;
    try {
        userData = await verifyRefreshToken(refreshTokenFromCookie);
    } catch (error) {
        res.status(401); 
        return new Error("Invalid Token");
    }

    try{
        const token = tokenService.findRefreshToken(userData._id, refreshTokenFromCookie)

        if(!token){
            res.status(401);
            return new Error("invalid Token");
        }

    } catch(error) {    
        res.status(500);
        return new Error("Internal Error");
    }

    const user = await User.findOne({_id: userData._id});
    if(!user){
        res.status(404);
        return new Error("No users");
    }

    const { refreshToken, accessToken } = generateTokens({_id: userData._id});

    try {
        await updateRefreshToken(userData._id, refreshToken):
    } catch (error) {
        res.status(500);
        return new Error("Internal Error");
    }

    res.cookie('refreshToken', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    })

    res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    })

    const userDto = new UserDto(user);

    res.json({ user: userDto, auth: true })
    
})

const logout = asyncHandler(async (req,res) => {
    const { refreshToken } = req.cookies;

    await Token.deleteOne({ token : refreshToken });

    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');

    res.json({user: null, auth: false});
})


module.exports = {
    sendOtp,
    verifyOtp,
    activate,
    refreshToken,
    logout
}