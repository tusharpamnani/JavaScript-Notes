// Type Conversion = change the data type of a value to another 
//                   (string, numbers, boolean)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;
console.log(typeof age);

console.log("Happy birthday!! You are",age, "years old");


let x;
let y; 
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");
// converting an empty string to boolean will return false
// whereas converting a string with something in it, it will return true

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
