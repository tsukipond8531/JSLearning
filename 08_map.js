let array =[ 11, "6ft", "GK", "MH", true, true ];
console.log(array);

let map = new Map();
map.set("rollNo", 11);
map.set("height" ,"6ft");
map.set("name" ,"GK");
map.set("state" ,"MH");
map.set("isMarried" ,true);
map.set("haveKid" ,true );
map.set("skills" , ["Angular", "React", "Java", "Docker", "K8", "CICD"] );
// console.table(map);

console.log(map.size);

let stateValue = map.get("state");
console.log(stateValue);
console.log(`-------- SKILLS ------`);
let skills = map.get("skills");
for (const skill of skills) {
    console.log(skill);
}

let isHeightKeyAvailable= map.has("height");
console.log(isHeightKeyAvailable);

map.delete("haveKid");
// console.table(map);

console.log(map.keys());
console.log(map.values());

map.set("rollNo", 22);

console.table(map);

console.log(`-------- Traversing map --------`);
let keys = map.keys();
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}