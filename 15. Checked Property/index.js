document.getElementById("mybutton").onclick = function (){
    const mycheckbox = document.getElementById("mycheckbox");
    const visabtn = document.getElementById("visabtn");
    const mastercardbtn = document.getElementById("mastercardbtn");
    const paypalbtn = document.getElementById("paypalbtn");

    if (mycheckbox.checked){
        console.log("You have submitted")
    }
    else {
        console.log("You have not submitted")
    }

    if(visabtn.checked) {
        console.log("You are paying with visa")
    }
    else if (mastercardbtn.checked) {
    console.log("You are paying with mastercard")
    }
    else if (paypalbtn.checked) {
    console.log("You are paying with paypal")
    }
    else {
        console.log("You should select a payment method")
    }
}