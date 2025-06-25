const { Router } = require('express')
const blogModel = require('../models/blog.js')
const isloggedIn = require('../middlewares/isloggedIn.js')
const router = Router();


router.get('/', async function (req, res) {
    const blogs = req.user
        ? await blogModel.find({ createdBy: req.user.id }).sort({ createdAt: -1 })
        : [];

    res.render("home", { blogs });
});

router.get('/signup', function (req, res) {
    res.render("signup")
})

router.get('/blog', function (req, res) {
    res.render("blog")
})

router.get('/blog/:id', async function (req, res) {
    const blodId = req.params.id
    const blog = await blogModel.findById(blodId)
    res.render("showOneBlog", { blog })
})

router.get('/signin', function (req, res) {
    res.render("signin")
})

router.get('/logout', function (req, res) {
    res.clearCookie("token").redirect('/')
})


module.exports = router;