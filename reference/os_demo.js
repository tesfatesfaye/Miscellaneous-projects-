const os=require('os')
console.log(os.platform());
//returns the platform 
console.log(os.arch())
// returns the cpu architecture
console.log(os.cpus())
// returns the number of cpus 
console.log(os.freemem());
// amount of free memory available 
console.log(os.totalmem())
// amount of free total memory
console.log(os.uptime())
// total amount of up time