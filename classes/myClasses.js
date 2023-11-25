// // ES6

// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return (`${this.password}abc`);
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const firstUser = new user("Minar", "minar@gmail", "123");
// console.log(firstUser.encryptPassword())
// console.log(firstUser.changeUserName())


// Behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return (`${this.password}abc`);
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const firstMan = new User("Minar", "minar@gmail", "123");
console.log(firstMan.encryptPassword())
console.log(firstMan.changeUserName())