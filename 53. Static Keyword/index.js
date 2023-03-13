// static = belongs to the class, not the objects 
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions

class car{

//    numberOfCars = 0;
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        car.numberOfCars ++;
    }

    static startRace(){
        console.log("3...2...1...Go")
    }
}

const car1 = new car("Mustang");
const car2 = new car("Corvette");
const car3 = new car("BMW");
const car4 = new car("Mercedes");

/*
console.log(car1.numberOfCars);
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);
*/

console.log(car.numberOfCars);
car.startRace();
