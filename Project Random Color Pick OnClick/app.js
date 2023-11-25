const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener('click', function (e) {
        // console.log(e)
        console.log(e.target.id)
        if (e.target.id === 'gray') {
            body.style.backgroundColor = 'gray';
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        } if (e.target.id === 'purple') {
            body.style.backgroundColor = 'purple';
        }
    })
})

// form submit (post and get deya amara backend)


const form = document.querySelector('form');

// this use case will give you empty
// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');
    if (height === '' || height < 0 || isNaN(height)) {
        results.textContent = 'Please fill valid height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.textContent = 'Please fill valid weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.textContent = `Your BMI Is ${bmi}, You are Underweight`;
        }
        else if (bmi < 25) {
            results.textContent = `Your BMI Is ${bmi}, You are Normal`;
        }
        else if (bmi < 30) {
            results.textContent = `Your BMI Is ${bmi}, You are Overweight`;
        }
        else {
            results.textContent = `Your BMI Is ${bmi}, You are Obese`;
        }

    }

})


//!=================== clock ======================


const clock = document.getElementById('clock');
setInterval(() => {
    const date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)



//! ++++++++++++++ Guess Game ++++++++++++

const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField').value;



function validGuess(guess) {
    //

}


function checkGuess(guess) {
    //

}


function displayGuess(guess) {
    //
}


function displayMessage(message) {
    // 

}

function endGame() {

}

function newGame() {

}
