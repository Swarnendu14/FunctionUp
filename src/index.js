const express=require('express');
const moment=require('moment')
const route=require('./routes/route')
const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    let ip= req.ip;
    let url= req.originalUrl;
    console.log(`Date & Time: ${moment().format()},IP: ${ip},End Point: ${url}`)
    next();
})

app.use("/",route);

app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
});