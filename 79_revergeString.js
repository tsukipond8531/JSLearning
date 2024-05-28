var string=prompt("Enter the string");
var len=string.length;
var revstring='';
for (let i = len-1; i >=0 ; i--) {
    revstring+=string[i];
    
} 
console.log(revstring);