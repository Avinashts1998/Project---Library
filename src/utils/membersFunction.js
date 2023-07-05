const memberModel = require('./../models/membersModel')


class MemberFunction {

    createMember = async (dbName, memberCollection, paramsData) => {
        const dbConnection = await global.clientConnection
        const libraryDB = await dbConnection.useDb(dbName)

        const booksModel = libraryDB.model(memberCollection, memberModel.MemeberSchema, memberCollection)
        let result;
        await booksModel.create(paramsData).then((data) => {
            result = data;
        })

        return result;
    }

    getAllMembers = async (dbName, memberCollection) => {
        const dbConnection = await global.clientConnection;
        const libraryDB = await dbConnection.useDb(dbName);

        const memberModel = libraryDB.model(memberCollection)
    }
}


module.exports = MemberFunction