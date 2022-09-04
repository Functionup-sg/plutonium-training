const productModel = require("../models/productModel")
const oredrModel = require("../models/orderModel")
const userModel = require("../models/userModel")


const checkFreeUser = async function (req, res,next) {
    let data = req.headers
    if (data.isfreeappuser !== undefined && ["true", "false"].includes(data.isfreeappuser)) {
        console.log(req.headers)
        next()
    }
    else {
        //res.send({msg:"request is missing a mandatory header isFreeAppUser"})
        reqData = req.body
        req.headers["isfreeappuser"] = reqData.isFreeAppUser
        console.log(req.headers)
        next()
    }

}

module.exports.checkFreeUser = checkFreeUser