
console.log("__________________Step1______________________");
function squareOfWordLength(str){
console.log(`length of word ${str.length} `);
var result=str.length* str.length
return result;
}
var result=squareOfWordLength("javaScript");
console.log(`length square is: ${result}`);
var result=squareOfWordLength("Google Chrome");
console.log(`length square is: ${result}`);
var result=squareOfWordLength("Developer Smart");
console.log(`length square is: ${result}`);
console.log("__________________Step2______________________");
var strOperation=function(){
    var str="I am Angular Developer";
    console.log(`String length is:${str.length}`);
    var word=str.split(" ");
    var wordCount=word.length;
    console.log(`Total number of word:${wordCount}`);
    console.log(`Total no of word length divided by word count:${str.length/wordCount}`);
    console.log(`------------------------------------------------`);
    console.log(`String length is:${str.length}`);
    var word=str.split(" ");
    var wordCount=word.length;
    console.log(`Total number of word:${wordCount}`);
    console.log(`Total no of word length Multiply by word count:${str.length*wordCount}`);
}
strOperation();