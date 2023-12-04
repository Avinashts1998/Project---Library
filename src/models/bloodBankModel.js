const mongoose = require('mongoose')


const BloodSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String
    },
    place: {
        type: String
    },
    age: {
        type: Number
    },
    blood_group: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    email_id: {
        type: String
    },

},
    { strict: false })

exports.BloodSchema = BloodSchema;





/*
          "name": "Avinash TS",
            "address": "Tharayil House",
            "place": "venmani",
            "age": 25,
            "blood_group": "O+ve",
            "mobile_no": 7559082108,
            "email_id": "avinashts1998@gmail.com",
            "date": "20-02-2023",
            "lats_donated_date": "20-02-2023" 
            */