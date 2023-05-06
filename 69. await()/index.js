// await = makes an async function wait for a promise

async function loadFile(){
    let fileloaded = false;

    if(fileloaded){
        return "File Loaded!!!";
    }
    else{
        throw "File NOT Loaded";
    }
}

async function startprocess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startprocess();

/*
    To avoid getting uncaught errors, always use try and catch statements
*/

/* 
loadFile().then(value => console.log(value))
       .catch(error => console.log(error));

await keyword is used to eliminate these two lines.
NOTE: await can only be used inside an async function.
*/