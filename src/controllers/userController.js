const productModel = require("../models/productModel")
const oredrModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.headers
    let body = req.body
    console.log(data)
    body.isFreeAppUser = req.headers.isfreeappuser
    console.log(data.isfreeappuser, req.headers.isfreeappuser)

    let saveData = await userModel.create(body)
    res.send({ msg:saveData })
}


module.exports.createUser = createUser
