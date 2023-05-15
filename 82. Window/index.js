// wimdow = interface used to talk to the web browser
//          the DOM is a property of the window

/*
console.dir(window);

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
//console.log(window.location.href = "https://google.com");

console.log(window.location.hostname);
console.log(window.location.pathname);
*/

const mybtn1 = document.querySelector("#mybtn1");
const mybtn2 = document.querySelector("#mybtn2");
const mybtn3 = document.querySelector("#mybtn3");
const mybtn4 = document.querySelector("#mybtn4");

mybtn1.addEventListener("click",() =>
    window.open("https://google.com")
)                                                                   // opens the google.com URL

mybtn2.addEventListener("click",() => window.close());               // closes the current window

mybtn3.addEventListener("click",() => window.print());               // prints the currennt page / window

//window.alert("Hello!")

//window.confirm("Press ok to continue...");

/*
let age = window.prompt("Enter your age!")
if (age < 18){
    window.alert("You must be 18+ to enter the window.");
    window.close();
}
*/