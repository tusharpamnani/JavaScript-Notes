// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nametag = document.createElement("h1");
/*
nametag.innerHTML = window.prompt("Enter your name");
document.body.append(nametag);
*/
/*
nametag.textContent = window.prompt("Enter your name");
document.body.append(nametag);
*/

const mylist = document.querySelector("#group");
const listitem = document.createElement("li");
listitem.textContent = "Mango";
mylist.append(listitem);                    // adds the element at the end of the list
mylist.prepend(listitem);                   // adds the element at the beginning of the list
mylist.insertBefore(listitem, mylist.getElementsByTagName("li")[2])     // adds the element at the index 2 of the list