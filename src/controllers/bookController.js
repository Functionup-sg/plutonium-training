const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
  let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//fetch the data from mongodb, (bookName authorName)
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select("bookName authorName " )
    res.send({msg: allBooks})
}

//Fetch
const getBooksInYear= async function (req, res) {
    let data= req.body
  let allBooks= await BookModel.find({year:req.body.year})
    res.send({msg: allBooks})
}


const getParticularBooks= async function (req, res) {
  let name=req.body.bookName;
  let year=req.body.year;
 let allBooks= await BookModel.find({$or:[{bookName:name},{year:year}]})
// let allBooks= await BookModel.find(req.body)
console.log(name, year)
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    
  let allBooks= await BookModel.find({"Prices.indianPrice":{$in:["100INR","600INR","500INR"]}})
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
   let allBooks= await BookModel.find({$or:[{StockAvailable:true},{totalPages:{$gt:300}}]})
    res.send({msg: allBooks})
}



  
module.exports.createBook= createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
