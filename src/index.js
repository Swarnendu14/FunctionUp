const express=require('express');
const mongoose=require('mongoose')
const route=require('./routes/route')
const app=express();

app.use(express.json());

mongoose.connect("mongodb+srv://swarnenduktpp:Rq0bKY4NZeTmPE0F@cluster0.qntniml.mongodb.net/middleware2", {
    useNewUrlParser: true
})
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>err.message)


app.use("/",route);

app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
});