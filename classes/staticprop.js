class User {
    constructor(username) {
        this.username = username;

    }

    logMe() {
        console.log(`User Name: ${this.username}`);
    }

    static crateId() {
        return '123455';
    }
}

const minar = new User('Hossain');
// console.log(minar.crateId())


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}


const teacherOne = new Teacher('IPhone', 'iphone@gmail.com');
console.log(teacherOne.logMe())
// console.log(teacherOne.crateId())