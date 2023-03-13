// arrays = think of it as a variable that can store multiple values

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
//fruits[2] = "coconut"; 

fruits.push("coconut");         //adds an element at the last
fruits.pop();                   // removes the last element
fruits.unshift("mango");        // adds the element at the beginning
fruits.shift();                 // removes the element from beginning
let length = fruits.length;     // returns the length of the array
let index = fruits.indexOf("kiwi") 


console.log(fruits)
console.log(fruits[2]);
console.log(fruits[15]);
console.log(length);
console.log(index);

// index of -1 shows that the element was not found 