// For loop with break and continue

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }

// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);

// }


// for (initial, condition, increment) {
//     // body of for loop
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index == 5) {
//         break;
//     }
//     console.log(element)

// }
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log("5 is the best nuber");
//     }
//     console.log(element)

// }

// for (let i = 1; i <= 20; i++) {

//     console.log(`Outer loop is  ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${i} x ${j}  = ${i * j} `); //  for every one outer inner will be print 10 times
//     }
// }


// break and continue page no anujaye

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("deceted at 5");
        // break; // stop the loop
        continue
    }

    console.log("Value of i is ", i);
}
