
const element1 = document.getElementById("mybtn");
element1.onclick = doSomething;

function doSomething() {
    alert("You did Something");
}

function doAnything() {
    alert("You did anything");
}

const element2 = document.body;
//element2.onload = doAnything;

const element3 = document.getElementById("mytext");
element3.onchange = doAnything;

const element4 = document.getElementById("myDiv");
element4.onmouseover = changeColor1;
element4.onmouseout = changeColor2;
element4.onmousedown = changeColor3;
element4.onmouseup = changeColor4;

function changeColor1(){
    element4.style.backgroundColor = "lightgreen";
}
function changeColor2(){
    element4.style.backgroundColor = "lightblue";
}
function changeColor3(){
    element4.style.backgroundColor = "aliceblue";
}
function changeColor4(){
    element4.style.backgroundColor = "red";
}