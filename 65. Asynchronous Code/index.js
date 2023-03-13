// synchronous code = In an ordered sequence
//                    Step-by-Step linear instructions
//                    (Start now, Finish now)

// asynchronous code = Out of sequence
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                     (Start now, Finish sometime later)


console.log("Start");
console.log("This step is synchronous");
console.log("End");

console.log("------------------------------------------");

console.log("Start");
setTimeout(() => console.log("This is asynchronous"),5000)
console.log("End");

