// object = A group of properties and methods
//          properties = what an object has 
//          methods = what an object an do
//          use . to access properties/methods

const car = {
    model:"Mustang",
    color:"Black",
    year:1967,

    drive : function(){
        console.log("You drive the car")
    },
    brake : function(){
        console.log("You stepped on the brakes")
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();