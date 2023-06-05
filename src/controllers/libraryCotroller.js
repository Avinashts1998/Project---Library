
const LibraryFunction = require('./../utils/libraryFunction')


exports.getAllBooks = async (req, res, next) => {

    LibraryFns = new LibraryFunction()

    const argsData = (req.body.args) ? req.body.args : "";
    const authData = (argsData.auth) ? argsData.auth : "No data";

    const data = await LibraryFns.getAllBooks(argsData, authData)
    // console.log(authData)

    res.status(200).json({
        data: data,
        success: true,
        result: false
    })
}
