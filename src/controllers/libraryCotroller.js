
const LibraryFunction = require('./../utils/libraryFunction')
const Books_model = require("./../models/booksModel")
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })


// get all books

exports.getAllBooks = async (req, res, next) => {
    try {
        LibraryFns = new LibraryFunction()

        const argsData = (req.body.args) ? req.body.args : "";
        const authData = (argsData.auth) ? argsData.auth : "";

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const data = await LibraryFns.getAllBooks(dbName, booksColection)


        res.status(200).json({
            data: data,
            success: true,
            result: true
        })

    } catch (error) {
        console.log(error)
    }
}

// insert new books

exports.insertBooks = async (req, res, next) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const authData = (argsData.auth) ? argsData.auth : "";

        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const data = await LibraryFns.insertBooks(dbName, booksColection, paramsData)

        res.status(200).json({
            success: true,
            data: data,
            message: "Books Inserted Succesfully"
        })

    } catch (error) {
        console.log(error)
    }
}

// update existing books

exports.updateBooks = async (req, res, next) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const authData = (argsData.auth) ? argsData.auth : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const updatedData = await LibraryFns.updateBooks(dbName, booksColection, paramsData)

        res.status(200).json({
            success: true,
            data: paramsData,
            message: "Books updated succesfully.."
        })

    } catch (error) {
        console.log(error)
    }
}

// Update Book Status //

exports.updateBookStatus = async (req, res) => {
    const argsData = (req.body.args) ? req.body.args : "";
    const paramsData = (argsData.params) ? argsData.params : "";

    LibraryFns = new LibraryFunction()

    const dbName = process.env.LIBRARY_DATABASE
    const booksColection = "Books"

    await LibraryFns.updateBookStatus(paramsData, booksColection, dbName)

    res.status(200).json({
        success: true,
        data: "Book Status Updated"
    })




}

// delete existing books

exports.deleteBook = async (req, res) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const data = await LibraryFns.deleteBook(dbName, booksColection, paramsData)
        let deleteMsg;
        let succesMsg;

        if (data != 'No Book Found on this id') {
            deleteMsg = "Book Deleted"
        } else {
            deleteMsg = "No Books Deleted!"
        }
        if (deleteMsg == "Book Deleted") {
            succesMsg = true;
        } else {
            succesMsg = false;
        }

        res.status(200).json({
            success: succesMsg,
            message: deleteMsg,
            data: data,
        })

    } catch (error) {
        console.log(error)
    }
}


exports.getAllBooksCount = async (req, res, next) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const count = await LibraryFns.getAllBooksCount(dbName, booksColection)


        res.status(200).json({
            success: true,
            data: count,
            message: 'Count fetch succesfully'
        })

    } catch (error) {
        console.log(error)
    }
}


exports.getBooksByLanguage = async (req, res, next) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const count = await LibraryFns.getBooksByLanguage(dbName, booksColection, paramsData)


        res.status(200).json({
            success: true,
            data: count,
            message: 'Count fetch succesfully'
        })

    } catch (error) {
        console.log(error)
    }
}

exports.filterBookByAuthor = async (req, res, next) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        LibraryFns = new LibraryFunction()

        const dbName = process.env.LIBRARY_DATABASE
        const booksColection = "Books"

        const count = await LibraryFns.filterBookByAuthor(dbName, booksColection, paramsData)


        res.status(200).json({
            success: true,
            data: count,
            message: 'Count fetch succesfully'
        })

    } catch (error) {
        console.log(error)
    }
}







