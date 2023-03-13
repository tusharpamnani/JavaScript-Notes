document.getElementById("submitbtn").onclick = function(){
    let temp

    if (document.getElementById("cbtn").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp)
        temp = toCelsius(temp);
        document.getElementById("templabel").innerHTML = temp + "°C";
    }
    else if (document.getElementById("fbtn").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp)
        temp = toFahrenhite(temp);
        document.getElementById("templabel").innerHTML = temp + "°F";
    }
    else {
        document.getElementById("templabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}
 
function toFahrenhite(temp){
    return temp * 9/5 + 32;
}