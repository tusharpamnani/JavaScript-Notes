// array.reduce() = reduces as array to a single value

let prices = [5,10,15,20,25];
let total = prices.reduce(checkout);

console.log(`The total is: $${total}`)
function checkout(total, element){
    return total + element
}