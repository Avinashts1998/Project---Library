const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

const clientOptions = {
    useUnifiedTopology : true,
    socketTimeoutMS : 30000,
    useNewUrlParser: true,
    autoIndex: false,
}

const initClientDbConnection = () => {
    const db = mongoose.createConnection(process.env.MONGO_CONNECTION_URL, clientOptions)

    db.on("error", console.error.bind(console, "MongoDB Connection Error"))
    db.once("open", function () {
        console.log('Database Connected Successfuly :::: Keri Vada Makkale 🤩')
    });
    return db;
};

module.exports = {
    initClientDbConnection
}