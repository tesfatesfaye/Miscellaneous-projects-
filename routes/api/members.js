const express=require('express')
const router=express.Router()
const uuid=require('uuid')
let members=require('../../Members')


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
     const newMember={
         id:uuid.v4(),
         name:req.body.name,
         email:req.body.email,
         status:'active'
     }
     if(!newMember.name || !newMember.email){
      return res.status(400).json({msg:'Please include a name and email'})
   }
   members.push(newMember)

   res.json(members)
   })

   //update Member
   router.put('/:id',(req,res)=>{
      const found=members.some(x=>x.id===parseInt(req.params.id));
      console.log(found)
      if(found){
         const upMember=req.body;
         members.forEach(x=>{
            if(x.id ===parseInt(req.params.id)){
               x.name=upMember.name ? upMember.name : x.name
               x.email=upMember.email ? upMember.email:x.email
               res.status(200).json({msg: "Member updated", member:x})
            }
         })
      }
      else{
         res.status(400).json({msg:`No member with the id of ${req.params.id}`})
      }

   })

   // Delete member
    router.delete('/:id',(req,res)=>{
         const found = members.some(x=> x.id===parseInt(req.params.id))
         members=members.filter(x=>x.id !==parseInt(req.params.id))
         if(found){
          
            res.json({
            msg: 'Member deleted',
            members
         })
         }
         else{
            res.status(400).json({msg:`No member with the id of ${req.params.id}`})
         }

    })


      
   module.exports=router;