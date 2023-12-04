
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
        console.log(data)

        const sortedArray = []

        data.forEach((item) => {
            if(sortedArray[0]?.bookNo > item.bookNo){
                sortedArray.unshift(item)
            } else {
                sortedArray.push(item)
            }
        })
        console.log(sortedArray)
        //    const reversedArry = []

        /*    for (let i = data.length - 1; i >= 0; i--) {
                reversedArry.push(data[i])
            }
            let book_data = reversedArry.map((book) => {
                return ({
                    book_id: book._id,
                    bookName: book.book_name,
                    bookNo: book.book_no,
                    auther: book.auther,
                    publications: book.publications,
                    category: book.category,
                    shelf_number: book.shelf_number,
                    rowNo: book.rowNo,
                    published_year: book.published_year,
                    language: book.language,
                    description: book.description,
                    image: book.image
                })
            })
    */
        res.status(200).json({
            data: sortedArray,
            success: true,
            result: true
        })

    } catch (error) {
        console.log(error)
    }
}

// insert new books //

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
            message: "Book Inserted",
            data: data
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
        let deleteMsg; // simple threading
        let succesMsg; // simple threading

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







