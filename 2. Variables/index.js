// A Vairable is a container for storing data
// A Variable behaves as if it was the value that it contains.

// Two Steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let fname = "Tushar"; // string
let student = true; // boolean
let age; // number

age = 18;
age = age + 1;

console.log(fname);
console.log(age);
console.log(student);
console.log("Hello",fname);
console.log("You are",age,"years old");

document.getElementById("p1").innerHTML = "Hello " + fname; // Changes the inner HTML 
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
