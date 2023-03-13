// slice() extracts a section of a string
//         and returns it as a newstring
//         without modifying the original string

let fullname = "Tushar Pamnani";
let firstname = fullname.slice(0,6);
let lastname= fullname.slice(7,);

console.log(firstname);
console.log(lastname);
/*This would not be efficient if we need to take user input as lengths of names differ, making it difficult to slice the string properly*/

let FirstName = fullname.slice(0,fullname.indexOf(" "));
let LastName = fullname.slice(fullname.indexOf(" ")+1);

console.log(FirstName)
console.log(LastName)
/* In this case we sliced the fullname till the first space to get first name and similarly for last name. This is useful when we have a list of full names or we are taking user input for the same*/