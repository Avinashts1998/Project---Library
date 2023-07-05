const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        default: null
    },
    last_name:
    {
        type: String,
        default: true
    },
    email:
    {
        type: String,
        default: false
    },
    password:
        { type: String },
    token:
        { type: String }
});

exports.UserSchema = UserSchema;