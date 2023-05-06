let element = document.getElementById("myTitle");           // Selects the Element by its id
element.style.backgroundColor="lightgreen";

let fruits = document.getElementsByName("fruits");          // Selects the element by its name (attribute)
//console.log(fruits);
//console.log(fruits[0]);

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit)
    }
});

let vegetables = document.getElementsByTagName("li");       // Selects the element by its tag name
vegetables[0].style.backgroundColor = "lightblue";
vegetables[1].style.backgroundColor = "red";
vegetables[2].style.backgroundColor = "yellow";


let deserts = document.getElementsByClassName("deserts");   // Selects the Element by its class name
deserts[0].style.backgroundColor = "aliceblue";
deserts[1].style.backgroundColor = "wheat";
deserts[2].style.backgroundColor = "grey";

let element1 = document.querySelector("#myTitle");          // When selecting an id, always preceed its name with a hashtag
element1.style.backgroundColor = "brown";

let element2 = document.querySelector(".deserts");          // When selecting a class, always preceed its name with a period (.)
element2.style.backgroundColor = "blue";                    // querySelector selects only the very first occuring element 

let element3 = document.querySelector("[for]");             // When selecting an attribute, always keep the name of it between square brackets.
element3.style.backgroundColor ="purple";           

let element4 = document.querySelector("li");                // When selecting a tag, just mention its name.
element4.style.backgroundColor = "orange";    

let element5 = document.querySelectorAll("li");             // querySelectorAll selects all the elements of the specified category.
element5.forEach(element6 => {
    element6.style.backgroundColor = "grey";    
});