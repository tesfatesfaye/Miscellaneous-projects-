
const longestPalindrome = function(s){
    let spacechecker=s
    const parent=[]
    let child=""
    let ender=s.length
    let largeloop=s.length*(s.length+1)/2
    let paladrom=[]
   if(spacechecker.length==1){
       return s
   }
    const unique=[]
   for(let i=0;i<largeloop-1;i++){
    for(let j=0;j<s.length;j++){
        child=s.substring(0,ender)
        let cou=[...child]
        ender=ender-1
        parent.push(cou)
        cou=[]
    }
     s=s.substring(1,s.length)
     ender=s.length


}
for(let t=0;t<parent.length;t++){
if(parent[t].join("")==parent[t].reverse().join("")){
    paladrom.push(parent[t])
}
}

let holder=[]
holder=paladrom[0]
for(let i=0;i<paladrom.length;i++){
    if(paladrom[i].length>holder.length){
        holder=paladrom[i].slice(0)
    }
}



return holder.join("")
}
