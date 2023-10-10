let isNotesPrepared=true;
const promise=new Promise((resolve,rejected)=>{
    if(isNotesPrepared){
        resolve(`sir...share notes and recording`);
    }else{
        rejected(`sir... will not share notes and recording`);
    }
});
promise.then(onsucess=>console.log(onsucess))
    .catch(rejection=>console.log(rejection))
    .finally(()=>console.log(`finally..some how you will have session Notes`));
