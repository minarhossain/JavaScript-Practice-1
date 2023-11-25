const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor)


// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI);


const user = {
    name: 'Minar',
    age: 20,
    isAvailable: true

}
console.log(Object.getOwnPropertyDescriptor(user, 'isAvailable'))
