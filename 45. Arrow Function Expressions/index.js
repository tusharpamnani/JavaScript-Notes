// arrow function = compact alterantive to traditional functions
//  =>

/*
const greeting = function(username){
    console.log(`Hello ${username}`);
}

greeting("Tushar");
*/

const greeting = username =>console.log(`Hello ${username}`);


greeting("Tushar");


/*
const percent = function(x,y){
    return x/y *100;
}
console.log(`${percent(70,100)}%`);
*/

const percent = (x,y) => x/y *100;

console.log(`${percent(70,100)}%`);