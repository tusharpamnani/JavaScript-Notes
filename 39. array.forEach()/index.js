// array.forEach() = executes a provided callback function
//                   once for each element

let students = ["spongebob","patrick","mr.krabs"];
students.forEach(capitalise);
students.forEach(print);

function capitalise(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(students[0]);


function print(element){
    console.log(element);
}