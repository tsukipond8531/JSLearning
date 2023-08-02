console.log(`__________________________________`);
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`First and last element log`);

console.log(arrayFruits[0]);
let length=arrayFruits.length;
console.log(arrayFruits[length-1]);
console.log(`______________Add element Papaya before element Banana______________`);
let a=arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`______________Remove 'Mango' from the array______________`);
let removedElement = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`______________Add element or insert an element "pineapple" At the last position______________`);
arrayFruits.push("pineapple");
console.log(arrayFruits);
console.log(`______________Insert an element "Dragon Fruit"before "water Melon______________`);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(arrayFruits);
console.log(`______________Replace an element "orange" with "Kiwi"______________`);
arrayFruits.splice(2,0,"Kiwi")
console.log(arrayFruits);

console.log(`______________Log elements starting from index 1 to 4______________`);
for (let index = 0; index < 4; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}

console.log(`______________only select last 3 element______________`);
console.log(arrayFruits);
let elementLast = arrayFruits.slice(length)
console.log(`Last  3 element is : ${elementLast}`);


