//(constructor declaration) singleton object when we declare object literal in javascript it is not a singleton
// Object.create


// object literal declaration

const mySymbol = Symbol("❤️love you❤️");
console.log(typeof mySymbol);
const JsUser = {
    name: "Minar",
    age: 18,
    [mySymbol]: "💝 love you ❤️",
    email: "codewithmnr@gmail.com",
    village: "Aroshnagor",
    post: "Magurahona",
    upazilla: "Dumuria",
    country: "Bangladesh"
}

// access the object
console.log(JsUser["name"])
console.log(JsUser["age"])
console.log(JsUser["village"])

console.log(JsUser[mySymbol])
// Object.freeze(JsUser);
JsUser.email = "minard2k@gmail.com";
JsUser.greetings = function () {
    console.log(`Hello ${this.name} How are you`);
}

console.log(JsUser.greetings());