// variable scope = where the variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = declared outside any function
// if global, var will change browser's window properties


let othername = "Tushar"; //global variable

var name = "Tush" //global variable 

function dosomething(){
    for (var j = 1 ; j <= 3 ; j++){
        //console.log(i)
    }
}

for (var i = 1 ; i <= 3 ; i++){
    console.log(i)
}

console.log(i);
console.log(j);