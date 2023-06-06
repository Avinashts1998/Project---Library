const express = require('express')
const libraryController = require('./../controllers/libraryCotroller')


const router = express.Router()

router
    .route("/get-all-books")
    .get(libraryController.getAllBooks)

router
    .route("/insert-book")
    .post(libraryController.insertBooks)


module.exports = router // export 