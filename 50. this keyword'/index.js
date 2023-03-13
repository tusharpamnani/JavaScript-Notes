// this = referance to a particular object
//        the object depends on one immediate context

const car1 = {
    model:"Mustang",
    color:"Black",
    year:1967,

    drive : function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car2 = {
    model:"Corvette",
    color:"Blue",
    year:1986,

    drive : function(){
        console.log(`You drive the ${car2.model}`)
    }
}

car1.drive();
car2.drive();