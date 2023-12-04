const blood_bank_model = require('./../models/bloodBankModel')

class BloodService {

    createBloodData = async (dbAndCollections, paramsData) => {

        const dbConnection = await global.clientConnection
        const librrayDB = await dbConnection.useDb(dbAndCollections.dbName)

        const blood_bank = librrayDB.model(dbAndCollections.bloodCollection, blood_bank_model.BloodSchema, dbAndCollections.bloodCollection)

        let result = await blood_bank.findOne({ name: paramsData.name })
        console.log(result)



        await blood_bank.create(paramsData).then((data) => {
            console.log(data)
        })
    }

    getBloodData = async (dbAndCollections) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                const dbConnection = await global.clientConnection
                const librrayDB = await dbConnection.useDb(dbAndCollections.dbName)

                const blood_bank = librrayDB.model(dbAndCollections.bloodCollection, blood_bank_model.BloodSchema, dbAndCollections.bloodCollection)

                const pipeline = ([
                    {$match: {blood_group : "O+ve"} },
                    {$limit : 10},
                    {$project : {
                        name : "name",
                        age : 'age'
                    }}
                ])

                blood_bank.aggregate(pipeline).then((data)=>{
                    resolve(data)
                })

             /*   let result = await blood_bank.find().then((data) => {
                    resolve(data)
                }) */
            } catch (err) {
                reject(err)
            }

        })
    }


    getGroupedData = async (dbAndCollections, blood_group) => {
        return new Promise(async (resolve, reject) => {
            try {
                const dbConnection = await global.clientConnection
                const librrayDB = await dbConnection.useDb(dbAndCollections.dbName)

                const blood_bank = librrayDB.model(dbAndCollections.bloodCollection, blood_bank_model.BloodSchema, dbAndCollections.bloodCollection)

                let result = await blood_bank.find({ blood_group: blood_group }).then((data) => {
                    resolve(data)
                })
            } catch (err) {
                reject(err)
            }

        })
    }





}











module.exports = BloodService;
