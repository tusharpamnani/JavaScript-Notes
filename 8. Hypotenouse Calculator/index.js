/*
let a;
let b;
let c;
a = window.prompt("Enter a side A");
a = Number(a)

b = window.prompt("Enter a side B");
b = Number(b)

//c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); // Reducing the number of steps

console.log("The Hypotenuose of the given right angled triangle is",c)
*/

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("atextbox").value;
    a = Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("clabel").innerHTML = "Side C: "+ c;
}