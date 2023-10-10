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

//create element in div
const elementspan=document.createElement('span');
const elementtext3=document.createTextNode('Follow me on social meadia')
elementspan.appendChild(elementtext3);
const elementdiv=document.querySelector('#title');
elementdiv.appendChild(elementspan);