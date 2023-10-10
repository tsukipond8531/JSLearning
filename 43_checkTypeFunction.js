function typeteller(ele){
    return typeof ele;
}
console.log(typeteller([]));
console.log(typeteller(12));
console.log(typeteller('123'));
console.log(typeteller(true));
console.log(typeteller(()=>{}));
console.log(typeteller(undefined));