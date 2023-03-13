// ternary operator = Shortcut for an if/else statement 
//                    takes 3 arguments
//                      1. a condtion with ?
//                      2. expression if True:
//                      3. expression if False

// condition ? True : False

let adult = checkAge(18);
console.log(adult)
function checkAge(age){
    return age >= 18 ? true : false;
}

/*
function checkAge(age){
    if (age >= 18){
        return true;
    }
    else {
        return false;
    }
}
*/