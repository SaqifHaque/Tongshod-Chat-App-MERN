const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '1y',
    })
    return { accessToken, refreshToken };
}

module.exports = {
    generateToken
}