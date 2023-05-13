const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')
let headerCheck=(req,res,next)=>{
  try{
    let token = req.headers["x-auth-token"];
  if (!token){ 
    return res.status(404).send({ status: false, msg: "token must be present in Request Header" });
  }
  next();
}
catch(err){
  return res.status(500).send({msg:err.message});
}
}
let userCheck= async (req,res,next)=>{
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({status:false,ErrorMsg:"No such user exists in my DataBase, Authentication Fail"});
    }
    next();
  }
  catch(err){
    return res.status(500).send({msg:err.message});
  }
}

let checkLoginUser=async (req,res,next)=>{
    try{
      let userId = req.params.userId;
    let token = req.headers["x-auth-token"];
    let loginId=jwt.verify(token,'swarnenduSecretMsg');
    if(loginId._id!=userId){
       return res.status(404).send({status:false,ErrorMsg:"You are not the login User, Access Denied"})
    }
    next();
  }
  catch(err){
    return res.status(500).send({msg:err.message});
  }
}

module.exports={headerCheck,userCheck,checkLoginUser}