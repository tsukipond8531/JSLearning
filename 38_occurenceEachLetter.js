function occ(str){
    var occerence={};
    str.split("").forEach((element)=>{
        if(occerence.hasOwnProperty(element)===false){
            return occerence[element]=1
        }else{
            return  occerence[element]++;
        }
    })

console.log(occerence);
}
occ("apple")