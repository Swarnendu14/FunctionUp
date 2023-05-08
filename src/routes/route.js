const express=require('express');
const controller=require('../controllers/controller')
const mid=require('../middlewares/middleware')

const router=express.Router();

router.get("/test",(req,res)=>{
    res.send({msg:"Server is running"});
})
router.post("/createUser",mid.check,controller.createUser);
router.post("/createProduct",controller.createProduct);
router.post("/createOrder",mid.check,controller.createOrder);
router.post("/purchase",mid.check,controller.purchase);




module.exports=router;