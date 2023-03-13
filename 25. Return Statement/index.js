// return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter the width");
height = window.prompt("Enter the height");
area = getarea(width, height);
console.log("The area is",area);

function getarea(width , height){
    let result = width*height;
    return result;

//    return width*height;
}