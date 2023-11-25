// how does js code execute (execution context)

// code dela global execution context (variable)
// Functional Execution context
// Eval execution context (property)

// 1.Memory Creation phase
// 2.Code Execution phase

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 5)


/* 
1. Global execution context (Global Environment); (store this)

2. Memory creation Phase
first cycle
val1 = undefined;
val2 = undefined;
addNum = definition;
result1 = undefined;
result2 = undefined
=================================
second cycle (execution phase)

val1 = 10;
val2 = 5;

addNum -> alada execution context (new variabel environment and execution context)
result1 = 15;
result2 = 10


*/