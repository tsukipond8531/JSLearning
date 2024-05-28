var string="Mr.Red has a red car";
var reg=new RegExp("Red","gi")
var newstring=string.replace(reg,"blue");

console.log(newstring);