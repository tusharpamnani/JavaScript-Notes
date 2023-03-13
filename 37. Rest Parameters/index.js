// Rest Parameters = represents an indefinite number
// ...               of parameters
//                   (packs arguments in an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d));

/*  This kind of function will not be able to calculate dynamically
function sum(a,b){
    return a + b;
}
*/
/*
function sum(a,b,c){
    return a + b + c;
}
*/

function sum(...numbers){
    total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}