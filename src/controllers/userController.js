// const UserModel= require("../models/userModel")


// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
const bookModel= require("../models/bookModel")


const createEntryOfBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooks= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})}


// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createEntryOfBook=createEntryOfBook
module.exports.getBooks=getBooks