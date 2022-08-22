const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
var mongodb = require("mongodb")

const createBook= async function (req, res) {
    let book = req.body
    let authorId=await authorModel.find().select({_id:1})
    authorIdArr=authorId.map((obj)=>{return obj._id.toString()})
    
    let publisheId=await publisherModel.find().select({_id:1})
    publishIdArr=publisheId.map((obj)=>{return obj._id.toString()})  

    if (book.author_id!=undefined){
      if(book.publisher_id!=undefined){
        if(authorIdArr.includes(book.author_id)){
          if(publishIdArr.includes(book.publisher_id)){
            let bookCreated = await bookModel.create(book)
            return res.send({data:bookCreated})
        }
        return res.send({data: "Invalid Publisher Id"})
      }
      return res.send({data: "Invalid Author Id"})
    }
     return res.send({data: "Missing Publisher Id"}) 
}
 return res.send({data:"Missing Author Id"})
}
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
const getBookWithAuthor_Public_Details = async function (req, res){
  let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
  res.send({data: specificBook})
}

const updateIsHardCover = async function (req, res){
  let data= await publisherModel.find({name:{$in:["penguin","HarperCollins"]}}).select({_id:1})
  idArry=data.map((obj)=>{return obj._id.toString()})
  let up = await bookModel.updateMany({publisher_id:{$in:idArry}},{$set:{isHardCover:true}})
  let upBook = await bookModel.find()
  res.send({data:up,upBook})
}

const authorRating=async function(req, res){
  let data= await authorModel.find({return:{$gt:3.5}}).select({_id:1})
  idArry=data.map((obj)=>{return obj._id.toString()})
  let up = await bookModel.updateMany({author_id:{$in:idArry}},{$set:{$inc:{price:+10}}})
  
  res.send({data:up})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBookWithAuthor_Public_Details= getBookWithAuthor_Public_Details
module.exports.updateIsHardCover= updateIsHardCover
module.exports.authorRating = authorRating  
