const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')
let headerCheck=(req,res,next)=>{
    let token = req.headers["x-auth-token"];
  if (!token){ 
    return res.send({ status: false, msg: "token must be present in Request Header" });
  }
  next();
}
let userCheck= async (req,res,next)=>{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send({status:false,ErrorMsg:"No such user exists in my DataBase, Authentication Fail"});
  }
  next();
}

let checkLoginUser=async (req,res,next)=>{
    let userId = req.params.userId;
    let token = req.headers["x-auth-token"];
    let loginId=jwt.verify(token,'swarnenduSecretMsg');
    if(loginId._id!=userId){
       return res.send({status:false,ErrorMsg:"You are not the login User, Access Denied"})
    }
    next();
}

module.exports={headerCheck,userCheck,checkLoginUser}