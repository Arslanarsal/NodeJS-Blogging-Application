const { Router } = require('express')
const isloggedIn = require('../middlewares/isloggedIn.js')
const router = Router();

router.get('/', isloggedIn, function (req, res) {
    res.render("home")
})

router.get('/signup', function (req, res) {
    res.render("signup")
})

router.get('/signin', function (req, res) {
    res.render("signin")
})

router.get('/signout', function (req, res) {
    res.cookie("token" ,"")
    res.redirect('/')
})

module.exports = router;