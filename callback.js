function cbFunc1(){
    console.log('cb1');
}

function cbFunc2(){
    console.log('cb2');
}

function callingFunc(callback){

    console.log('main start');
    callback(callback);
}

callingFunc(cbFunc1);
callingFunc(cbFunc2);
