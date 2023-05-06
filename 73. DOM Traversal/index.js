let element1 = document.body;                       // Selects the body of the HTML
let child1 = element1.firstElementChild;            // Selects the very first child
child1.style.backgroundColor = "aliceblue";

let child2 = element1.lastElementChild;             // Selects the last child
child2.style.backgroundColor = "lightgreen";
/*
    When this colde is run, nothing really looks to have happened
*/
console.log(child2);
/*
    After printing the child2 on console, we get to know that, the body's last child was the <script> tag
*/

let element2 = document.querySelector("#vegetables");   // Selects the list "vegetables"
let parent = element2.parentElement;
parent.style.backgroundColor = "lightgreen";            // Since the parent of the vegetable list is the Body, the whole page gets it's color changed.

let sibling1 = element2.nextElementSibling;
sibling1.style.backgroundColor = "lightblue";           // The very next sibling of the list "vegetables" is the list "deserts", which gets it's color changed.

let sibling2 = element2.previousElementSibling;
sibling2.style.backgroundColor = "blue";                // The very previous sibling of the list "vegetables" is the list "fruits", which gets it's color changed.

let element3 = document.querySelector("#fruits");
let child3 = element3.firstElementChild;                // Returns the first child of the list
child3.style.backgroundColor = "white";

let child4 = element3.lastElementChild;                 // Returns the last child of the list
child4.style.backgroundColor = "wheat";

let child5 = element3.children[2];                      // Returns the child element at index 2
child5.style.backgroundColor = "yellow";

let children = Array.from(element3.children);           // element3.children is a collection of child elements which is converted into an array to perform operations
children.forEach(color => color.style.backgroundColor = color.style.backgroundColor = "grey");