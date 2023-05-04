const express=require('express');
const controllers=require('../controllers/logInfo')

const router=express.Router();

router.get("/test",(req,res)=>{
    res.send({msg:"Server is running"});
})
router.get("/user1",controllers.one);
router.get("/user2",controllers.one);
router.get("/user3",controllers.one);
router.get("/user4",controllers.one);
router.get("/example1",controllers.one);

module.exports=router;