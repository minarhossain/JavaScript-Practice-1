const user = {
    name: "Minar",
    price: 666,


    welcomeMessage: function () {
        console.log(`Welcome ${this.name} to this website`);
        console.log(this);
    }
    // console.log(this)
}
// user.welcomeMessage()
// user.name = "Hossain";
// user.welcomeMessage();
// console.log(this);

// function welcome() {
//     console.log(this) // {}
// }
// welcome()

// const welcome = function () {
//     const name = "Minar";
//     console.log(this.name); // undefined
// }
// welcome()
// const welcome = () => {
//     const name = "Minar";
//     console.log(this.name); // undefined
//     console.log(this); // {}
// }
// welcome()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (
//     num1 + num2
// );
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => { name: "Mehun" }; // undefined
const addTwo = (num1, num2) => ({ name: "Mehun" });

// note: use the curly braces must be written return keyword
// note: use the parentheses no need to write return keyword

console.log(addTwo(3, 4))
// Arrow function syntax

const myArray = [1, 3, 5, 7, 9];
// myArray.forEach(() => { });
// myArray.forEach(() => ());
// myArray.forEach(function () { });
