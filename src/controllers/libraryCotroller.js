
const LibraryFunction = require('./../utils/libraryFunction')
const Books_model = require("./../models/booksModel")
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })



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
