const path=require('path')


console.log(__filename);//Base file name
//C:\Users\tesfa\Documents\Web development\NODE crash course\reference\path_demo.js
console.log(path.basename(__filename)) // base file name
//path_demo.js
console.log(path.dirname(__filename));
// //C:\Users\tesfa\Documents\Web development\NODE crash course\reference

console.log(path.extname(__filename))//file extension
// js


console.log(path.parse(__filename)) //path parser



console.log(path.join(__dirname,'test','hello.html'))// // concatenate paths


// console.log(path.join(__dirname,'test', 'hello','helloThere.html'))
// // this helps with issues with delimiter  
