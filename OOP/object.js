
// Object literal

const user = {
    property: 'methods',
    name: "Mianr",
    age: 20,
    color: 'Black',
    loginCount: 8,
    signIn: true,
    getUserDetails: function () {
        // console.log(`My name is ${this.name}`);
        console.log(this)
    }
}
// console.log(user['name'])
// console.log(user.getUserDetails())

// console.log(this)


const date = new Date()//constructor function

function User(username, loginCount, isLoggedIn) {

    // variable (this.username) = passed value(username)
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Hello ${this.username}`);
    }

    // return this // by default return this
}


const userOne = new User('Minar', 8, true);
const userTwo = new User('Hossain', 9, false);

// Note when we use new keyword create a new empty object is called instance
// A constructor function called through new keyword

console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)