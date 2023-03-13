// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       write it then forget about it


let count = 0;

/*

function increaseCount(){
    count++;
    document.getElementById("myLabel"). innerHTML = count;
}

function decreaseCount(){
    count--;
    document.getElementById("myLabel"). innerHTML = count;
}

*/

document.getElementById("increasebtn").onclick = function(){
    count++;
    document.getElementById("myLabel"). innerHTML = count;
}

document.getElementById("decreasebtn").onclick = function(){
    count--;
    document.getElementById("myLabel"). innerHTML = count;
}