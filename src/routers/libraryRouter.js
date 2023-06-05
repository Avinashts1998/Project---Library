const express = require('express')
const libraryController = require('./../controllers/libraryCotroller')


const router = express.Router()

router
    .route("/get-all-books")
    .post(libraryController.getAllBooks)


module.exports = router // export 