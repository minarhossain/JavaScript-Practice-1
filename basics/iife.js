// IIFE (Immediately Invoked Function Expression)


(function iife() {
    console.log(`I am iife`)
})();

// name iffe
(function add() {
    console.log(`one + two`);
})();

// (function)(call)
// global scope ko  pollution se problem hote a kahi bar so golabal scope a declare kora variable dur korrar jonno iffe function use kora hoi

(() => {
    console.log(`I am arrow function iffe`)
})();

((a, b) => {
    console.log(a + b);
})(5, 6)