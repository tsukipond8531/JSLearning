var string=prompt("please enter the string");
const regex=/[aeiou]/gi;
var char=string.match(regex);
console.log(char.join(","));
console.log(char.length);