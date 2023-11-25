class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        return (`USERNAME: is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new Teacher start learning ${this.username}`)
    }
}

const userOne = new User('Ramjan');

const teacherOne = new Teacher('JavaScript', 'sohel@gmail.com', '2365');
console.log(teacherOne.addCourse());
console.log(teacherOne.logMe());

console.log(userOne === teacherOne)
console.log(userOne === Teacher)
console.log(teacherOne instanceof Teacher)

const man = "Minar Hossain";