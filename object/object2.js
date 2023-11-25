console.log("connected");

// object singleton

const tinderUser = new Object();


tinderUser.id = 1;
tinderUser.name = "Minar";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

const regularUser = {
    email: "loggo@gmail.com",
    isLoggedIn: true,
    fullname: {
        firstname: "Minar",
        lastname: "Hossain"
    }
}

// console.log(regularUser.fullname?.firstname); // optional chaining

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1, obj2 };
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
console.log(obj3)


// When value form database

const users = [
    {
        id: 1,
        name: "Minar",
        email: "minar@gmail.com"
    }, {
        id: 2,
        name: "Hossain",
        email: "hossain@gmail.com"
    }, {
        id: 3,
        name: "Tasnim",
        email: "tasnim@gmail.com"
    }, {
        id: 4,
        name: "Rahim",
        email: "rahim@gmail.com"
    }, {
        id: 5,
        name: "Mehun",
        email: "mehun@gmail.com"
    }, {
        id: 6,
        name: "Sakib",
        email: "sakib@gmail.com"
    }, {
        id: 7,
        name: "Rakib",
        email: "rakib@gmail.com"
    }
]

// console.log(users[4].email)

console.log(Object.keys(users)) // showing index of object ['0', '1', '2','3', '4', '5', '6']
console.log(Object.values(users))
/* 
[
  { id: 1, name: 'Minar', email: 'minar@gmail.com' },    
  { id: 2, name: 'Hossain', email: 'hossain@gmail.com' },
  { id: 3, name: 'Tasnim', email: 'tasnim@gmail.com' },  
  { id: 4, name: 'Rahim', email: 'rahim@gmail.com' },    
  { id: 5, name: 'Mehun', email: 'mehun@gmail.com' },    
  { id: 6, name: 'Sakib', email: 'sakib@gmail.com' },    
  { id: 7, name: 'Rakib', email: 'rakib@gmail.com' }     
]
*/
console.log(Object.entries(users));
/* 
[
  [ '0', { id: 1, name: 'Minar', email: 'minar@gmail.com' } ],
  [ '1', { id: 2, name: 'Hossain', email: 'hossain@gmail.com' } ],
  [ '2', { id: 3, name: 'Tasnim', email: 'tasnim@gmail.com' } ],
  [ '3', { id: 4, name: 'Rahim', email: 'rahim@gmail.com' } ],
  [ '4', { id: 5, name: 'Mehun', email: 'mehun@gmail.com' } ],
  [ '5', { id: 6, name: 'Sakib', email: 'sakib@gmail.com' } ],
  [ '6', { id: 7, name: 'Rakib', email: 'rakib@gmail.com' } ]
]
*/

console.log(users.hasOwnProperty("name"));