// error = object with a description of 
//         something went wrong

//         Can't open a file
//         Lose Connection
//         User types incorrect input
//         TypeError

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a number: ");
    x = Number(x);

    if(isNaN(x)) throw"That wasn't a number"
    if(x == "") throw "That was empty"

    console.log(`${x} is a number`)
}
/*
Defines a code block to run
*/


catch(error){
    console.log(error);
}
/*
This catches the error and executes the code to handle it
*/


finally{
    console.log("This always executes");
}
/*
Defines a code block to run regardless of result
*/

