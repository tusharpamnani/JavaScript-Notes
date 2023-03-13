class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 1967, "Black");
const car2 = new Car("Corvette", 1969, "Red");
const car3 = new Car("Supra", 1985, "Blue");

changeColor(car3, "black");

displayinfo(car1);
displayinfo(car1);
displayinfo(car3);



function displayinfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color
}