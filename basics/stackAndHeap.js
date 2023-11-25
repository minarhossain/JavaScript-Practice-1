// Primitive and Non-Primitive
// Stack (Primitive)
// Heap (Non-Primitive) (Reference)

let myYoutubename = 'Code with Computer';
let anotherName = myYoutubename;
anotherName = "JavaScript";
console.log(myYoutubename);// Code with Computer
console.log(anotherName);// JavaScript

let userOne = {
    name: "Minar Hossain",
    email: "mianrd2k@gmail.com"
}
let userTwo = userOne;
userTwo.email = 'codewithcomputer@gmail.com';
console.log(userOne)
console.log(userTwo)