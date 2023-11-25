
/* 
Data Types

*/

"use strict"; // treat all Js code as newer version
// alert("hello word!");

// conversion operator

let score = "10aa";

console.log(typeof score);
console.log(typeof (score));

let newValue = Number(score);
console.log(typeof newValue); // number
console.log(newValue); // NaN let score = "10aa";

const namta = (num) => {
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = arrays.map(arr => arr * num);
    return result;

}

console.log(`the numta is  [${namta(11).join(', ')}]`)
console.log(namta(12))
console.log(namta(13))
console.log(namta(14))
console.log(namta(15))
console.log(namta(16))
console.log(namta(17))
console.log(namta(18))
console.log(namta(19))
