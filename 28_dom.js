console.log('======== getElementById() ==========');
const elementCssTopic = document.getElementById("cssTopics");
console.log(elementCssTopic.innerHTML);
elementCssTopic.innerHTML = "CSS IMP Topics";
console.log('======== getElementsByClassName() ==========');

const topicsElements = document.getElementsByClassName('topics');
console.log(topicsElements[0].innerHTML);
console.log(topicsElements[1].innerHTML);

console.log('======== querySelector() ==========');
const element= document.querySelector('#selector');
console.log(element.innerHTML);

const elementJsTopics = document.querySelector('.jsTopic');
console.log(elementJsTopics.innerHTML);
// console.log(elementJsTopics[1].innerHTML);
// console.log(elementJsTopics[2].innerHTML);

console.log('======== querySelectorAll() ==========');
const allElementsJsTopics = document.querySelectorAll('.jsTopic');
for (let index = 0; index < allElementsJsTopics.length; index++) {
    const element = allElementsJsTopics[index].innerHTML;
    console.log(element);  
}
for (const ele of allElementsJsTopics) {
    console.log(ele.innerHTML);  
}
// change the attribute
const elementfollowMe=document.querySelector('#follow');
elementfollowMe.setAttribute('href','https://www.linkedin.com/in/kishor-ubhale-6008461a4/');
// chage Imges also
const elementimg=document.querySelector("#img")

elementimg.setAttribute('src','images/portfolio2.jpg')



// creating an node(element)
const elementli=document.createElement('li')
const elementtext=document.createTextNode('ES6 feature');
elementli.appendChild(elementtext);
const elementJsTopics1 =document.querySelector('#JsTopics');
elementJsTopics1.appendChild(elementli);

const elementh1=document.createElement('h1')
const elementtext2=document.createTextNode('Dom is last topics in javascript');
elementh1.appendChild(elementtext2);
const elementJsTopics2 =document.querySelector('#heading');
elementJsTopics2.appendChild(elementh1);

let ele=document.createElement('li');
let text=document.createTextNode('Angular');
ele.appendChild(text);
let mainele=document.querySelector('#JsTopics');
mainele.appendChild(ele);



//create element in div
const elementspan=document.createElement('span');
const elementtext3=document.createTextNode('Follow me on social meadia')
elementspan.appendChild(elementtext3);
const elementdiv=document.querySelector('#title');
elementdiv.appendChild(elementspan);

//remove the html element
const controlele=document.querySelector('#Control');
const parentele=document.querySelector('#JsTopics');
parentele.removeChild(controlele);
//css property
const element2=document.querySelector('#topics');
element2.style.color="red";
element2.style.fontFamily="Arial'"



//event handling
//1 way
function show(){
    alert("hey kishor you click me bro")
}
//2nd way
const elementh3=document.querySelector('#selector');
elementh3.addEventListener('click',()=>{
    alert("You click me  Gajanan sir")
})
//3nd way
const elementh4=document.querySelector('#topics');
elementh4.addEventListener('click',function(){
    alert("You click me  kishor sir")
})

//chage the color when mouseover and mouseout
 const BtnSubmit=document.querySelector('#btnSubmit');
 BtnSubmit.addEventListener('mouseover',()=>{
    btnSubmit.style.background="red"
    btnSubmit.style.color="white"
 })
 BtnSubmit.addEventListener('mouseout',()=>{
    btnSubmit.style.background="blue"
    btnSubmit.style.color="white"
 })