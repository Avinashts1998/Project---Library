const UserFunction = require('../utils/userFuction')
const UserModel = require('../models/usersModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })


exports.registerUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body.args.params



        const dbName = process.env.LIBRARY_DATABASE
        const userCollection = "Users"


        const dbConnection = await global.clientConnection
        const librrayDB = await dbConnection.useDb(dbName)

        if (!(first_name && last_name && email && password)) {
            return res.status(400).json({
                message: "Please enter credentials"
            })
        }



        const userModel = librrayDB.model(userCollection, UserModel.UserSchema, userCollection)
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ message: "Email id already exist, Please login" })
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "60"
            }
        )

        user.token = token
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
    }

}


exports.validateToken = async () => {

}





exports.loginUser = async (req, res) => {
    try {
        const argsData = (req.body.args) ? req.body.args : "";
        const paramsData = (argsData.params) ? argsData.params : "";

        const username = paramsData.username;
        const password = paramsData.password;

        console.log(username)
        console.log(password)


        if (!(username && password)) {
            return res.status(409).json({
                message: "Login Failed, Please enter credentiasl"
            })
        }

        const dbName = process.env.LIBRARY_DATABASE
        const userCollection = "Users"

        const dbConnection = await global.clientConnection
        const librrayDB = await dbConnection.useDb(dbName)

        const userModel = librrayDB.model(userCollection, UserModel.UserSchema, userCollection)

        let userFetch = await userModel.findOne({ '_id': '64a2d6c07ad8ce18ed2a4123' }).then((data) => {
            console.log(data)
        })
        //  console.log(userFetch)






    } catch (error) {
        console.log(error)
    }
}

