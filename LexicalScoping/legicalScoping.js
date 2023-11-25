// Lexical Scoping



// closure

// function init() {
//     let name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();


// function outer() {
//     let userName = "Minar";

//     function inner() {
//         console.log("Inner One: ", userName)
//     }
//     function innerTwo() {
//         console.log("Inner Two: ", userName);
//     }
//     inner();
//     innerTwo()
// }
// outer();

// console.log("TOO OUTER : ", userName);


const clickHandler = (color) => {
    return function () {
        document.body.style.backgroundColor = `${color}`;
    }
}


document.getElementById("red").onclick = clickHandler("red");
document.getElementById("green").onclick = clickHandler("green");
document.getElementById("tomato").onclick = clickHandler("tomato");
document.getElementById("blue").onclick = clickHandler("blue");
document.getElementById("pink").onclick = clickHandler("pink");