const express = require('express')
const userController = require('./../controllers/usersController')

const router = express.Router()

router
    .route("/register")
    .post(userController.registerUser)

module.exports = router;
