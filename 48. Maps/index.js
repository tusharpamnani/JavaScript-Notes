// map = obeject that holds key-value pairs of data type

const store = new Map (
    [
        ["tshirt",20],
        ["jeans",30],
        ["socks",10],
        ["underwears",50]
    ]
);

/*
let shoppingCart = 0;
shoppingCart += store.get("tshirt");
shoppingCart += store.get("underwears");
console.log(shoppingCart);
*/

store.set("hat",40);

store.delete("hat");

console.log(store.has("hat"));

console.log(store.size);

store.forEach((value,key)=>console.log(`${key} $${value}`))