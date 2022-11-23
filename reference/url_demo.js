const url= require('url')
const myUrl= new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')
//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString())
//http://mywebsite.com:8000/hello.html?id=100&status=active

console.log(myUrl.host);//HOST (root domain) returns the main url with th port
// Host name  
console.log(myUrl.hostname)// returns the url without the host name
//mywebsite.com:8000
console.log(myUrl.pathname) // returns the file name
// /hello.html
console.log(myUrl.search) // returns the  parameters
//?id=100&status=active
console.log(myUrl.searchParams) // return the parameters as objects;
//URLSearchParams { 'id' => '100', 'status' => 'active' }

myUrl.searchParams.append('abc','123')//add params

console.log(myUrl.search) 
//?id=100&status=active&abc=123

myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`))//loop through params
//id: 100
//status: active
//abc: 123