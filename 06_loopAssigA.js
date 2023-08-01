console.log(`___________Count vowels using while loops______________`);
function countVowels(str) {
  let count=0;
    let i=0;
    while (i<str.length) {
        let char=str.charAt(i);
        i++;
        if (char=='a' || char=='e' || char=='i' || char=='o' ||char=='u'||
        char=='A' || char=='E' || char=='I' || char=='O' ||char=='U') {
            console.log(char);
            count=count+1; 
            
        }
      
    }
    console.log(` Total number of vowels is: ${count}`);
}
countVowels("I am very good IT Developer")
console.log(`___________sum of cube of number 1 to 5______________`);
function sumOfCube(){
   let sum=0;
    for (let index = 1; index <=5; index++) {
    sum=sum+index*index*index;
     }
    console.log(`sum of cube of number is:${sum}`);
    

}
sumOfCube();
console.log(`_________________________Old Position character____________________________________`);
function oddPositiondChars(str){
for (let index = 0; index < str.length; index++) {
const char=str.charAt(index);
    if (index%2!=0 && char!=' ') {
        console.log(char);
        
    }
}
}
oddPositiondChars("Hard work always pays back");
oddPositiondChars("Soon I will be Angular IT Champ");
