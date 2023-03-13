// const = a variable that can't be chhanged 

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is",circumference)

// using "let" we define a variable, whose value can be changed further in the program. To prevent this for some elements, we use "const".
// Here, we don't want the value of "pi" to change. So, we used "const". Also, one of the common naming convensions for constants is that you make all the letters uppercase. It isn't neccessary, but is a good practice.