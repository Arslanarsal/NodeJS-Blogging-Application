const userModel = require('../models/user.js')
const { verfiyToken } = require('../utils/tokenService.js')

const isloggedIn = async function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('signin');
    }

    const decoded = verfiyToken(token);
    const email = decoded.email;
    if (!email) {
        return res.redirect('signin');
    }
    const user = await userModel.findOne({ email: email })

    if (!user) {
        return res.redirect('signin');
    }
    req.user = user;
    next();
}

module.exports = isloggedIn;