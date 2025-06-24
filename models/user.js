const { createHmac, randomBytes } = require('node:crypto');
const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImgULR: {
        type: String,
        default: "/images/default.png"
    },
    role: {
        type: String,
        default: "USER",
    }
})

userScheme.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return;
    const salt = randomBytes(16).toString();
    const hash = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');
    this.salt = salt;
    this.password = hash;
    next();

})

const user = mongoose.model("user", userScheme)
module.exports = user
