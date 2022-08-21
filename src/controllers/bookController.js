const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")


//author entry
let createAuthor=async function(req, res){
  let data=req.body
  let saveData= await AuthorModel.create(data)
  res.send({msg:saveData})
}

let createBook=async function(req, res){
  let data=req.body
  let saveData= await BookModel.create(data)
  res.send({msg:saveData})
}

let getBooksOfChetanBhagat= async function(req, res){
  let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
  console.log(data)
  let bookData= await BookModel.find({author_id:data[0].author_id})
  res.send({msg:bookData})
}

let authorOfBook= async function(req, res){
  let data=await BookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}},{new:true})
  let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
  let price=data.price
  res.send({msg:authorData,price})
}

let booksBetween50_100 =async function(req, res){
  let data= await BookModel.find({$and:[{price:{$gte:50}},{price:{$lte:100}}]}).select({author_id:1,_id:0})
  let arr=[]
  for(let i of data){
    let d= await AuthorModel.find({author_id:i.author_id}).select({author_name:1,_id:0})
    arr.push(d)
  }
  res.send({msg:arr})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksOfChetanBhagat=getBooksOfChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.booksBetween50_100=booksBetween50_100