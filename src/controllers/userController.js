const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try{
  let data = req.body;
  if (Object.keys(data)==0) return res.status(400).send({msg:"request body is empty"})
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(200).send({ msg: savedData });
}
catch(err){
  res.status(500).send({msg: "Error", error:err.message})
}
};
//login function
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
if (!(userName && password)) return res.status(400).send({msg: "please enter username and password"})
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens 
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
}
catch(err){
  res.status(500).send({msg: "Error", error:err.message})
}
};

//get user Data
const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails || userDetails.isDeleted)
    return res.status(400).send({ status: false, msg: "No such user exists" });
  res.status(200).send({ status: true, data: userDetails });
  }

  catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user || user.isDeleted) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: "User update", data: updatedUser });
  }
  catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
};

const postMessage = async function(req, res){
  try{
  let message = req.body.message
  let user= await userModel.findById(req.params.userId)
  if(!user || user.isDeleted)
  return res.status(400).send({status: false, msg: "No such user exists"})
  let updatedPosts = user.posts
  updatedPosts.push(message)
  let updatedUser= await userModel.findOneAndUpdate({_id:user._id},{posts: updatedPosts},{upsert:true,new:true})
  res.status(200).send({ status: true, data: updatedUser });
  }
  catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
}

 const deleteUser =async function(req, res){
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  console.log(user)
  if (!user){
    return res.status(400).send("No such user exists");
  }
  if (user.isDeleted){
    return res.status(400).send("User data is already deleted");
  }
  let deleteFlag=await userModel.updateOne({_id:userId},{$set:{isDeleted:true}},{upsert:true})
  res.status(200).send({msg:"user successfully deleted", data:deleteFlag})
  }
  catch(err){
    res.status(500).send({msg: "Error", error:err.message})
  }
  }
  

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser;

