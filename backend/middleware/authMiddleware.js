const asyncHandler = require('express-async-handler');
const User = require('../schema/userSchema');
const jwt = require('jsonwebtoken');
const { verifyAccessToken } = require('../services/tokenService');

const authorization = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401);
            throw new Error("Not authorized, please login")
        }

        // Verify Token
        const verified = await verifyAccessToken(token);

        console.log(verified);

        const user = await User.findById(verified.id).select("-password");

        console.log(user);

        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401);
        throw new Error("Not authorized, please login"); 
    }
});

module.exports = authorization;