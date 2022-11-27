const express=require('express')
const router=express.Router()
const members=require('../../Members')
//Body Parser Middleware





router.get('/', (req,res)=>{
    res.json(members) // we don't have to use stringify because this will handle it for us 
   })
       
   router.get('/:id',(req,res)=>{ //:id is a url parameter, anything after the colon is a url parameter
      const found=members.some(x=>x.id===parseInt(req.params.id))
      if(found){
       res.json(members.filter(members=>members.id===parseInt(req.params.id)))
      }
      else{
       res.status(400).json({msg:`No member with the id of ${req.params.id}`})
      }
   })

   //Create Member

   router.post('/',(req,res)=>{
      res.send(req.body)
   })



   module.exports=router;