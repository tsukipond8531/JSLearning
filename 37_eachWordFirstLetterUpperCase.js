function upper(str){
let AllWords=str.split(" ").map((word)=>{
   return word.charAt(0).toUpperCase()+word.substring(1);
})
console.log(AllWords.join(" "));
}
upper("kishor bhai kaise ho")