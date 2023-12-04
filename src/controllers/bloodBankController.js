const { response } = require('express');
const BloodFunction = require('./../utils/bloodService')
const staticFunctions = require('./../utils/staticFunction')


exports.createBloodGroupData = async (request, response) => {
    const argsData = (request.body.args) ? request.body.args : '';
    const paramsData = (argsData.params) ? argsData.params : '';

    const dbAndCollections = {
        dbName: process.env.LIBRARY_DATABASE,
        bloodCollection: "blood_bank"
    }



    const BloodBankFns = new BloodFunction()

    const result = await BloodBankFns.createBloodData(dbAndCollections, paramsData)

    response.status(200).json({
        message: "Data inserted",
        data: result
    })

}


exports.getBloodGroups = async (request, response) => {

    let result = await staticFunctions.getBloodGroups("avinash", 'o+ve')

    response.status(200).json({
        data: result
    })
}


exports.getBloodBankData = async (request, response) => {

    const BloodBankFns = new BloodFunction()

    const dbAndCollections = {
        dbName: process.env.LIBRARY_DATABASE,
        bloodCollection: "blood_bank"
    }

    const result = await BloodBankFns.getBloodData(dbAndCollections)


    response.status(200).json({
        data: result
    })

}


exports.getGroupedData = async (request, response) => {

    const argsData = (request.body.args) ? request.body.args : '';
    const paramsData = (argsData.params) ? argsData.params : '';
    const blood_group = (paramsData.blood_group) ? paramsData.blood_group : '';
    console.log(blood_group)

    const BloodBankFns = new BloodFunction()

    const dbAndCollections = {
        dbName: process.env.LIBRARY_DATABASE,
        bloodCollection: "blood_bank"
    }

    const result = await BloodBankFns.getGroupedData(dbAndCollections, blood_group)


    response.status(200).json({
        data: result
    })

}