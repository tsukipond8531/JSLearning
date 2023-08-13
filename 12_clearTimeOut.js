console.log(`callback function `);

let notification = function (){
    console.log(`======== inside FE ==========`);
    console.log(`Inside notification`);
}

setTimeout(notification, 8000);


setTimeout(function(){
    for (let index = 0; index <=10; index++) {
        if (index%2==0) {
            console.log(index);
        } 
    }
} , 5000);