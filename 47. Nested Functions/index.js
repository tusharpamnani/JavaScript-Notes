// nested functions = functions inside other functions
//                    Outer functions have access to inner functions
//                    Inner functions are "hidden" from outsidde the outer functions
//                    used in clousures

let userName = "Tushar";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}

