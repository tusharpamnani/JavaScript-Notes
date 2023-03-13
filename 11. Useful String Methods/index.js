let username = "Tushar";
let usernamee = "   Tushar   ";
let phone_number = "123-456-7890"; 
console.log(username.length); // Returns the length of the string 

console.log(username.charAt(3)); // Returns the character at specified index

console.log(username.indexOf("s")); // Returns the first occuring index of specified character

console.log(username.lastIndexOf("a")) // Returns the last occuring index of specified character

console.log(usernamee.trim()); // Removes the extra spaces before and after the characters 

console.log(username.toUpperCase()); //Returns the string with all characters in uppercase

console.log(username.toLowerCase()); //Returns the string with all characters in lowercase

console.log(phone_number.replaceAll("-","/")); // Replaces the first argument with the second