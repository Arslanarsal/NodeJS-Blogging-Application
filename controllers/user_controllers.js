const userModel = require('../models/user.js')
const blogModel = require('../models/blog.js')
const { createHmac } = require('node:crypto');
const { generateToken } = require('../utils/tokenService.js')

const registerUser = async function (req, res) {

    const { userName, email, password, role } = req.body;
    const profileImgULR = req.file ? req.file.filename : "default.png"
    const user = await userModel.create({
        userName, email, password, role, profileImgULR
    })
    const token = generateToken(user);
    res.cookie("token", token);
    res.redirect('/')
}

const signinUser = async function (req, res) {
    const { email, password } = req.body;
    if (!email && !passwordit) {
        return res.redirect('/signin')
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.redirect('/signup')
    }

    const hash = createHmac('sha256', user.salt)
        .update(password)
        .digest('hex');

    if (hash !== user.password) {
        return res.redirect('/signin')
    }
    req.user = user;
    const token = generateToken(user);
    res.cookie("token", token);
    return res.redirect('/')

}

const createBlog = async function (req, res) {
    const { title, body } = req.body;
    const filename = (req.file) ? req.file.filename : ("default.png")
    const blog = await blogModel.create({
        title,
        body,
        coverImg: filename,
        createdBy: req.user.id,
    })
    res.redirect('/blog')
}

module.exports = { registerUser, signinUser, createBlog }