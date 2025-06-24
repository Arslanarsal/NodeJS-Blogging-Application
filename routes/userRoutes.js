const { Router } = require('express');
const {registerUser , signinUser} = require('../controllers/user_controllers.js')
const  upload = require('../middlewares/upload_img.js')

const router = Router();

router.post('/signup', upload.single("profileImgULR"), registerUser)
router.post('/signin',  signinUser)

module.exports = router;