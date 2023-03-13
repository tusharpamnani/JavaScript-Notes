class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1 = new Car("Mustang", 1967, "Black");
const car2 = new Car("Corvette", 1969, "Red");
const car3 = new Car("Supra", 1985, "Blue");
const car4 = new Car("W14", 2023, "Black");

const cars = [car1, car2, car3, car4];

/*
console.log(cars[0].model);
console.log(cars[1].year);
console.log(cars[2].color);
*/

//cars[0].drive();

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}