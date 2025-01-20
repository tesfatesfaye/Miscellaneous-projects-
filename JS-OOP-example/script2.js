
const lengthOfLongestSubstring=(s)=>{
    let spacechecker=s
    const parent=[]
    let child=""
    let ender=s.length
    let largeloop=s.length*(s.length+1)/2
    let fin=[]
   
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
if(spacechecker===" "){
    fin.push(" ")
    return 1
    }
    if(spacechecker.length===1){
        fin.push(spacechecker)
        return 1
    }
let counter=false
let holder=[]
for(let m=0;m<parent.length;m++){
for(let k=0;k<parent[m].length;k++){
if(holder.includes(parent[m][k])){
    counter=true
}
holder.push(parent[m][k])
}
if(!counter){
    unique.push(parent[m])
 }
counter=false
holder=[]
}
 fin=unique[0]
 for(let t=1;t<unique.length;t++){
     if(unique[t].length>fin.length){
         fin=unique[t]
     }
 }


return fin.length

}

