// method chaining = calling one method after another 
//                   in one single line of code

let username= "tushar";
/*Long method*/
let letter = username.charAt(0);
letter= letter.toUpperCase();
console.log(letter);

/*Method Chaining*/
let Letter = username.charAt(0).toUpperCase();
console.log(Letter);
