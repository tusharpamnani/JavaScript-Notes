//  setInterval() = invokes a function repeatedly after a number of milliseconds
//                  asynchronous function (doesn't pause execution)


let count = 0;
let max = window.prompt("Count up to what number?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count++;
    console.log(count);
    if(count>=max){
        clearInterval(myTimer);
    }
}