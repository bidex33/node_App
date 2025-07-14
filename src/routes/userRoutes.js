const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')

const {registerUser, loginUser} = require("../controllers/userController")

router.post('/create-user', upload.single("profilePicture") ,registerUser)
router.post('/login-user', loginUser)

module.exports = router;