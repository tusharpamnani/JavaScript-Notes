// How to accept user input

// EASY way with windows prompt

//let username = window.prompt("What's your name??");
//console.log(username);

// DIFFICULT way with HTML textbox

document.getElementById("mybutton").onclick = function()
{

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "Hello "+ username;
}