const url= require('url')
const myUrl= new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')
//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString())

//HOST (root domain) returns the main url with th port
console.log(myUrl.host);
// Host name  
console.log(myUrl.hostname)
// returns the url without the host name

console.log(myUrl.pathname) // returns the file name

console.log(myUrl.search) // returns the  parameters

console.log(myUrl.searchParams) // return the parameters as objects;

//add params
myUrl.searchParams.append('abc','123')
console.log(myUrl.search) 

//loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`))