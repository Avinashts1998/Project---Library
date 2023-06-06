const staticFunction = require('./../utils/staticFunction')
const Books_model = require("./../models/booksModel")

class LibraryFunction {

    getAllBooks = async (dbName, booksColection) => {
        try {
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)
            let res = ""
            const result = await booksModel.find({}).then((data) => {
                res = data
            })

            console.log(res)

            return res;

        } catch (error) {
            console.log(error)
        }
    }


    insertBooks = async (dbName, booksColection, paramsData) => {
        try {
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            const result = await booksModel.create(paramsData).then(
                console.log("Data Inserted Succesfuly!")
            )

            return paramsData;
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = LibraryFunction;
