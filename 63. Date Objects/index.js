// The date object is used to work with dates & times

let date = new Date();
//let date = new Date(0);
//let date = new Date("January 1, 2023 00:00:00");
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();


date.setFullYear(2024);
date.setMonth(11);
date.setDate(5);
date.setHours(23);
date.setMinutes(59);
date.setSeconds(15);
date = date.toLocaleString();
*/

//document.getElementById("mylabel"). innerHTML = year;
//document.getElementById("mylabel"). innerHTML = dayOfMonth;
//document.getElementById("mylabel"). innerHTML = dayOfWeek;
//document.getElementById("mylabel"). innerHTML = month;
//document.getElementById("mylabel"). innerHTML = hour;
//document.getElementById("mylabel"). innerHTML = minutes;
//document.getElementById("mylabel"). innerHTML = seconds;
//document.getElementById("mylabel"). innerHTML = formatDate(date);
document.getElementById("mylabel"). innerHTML = formatTime(date);


function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    
    return `${month}/${day}/${year}`;
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 10 ? "PM" : "AM";

    hours %= 12 || 12; 

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}