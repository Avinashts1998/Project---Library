const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/dbConnection')


const app = express()
dotenv.config({path: "./config.env"})


app.get("/", (request, response)=>{
    response.send('Hello World!')
   
})

global.clientConnection = db.initClientDbConnection()

app.listen(process.env.PORT, ()=>{
    console.log(`App listening to the port :` + " " + process.env.PORT + " " + "Enne Kollathirikkan Pattumo!!!")
})