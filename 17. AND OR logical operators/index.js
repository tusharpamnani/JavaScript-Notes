// Gives us the ability to check more then 1 condition concurrently
// && AND
// || OR

let temp = 15 ;
sunny = true;
if(temp >0 && temp<30 && sunny){
    console.log("The weather is good")
}
else {
    console.log("The weather is bad")
}

if(temp <= 0 || temp >= 30){
    console.log("The weather is bad")
}
else {
    console.log("The weather is good")
}