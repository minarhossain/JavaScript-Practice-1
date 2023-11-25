// function some(parameter1, parameter2) {
//     return parameter1 + parameter2
// }
// addEventListener(argument1, argument2);

// scope
//

function loginUserMessage(userName = "Moumi") {
    // if (userName) {
    //     return `${userName} Just login`;
    // }
    // if (userName === undefined) {
    //     console.log("Please enter a userName");
    //     return;
    // }
    if (!userName) {
        console.log("Please enter a userName");
        return;
    }
    return `${userName} Just login`;

}

console.log(loginUserMessage("Minar"));