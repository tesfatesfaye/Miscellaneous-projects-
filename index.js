
const express=require('express')
const path=require('path')
const app=express()
// const members=require('./Members')
const logger=require('./middleware/Logger')

//Init middleware
// app.use(logger);
//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/members', require('./routes/api/members'))
const PORT=process.env.PORT || 5000
app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname,'public','index.html'))
})




app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));