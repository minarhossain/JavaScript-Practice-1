
// class method is constructor()
// class keyword (1. extends 2. static 3. super)

// the constructor method is a special method for crating and initializing object created within a class



// class User {
//     constructor(username) {
//         this.username = username
//     }
// }

// const one = new User('Mianr');
// console.log(one.username);
// console.log('connected')


class Car {
    constructor(brand) {
        this.carname = brand
    }
    present() {
        return ` I have a car name is : ${this.carname}`
    }

    class Model extends Car {
    constructor(brand, mod) {
        super(brand)

        this.model = mod;
    }
    show() {
        return this.present() + ', is a ' + this.model;
    }
}
}

const carOne = new Car('BMW');
const carTwo = new Model('Audi');
console.log(carTwo.show())