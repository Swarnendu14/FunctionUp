
let one=(req,res)=>{
    res.send({msg:`End Point Run Successfully: ${req.originalUrl}`});
}

module.exports={one};