const express = require('express')
const libraryController = require('./../controllers/libraryCotroller')


const router = express.Router()

router
    .route("/get-all-books") // get all data
    .get(libraryController.getAllBooks)

router
    .route("/insert-book") // insert new data 
    .post(libraryController.insertBooks)


router
    .route("/update-book") // update existing books
    .put(libraryController.updateBooks)


router
    .route("/delete-book") // delete existing book
    .delete(libraryController.deleteBook)

router
    .route("/get-all-book-count")
    .get(libraryController.getAllBooksCount)

router
    .route("/books-language-filter")
    .get(libraryController.getBooksByLanguage)

router
    .route("/books-author-filter")
    .get(libraryController.filterBookByAuthor)

// GET NEW BOOKS => published year = current year
// SEARCH BOOKS 
// 


/*{ 
    GET MALAYALAM BOOKS
    GET ENGLISH BOOKS 
}*/

/* book categories = {
    delete books
    get all book count
    get all novels
    get all poems
    get all stries
    get all travelogue ... more categories ...
} */


module.exports = router // export 