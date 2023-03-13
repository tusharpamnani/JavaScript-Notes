// nested loops = loop inside another loop

let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for (let i = 1; i <= rows; i++){
    for (let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}