
function reverseString(str){
for (let index = str.length-1; index >=0; index--) {
    const char=str.charAt(index)
  if (char!=' ') {
    console.log(char);
  }
    
}
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");