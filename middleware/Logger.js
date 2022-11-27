const moment=require('moment')
const logger=(req,res,next)=>{
    console.log(`${req.protocol}:// ${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next(); // allows us to run the next middle ware on the stack
}

module.exports=logger