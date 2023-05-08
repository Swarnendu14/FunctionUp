let userModel=require('../models/userModel')
let productModel=require('../models/productModel')
let orderModel=require('../models/orderModel')

let createUser=async(req,res)=>{
    let data=req.body;
    let userData=await userModel.create(data);
    res.send({msg:userData});
}
let createProduct=async(req,res)=>{
    let data=req.body;
    let productData=await productModel.create(data);
    res.send({msg:productData});
}
let createOrder=async(req,res)=>{ 
    const {userId,productId,amount,isFreeAppUser,date}=req.body;
    let validUserid=await userModel.findById({_id:userId});
    let validProduct=await productModel.findById({_id:productId});
    if(!validUserid){
       return res.send({message:"user id not valid"})
    }
    if (!validProduct){
       return res.send({message:"product is not valid"})
    }
    let data=await orderModel.create(req.body)
    res.send(data);
}

const purchase=async (req,res)=>{
    let isFreeAppUser=req.headers.isfreeappuser;
    let id=req.body._id;
    
    if(isFreeAppUser=="true"){
     let amount=await orderModel.findOneAndUpdate({_id:id},{$set:{amount:1}},{new:true});
      return res.send(amount);
    }
    if(isFreeAppUser=="false"){
        let data=await orderModel.findById(id);

        let pPriceObj=await productModel.findById(data.productId).select({price:1,_id:0});
        let pPrice=pPriceObj.price;
        
        let uPriceObj=await userModel.findById(data.userId).select({balance:1,_id:0});
        let wPrice=uPriceObj.balance;
        let finalPrice=wPrice-pPrice;
        
        let userWallet=await userModel.findOneAndUpdate({_id:data.userId},{$set:{balance:finalPrice}},{new:true});
        let updated=await orderModel.findOneAndUpdate({_id:id},{$set:{amount:pPrice}},{new:true});
         res.send({User:userWallet,Order:updated});
    }
    else{
        res.send({msg:"invalid data"})
    }
    
 }


module.exports={createUser,createProduct,createOrder,purchase};