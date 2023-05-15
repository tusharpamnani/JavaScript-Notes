// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

console.log(navigator.cookieEnabled);
/*
document.cookie = "FirstName=John; expires=Thu, 01 Jan 2020 00:00:00 GMT; path=/; SameSite=None; secure";
document.cookie = "lastName=Wick; expires=Thu, 01 Jan 2020 00:00:00 GMT; path=/; SameSite=None; secure";
document.cookie = "firstName=John; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; secure";

console.log(document.cookie);
*/
/*
    if "expires" has a date in the past, then the cokkie will get deleted.
*/



function setCookie(name, value, daystolive){
    const date = new Date();
    date.setTime(date.getTime() + daystolive*24*60*60*1000);        // Converting daystolive into milliseconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=None; secure`;
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(": ")
    console.log(cArray);
}
//6:16:00
setCookie("J", "Wick", 365);
setCookie("Spongebob", "Squarepants", 365);
deleteCookie("John");
getCookie("J");
console.log(document.cookie);
