const staticFunction = require('./../utils/staticFunction')
const Books_model = require("./../models/booksModel")

class LibraryFunction {

    /**
      * Get All Books
      * @author Avinash TS
      * @Since June 2023
      * @param {ArgsData, AuthData}
      * @return All Books
      */

    getAllBooks = async (dbName, booksColection) => {
        try {
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            const result = await booksModel.find()

            return result;

        } catch (error) {
            console.log(error)
        }
    }

    /**
      * Insert New Book
      * @author Avinash TS
      * @Since June 2023
      * @param {ArgsData, AuthData}
      * @return Insereted Data
      */

    insertBooks = async (dbName, booksColection, paramsData) => {
        try {
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)



            const existing_book = await booksModel.findOne({ book_name: paramsData.book_name, book_no: paramsData.book_no })
            console.log(existing_book)
            let result
            if (existing_book) {
                result = "book exist"
            } else {
                await booksModel.create(paramsData).then((data) => {
                    console.log("Data Inserted====>", data)
                    result = data
                })
            }

            return result;


        } catch (error) {
            console.log(error)
        }
    }

    /**
      * Update existing Book
      * @author Avinash TS
      * @Since June 2023
      * @param {ArgsData, AuthData}
      * @return Updating Inserted data
      */

    updateBooks = async (dbName, booksColection, paramsData) => {
        try {
            const book_id = paramsData._id
            const bookNo = (paramsData.book_no) ? paramsData.book_no : '';
            const bookName = (paramsData.book_name) ? paramsData.book_name : '';
            const auther = (paramsData.auther) ? paramsData.auther : '';
            const publications = (paramsData.publications) ? paramsData.publications : '';
            const category = (paramsData.category) ? paramsData.category : '';
            const shelf_number = (paramsData.shelf_number) ? paramsData.shelf_number : '';
            const row_no = (paramsData.row_no) ? paramsData.row_no : '';
            const published_year = (paramsData.published_year) ? paramsData.published_year : '';
            const language = (paramsData.language) ? paramsData.language : '';
            const description = (paramsData.description) ? paramsData.description : '';
            const image = (paramsData.image) ? paramsData.image : '';

            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const update_obj = {
                "book_no": bookNo,
                "book_name": bookName,
                "auther": auther,
                "publications": publications,
                "category": category,
                "shelf_number": shelf_number,
                "row_no": row_no,
                "published_year": published_year,
                "language": language,
                "description": description,
                "image": image,
            }

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            const books_area = { '_id': book_id }
            let updateData = await booksModel.findOneAndUpdate(
                books_area,
                update_obj,
                { new: true, useFindAndModify: false }).then((data) => {
                    console.log(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    /**
      * Update Book Status 
      * @author Avinash TS
      * @Since June 2023
      * @param {ArgsData, AuthData}
      * @return Book Collection
      */

    updateBookStatus = async (paramsData, booksColection, dbName) => {

        const book_id = (paramsData._id) ? paramsData._id : "";
        const statusCode = (paramsData.book_status) ? paramsData.book_status : 0;

        const dbConnection = await global.clientConnection
        const librrayDB = await dbConnection.useDb(dbName)

        const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

        const updateObj = {
            "book_status": statusCode
        }

        const book = { '_id': book_id }

        let updateBook = await booksModel.findOneAndUpdate(
            book,
            updateObj,
            { new: true, useFindAndModify: false }).then((data) => {
                console.log(data)
            })

        console.log("Book Updated")

    }

    /**
      * Delete existing Book
      * @author Avinash TS
      * @Since June 2023
      * @param {ArgsData, AuthData}
      * @return Delete Existing data
      */

    deleteBook = async (dbName, booksColection, paramsData) => {
        try {
            const book_id = paramsData._id

            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            let result;
            const delete_book = { '_id': book_id }
            if (paramsData.action == 'delete') {
                await booksModel.findOneAndDelete(
                    delete_book).then((data) => {
                        if (data != null) {
                            result = data
                            console.log(result)
                        } else {
                            result = "No Book Found on this id"
                        }

                    })
            }

            return result;

        } catch (error) {
            console.log(error)
        }
    }

    /**
          * Get All Books Count
          * @author Avinash TS
          * @Since June 2023
          * @param {ArgsData, AuthData}
          * @return Numerical value of all book (count)
          */

    getAllBooksCount = async (dbName, booksColection) => {
        try {

            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            const count = await booksModel.find().count()

            return count;

        } catch (error) {
            console.log(error)
        }

    }

    /**
          * Get  Books By Language
          * @author Avinash TS
          * @Since June 2023
          * @param {ArgsData, AuthData}
          * @return books under filter language
          */

    getBooksByLanguage = async (dbName, booksColection, paramsData) => {
        try {
            const languiageKey = paramsData.language_key
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            let result = await booksModel.find({ language: languiageKey })
            if (result.length <= 0) {
                result = "No Books Available for" + " " + languiageKey + " " + "Language"
            }
            console.log(result)
            return result;

        } catch (error) {
            console.log(error)
        }
    }

    /**
         * Get  Books By Author
         * @author Avinash TS
         * @Since June 2023
         * @param {ArgsData, AuthData}
         * @return books under filter Author
         */

    filterBookByAuthor = async (dbName, booksColection, paramsData) => {
        try {
            const auther_key = paramsData.auther_key
            const dbConnection = await global.clientConnection
            const librrayDB = await dbConnection.useDb(dbName)

            const booksModel = librrayDB.model(booksColection, Books_model.BookSchema, booksColection)

            let result = await booksModel.find({ auther: auther_key })
            if (result.length <= 0) {
                result = "No Books Available for Filter" + " " + auther_key
            }
            console.log(result)
            return result;

        } catch (error) {
            console.log(error)
        }
    }




}

module.exports = LibraryFunction;
