// async = makes a function return a promise

/*
const promise = new Promise((resolve, reject) => {
    let fileloaded = true;

    if(fileloaded){
        resolve("File Loaded!!!");
    }
    else{
        reject("File NOT Loaded");
    }
});

promise.then(value => console.log(value))
       .catch(error => console.log(error));

*/


async function loadFile(){
    let fileloaded = true;

    if(fileloaded){
        return "File Loaded!!!";
    }
    else{
        throw "File NOT Loaded";
    }
}

loadFile().then(value => console.log(value))
       .catch(error => console.log(error));