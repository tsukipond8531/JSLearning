for (let index = 0; index < 10; index++) {
    console.log(`Iteration Start`);
    if (index==5) {
        break;
    }
    console.log(`Value is ${index}, Iteration ${index+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------`);
}

console.log(`-------- continue -----------`);
for (let index = 0; index < 5; index++) {
    console.log(`Iteration Start`);
    if (index==3) {
        continue;
    }
    console.log(`Value is ${index}, Iteration ${index+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------`);
}
