const { Router } = require('express');
const { registerUser, signinUser, createBlog } = require('../controllers/user_controllers.js')
const upload = require('../middlewares/upload_img.js')

const router = Router();

router.post('/signup', upload.single("profileImgULR"), registerUser)
router.post('/signin', signinUser)
router.post('/blog', upload.single("coverImg"), createBlog)

module.exports = router;