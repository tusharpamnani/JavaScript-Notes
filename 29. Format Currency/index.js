// toLocaleString() = returns a string with a language sensitive representtation of this number

// number.toLocaleString(locale, {options})

// locale = specify that language (undefined = default set in browser)
// options = object with formatting options

let mynum = 123456.789
//mynum= mynum.toLocaleString("en-US"); // US English
//mynum= mynum.toLocaleString("hi-IN"); // Hindi

//mynum= mynum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//mynum= mynum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//mynum= mynum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//mynum= mynum.toLocaleString(undefined,{style:"percent"})

mynum= mynum.toLocaleString(undefined,{style:"unit", unit: "celsius"})

console.log(mynum);