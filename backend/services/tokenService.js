const jwt = require('jsonwebtoken');
const Token = require('../schema/tokenSchema');
const asyncHandler = require('express-async-handler')

const generateToken = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '1y',
    })
    return { accessToken, refreshToken };
}

const storeRefreshToken = asyncHandler( async (token, userId) => {
    try {
        await Token.create({
            token,
            userId
        })
    } catch (error) {
        console.log(error);
    }
})

const verifyAccessToken = asyncHandler( async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
})

module.exports = {
    generateToken,
    storeRefreshToken,
    verifyAccessToken
}