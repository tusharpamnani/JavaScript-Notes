// setTimeout() = invokes a function after a number of miliseconds
//                asynchronous function (doesn't pause execution)

let item = "Cryptocurrency";
let price = 420.69;

let timeout1 = setTimeout(firstMessage, 3000, item, price);
let timeout2 = setTimeout(secondMessage, 6000);
let timeout3 = setTimeout(thirdMessage, 9000);


function firstMessage(item, price){
    alert(`Buy this ${item} for ${price}`)
}

function secondMessage(){
    alert("This is not a scam")
}

function thirdMessage(){
    alert("DO  IT!!!!!")
}


document.getElementById("mybtn").onclick = function() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    alert("Thanks for buying")
}