// DOM = Document Objected Model (API)
//       An interface for changing the content of a page

/*
console.log(document);      // this will display the DOM and everything within it
console.dir(document);     // this will display all of the properties of the DOM

console.log(document.title); // this will display the title of the DOM
console.dir(document.URL); // this will display the url of the DOM
document.title = "Title goes here"; // this will change the title of the DOM
document.location = "https://google.com"; // this will take me to Google, basically chanes the url of the DOM
*/

document.body.style.backgroundColor = "skyblue";  // this will change the background color of the DOM
document.getElementById("myDiv").innerHTML = "Hello";   // this will change the text of the element "myDiv" to "Hello"