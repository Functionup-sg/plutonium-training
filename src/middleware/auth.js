const jwt= require("jsonwebtoken")

const authenticate=async function(req, res, next){
    try{
    let token = req.headers["x-Auth-token"];
    if (!token)token = req.headers["x-auth-token"];
    if(!token) return res.send({status:false, msg: "token must be present"});
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if(!decodedToken)
    //status(401) token is invalid
    return res.status(401).send({ status: false, msg: "token is invalid"});
    next()
}
catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
}

const authorise=async function(req, res, next){
    try{
    let token = req.headers["x-Auth-token"];
    if (!token)token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if(decodedToken.userId!==req.params.userId)
    //status(403) token is not
    return res.status(403).send({ status: false, msg: "You are not authorizer to do this task"});
    next()
}
catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise