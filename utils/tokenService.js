const jwt = require('jsonwebtoken')

const generateToken = function (user) {
    return jwt.sign({ email: user.email }, process.env.JWT_KEY)
}

const verfiyToken = function (token) {
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = { generateToken, verfiyToken }