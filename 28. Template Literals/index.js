// template literals = delimited with(`)
//                     instead of double or single quotes 
//                     allows embedded variables and expressions

let userName = "Tushar";
let items = 5;
let total = 50;

//console.log("Hello", userName);
//console.log("You have",items,"items in your cart");
//console.log("Your total is",total);

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`YOur total is ${total}`);

let text = `Hello ${userName}.<br>
You have ${items} items in your cart.<br> 
Your total is ${total}<br>`
 
//console.log(text)

document.getElementById("mylabel").innerHTML = text;