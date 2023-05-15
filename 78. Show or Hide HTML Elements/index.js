const mybtn = document.querySelector("#mybtn");
const myimg = document.querySelector("#myimg");

mybtn.addEventListener("click", () => {
    if(myimg.style.visibility == "hidden"){
        myimg.style.visibility = "visible";
    }
    else {
        myimg.style.visibility = "hidden";
    }
    console.log(myimg.style.visibility);
});


/*
    When we use myimg.style.display, all the elements below the element will be shifted upwards if display is set to none.
    This can be avoided by using myimg.style.visibility, this keeps space occupied by the element empty keeping the elements below it on their original positions.
*/