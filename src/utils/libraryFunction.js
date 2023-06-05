const staticFunction = require('./../utils/staticFunction')

class LibraryFunction {

    getAllBooks = async (argsData, authData) => {


        const data = staticFunction.getAllBooks(argsData, authData)



        return data;


    }


}

module.exports = LibraryFunction;
