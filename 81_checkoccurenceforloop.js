var string=prompt("Enter the string");
var letter=prompt("Enter the letter");
var len=string.length;
var count=0;
for (let i = 0; i <string.length; i++) {
if (string[i]==letter) {
    count++;
}
}
console.log(`${string}=>${letter}=>${count}`);