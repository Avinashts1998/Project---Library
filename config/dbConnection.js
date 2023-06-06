const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })

const clientOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false,
}

const initClientDbConnection = () => {
    try {
        const db = mongoose.createConnection(process.env.MONGO_CONNECTION_URL, clientOptions)

        db.on("error", console.error.bind(console, "MongoDB Connection Error"))
        db.once("open", function () {
            console.log('Database Connected Successfuly :::: Keri Vada Makkale 🤩')
            
        });
        return db;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    initClientDbConnection
}