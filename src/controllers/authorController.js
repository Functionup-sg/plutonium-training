const AuthorModel= require("../models/authorModel")

const createAuthor= async function(req, res){
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data:authorCreated})
}

const getAuthorData= async function(req, res){
    let authors= await AuthorModel.find()
    res.send({data:authors})
}

module.exports.createAuthor=createAuthor
module.exports.getAuthorData=getAuthorData