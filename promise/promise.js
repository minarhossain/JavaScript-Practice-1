
// Promises js
// pending
// fulfil
// rejected

// fetch('url').then().catch().finally()

// Q and BlueBird(library)

const promiseOne = new Promise(function (resolve, rejected) {
    // Do and Async Task
    // DB calls , cryptography, network calls, api calls
    setTimeout(() => {
        console.log('Async Task One');
        resolve()
    }, 1000);
});

promiseOne.then(function () {
    console.log('Promise One is fulfilled/consumed');

})

new Promise(function (resolve, rejected) {
    setTimeout(function () {
        console.log('Async Task Two');
        resolve()
    }, 2000)
}).then(function () {
    console.log('Promise Two is fulfilled/consumed');
})

const promiseThree = new Promise(function (resolve, rejected) {
    setTimeout(function () {

        resolve({ name: "minar", age: 20, email: 'minar@example.com' })
    }, 3000)
}).then(function (user) {
    console.log(user.name)
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ name: "hossain", password: '0000', email: 'minar@example.com' })
        } else {
            error("Something went wrong")
        }
    }, 3000)
})

promiseFour.then((user) => {
    console.log(user.name)
}).catch(function (error) {
    console.log(error)
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ name: "JavaScript", password: '123456', email: 'nunurma@example.com' })
        } else {
            console.log("ERROR: Js went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data)

//     } catch (error) {
//         console.log(error)

//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


// fetch is the best invention of browser
// fetch() global function
// we have to learn again

// No experience means