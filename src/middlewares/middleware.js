
const check=(req,res,next)=>{
    if(!req.headers.hasOwnProperty('isfreeappuser')){
        return res.send('headers is missing')     
    }
  next();
}
module.exports={check}