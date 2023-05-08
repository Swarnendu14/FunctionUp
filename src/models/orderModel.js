const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId;
const orderModel=new mongoose.Schema({
    userId:{type:ObjectId,
    required:true},
    productId:{type:ObjectId,
    required:true
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:String
});

module.exports=mongoose.model('order',orderModel)