// .addEventListener()(event, function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions

const innerdiv = document.getElementById('innerdiv');
const outerdiv = document.getElementById('outerdiv');
/*
innerdiv.addEventListener("mouseover", changered);
innerdiv.addEventListener("mouseout", changegreen);

function changered(){
    document.getElementById('innerdiv').style.backgroundColor = "red"
}

function changegreen(){
    document.getElementById('innerdiv').style.backgroundColor = "green"
}
*/


innerdiv.addEventListener("click", changeGreen);
outerdiv.addEventListener("click", changeGreen, true);

function changeGreen () {
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "lightgreen";
}

/*
    useCapture is used when multiple elements take up same space and are listening for same event, then this method is used to specify the preference.
*/