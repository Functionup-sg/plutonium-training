const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: {
        type:String,
        unique:false
    } ,
    author_id:{
        type:String,
        required:true
    },
    price: Number,
    ratings: Number
},{timestamps:true});
   
    
module.exports = mongoose.model('Book', bookSchema) 
