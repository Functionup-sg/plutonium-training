const productModel = require("../models/productModel")
const oredrModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const mongoose = require('mongoose');
const orderModel = require("../models/orderModel");

const createOrder = async function (req, res) {
    let data = req.body
    let user = await userModel.findById(data.userId)
    let product = await productModel.findById(data.productId)

    console.log(user)
    console.log(product)

    if (!mongoose.Types.ObjectId.isValid(data.userId)) {
        return res.send({ msg: "please provide valid UserId" })
    }

    if (!user) {
        return res.send({ msg: "User Id is Missing" })
    }

    if (!mongoose.Types.ObjectId.isValid(data.productId)) {
        return res.send({ msg: "Please provide valid productId" })
    }

    if (!product) {
        return res.send({ msg: "Product Id is Missing" })
    }


    if (user.isFreeAppUser) {//true
        data.amount = 0
        data.isFreeAppUser = true
        const orderCreated = await orderModel.create(data)
        return res.send({ msg: orderCreated })
    }
    
    if(user.balance>=product.price){
        data.amount=product.price
        data.isFreeAppUser=false
        const orderCreated=await orderModel.create(data)
        let updatedPrice=user.balance-product.price
        await userModel.findByIdAndUpdate(data.userId,{balance:updatedPrice})
        return res.send({msg: orderCreated})
    }
    res.send({ msg: "Low Balance" })
 
}
    module.exports.createOrder = createOrder
