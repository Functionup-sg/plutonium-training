const AuthorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel= require("../models/publisherModel")

const createPublisher=async function(req, res){
    data=req.body
    let publisherCreated= await publishermodel.create(data)
    res.send({data:publisherCreated})
}

module.exports.createPublisher=createPublisher