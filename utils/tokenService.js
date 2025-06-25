const jwt = require('jsonwebtoken')

const generateToken = function (user) {
    const payload = {
        email: user.email,
        id: user._id,
        userName: user.userName
    }
    return jwt.sign(payload, process.env.JWT_KEY)
}

const verfiyToken = function (token) {
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = { generateToken, verfiyToken }