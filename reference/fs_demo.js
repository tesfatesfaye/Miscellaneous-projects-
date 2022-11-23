const fs=require('fs')
const path=require('path')

// Create folder
fs.mkdir(path.join(__dirname, '/test'),{},(err)=>{
    if(err) throw err;
    console.log("Folder Created")
})
// Create and write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),
'Hello world',err=>{
    if(err) throw err;
    console.log("Files written to....")
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),
    'Hello world two',err=>{
    if(err) throw err;
    console.log("Files written to....")
  
})


})

    fs.appendFile(path.join(__dirname,'/test','hello.txt'),
        'Hello world three', err=>{
            if(err) throw err;
            console.log("files appended")
        }
    
    )
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
});

fs.rename(
        path.join(__dirname,'/test','hello.txt'),
        path.join(__dirname, '/test','helloworld.txt'),
        err=>{
            if(err) throw err;
            console.log('File renamed...')
        }
    )