const productModel = require("../models/productModel")
const oredrModel = require("../models/orderModel")
const userModel = require("../models/userModel")



const createProduct= async function (req, res) {
    let data= req.body

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}


module.exports.createProduct = createProduct
