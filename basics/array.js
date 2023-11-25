// 14 no video
// shallow copies and deep copies

// Data Structure

// Collection of multiple ele

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // number, string, boolean, objects

const newArr = new Array(1, 2, 3, 4, 5); // objects type array

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// arr.push(6) // add last element
// arr.push(7) // add last element
// arr.pop() //remove last element
// array copy operation shallow copy Deep Copy

// arr.unshift(0) // add the first element
// arr.unshift(9) // add the first element
// arr.shift() // remove the first element
// arr.shift() // remove the first element

// console.log(arr.includes(4)) // boolean true or false
// console.log(arr.indexOf(5)) // 4 number
// console.log(arr.indexOf(12)) // if index doesn't match return -1 (pass the element)
// console.log(arr);

// const joinArray = arr.join(', ');
// console.log(joinArray) // join comma
// console.log(typeof joinArray) // string


// slice and splice difference between slice and splice

console.log("A => ", arr)

console.log("Slice 1,4 =>", arr.slice(1, 4))
console.log("B =>", arr);
console.log("Splice 1, 4 =>", arr.splice(1, 4));
console.log("Original => ", arr)