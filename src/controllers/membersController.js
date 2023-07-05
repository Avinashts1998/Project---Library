const memberController = require('./../models/membersModel')
const MemberFunction = require('./../utils/membersFunction')

const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })

exports.createMember = async (req, res) => {
    try {

        MemberFns = new MemberFunction()
        const argsData = (req.body.args) ? req.body.args : ''
        const paramsData = (argsData.params) ? argsData.params : ''

        const dbName = process.env.LIBRARY_DATABASE
        const memberCollection = "Mambers"

        const result = await MemberFns.createMember(dbName, memberCollection, paramsData)
        console.log(result)

        res.status(200).json({
            success: true,
            data: result,
            message: "Data inserted succesfully"
        })


    } catch (error) {
        console.log(error)
    }
}


exports.getAllMambers = async (req, res) => {
    try {

        MemberFns = new MemberFunction()
        const argsData = (req.body.args) ? req.body.args : "";

        const dbName = process.env.LIBRARY_DATABASE
        const memberCollection = "Mambers"

        const result = await MemberFns.getAllMembers(dbName, memberCollection)

        res.status(200).json({
            success : true,
            data : result,
            success : "All Mabers Collected"
        })

    } catch (error) {
        console.log(error)
    }



}
