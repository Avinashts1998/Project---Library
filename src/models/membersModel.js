const mongoose = require('mongoose')

const MemeberSchema = new mongoose.Schema({
    membership_no: {
        type: Number,
    },
    member_name: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    member_added_date: {
        type: Date
    }
},
    { strict: false });

exports.MemeberSchema = MemeberSchema;

