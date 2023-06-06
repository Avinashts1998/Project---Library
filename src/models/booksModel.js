const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    book_no: {
        type: Number
    },
    book_name: {
        type: String
    },
    auther: {
        type: String,
    },
    publications: {
        type: String
    },
    category: {
        type: String
    },
    shelf_number: {
        type: Number
    },
    row_no: {
        type: Number
    },
    published_year: {
        type: Date
    },
    language: {
        type: String
    },
    book_status: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    book_inserted_date : {
        type : Date
    },
    image: {
        type: String
    }
},
    { strict: false });

exports.BookSchema = BookSchema;
