const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true

    },
    authorName: String,

    category:{
        type: String,
        enum: ["horror","romantic","thriller","mystry","advanture"]
    },
    year : Number,
}, {timestamps:true});



module.exports=mongoose.model("Book", bookSchema)//books