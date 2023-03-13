// promises = Object that encapsulates the result of an asynchronous operation
//            Let asynchronous methods return values like synchronous methods
//            "I promise to return something in the future

//            the STATE is "pending" then: "fulfilled"
//            the RESULT is what can be returned
//            2 parts producing and consuming

/*
const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;
    if (fileLoaded) {
        resolve("File Loaded");
    }
    else{
        reject("File NOT Loaded");
    }
});

promise.then(value => console.log(value))
       .catch(error => console.log(error));

*/

const wait = time => new Promise(resolve =>{
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));