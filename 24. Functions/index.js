// function = define code once and use it many times
//            to perform some code call the function name

startProgram();

function startProgram(){
    let userName = "Tushar";
    let age = 18;

    happyBirthday(userName, age);
}


function happyBirthday(name, age){
    console.log ("happy birthday to you");
    console.log ("happy birthday to you");
    console.log ("happy birthday dear",name);
    console.log ("happy birthday to you");
    console.log ("You are",age,"years old");
    console.log("------------------------------");
}

/*
console.log ("happy birthday to you");
console.log ("happy birthday to you");
console.log ("happy birthday dear ____");
console.log ("happy birthday to you");
console.log ("You are ___ years old");

console.log ("happy birthday to you");
console.log ("happy birthday to you");
console.log ("happy birthday dear ____");
console.log ("happy birthday to you");
console.log ("You are ___ years old");

*/