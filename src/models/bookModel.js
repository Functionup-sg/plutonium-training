const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
    authorName: String, 
    tags: [String],
    year:{
        type:Date,
        default:"2021"
    },
    
    StockAvailable : Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
