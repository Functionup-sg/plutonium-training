const jwt= require("jsonwebtoken")

const authenticate=async function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token)token = req.headers["x-auth-token"];
    if(!token) return res.send({status:false, msg: "token must be present"});
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if(!decodedToken)
    return res.send({ status: false, msg: "token is invalid"});
    next()
}

const authorise=async function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token)token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if(decodedToken.userId!==req.params.userId)
    return res.send({ status: false, msg: "You are not authorizer to do this task"});
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise