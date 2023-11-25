// Event in JavaScript

// onClick, onChange, onMouseDown, onMouseUp, onFocus, onBlur, onKeyPress, onKeyUp, onCopy, onPaste,

// Event Handler


// document.getElementById('owl').onclick = function () {
//     console.log("I clicked Owl")
// }

// document.getElementById('owl').addEventListener('click', function () {
//     console.log("I clicked Owl")
// });


// document.getElementById('owl').addEventListener('click', function () {
//     alert("I clicked Owl")
// }, false) // false is default parameter


// attachEvent()
// read event object

// jQuery - on


// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log(e)
// }, false)

// type // timeStamp //defaultPrevented // target // toElement // srcElement // currentTarget // clientX // clientY // screenX // screenY
// altKey, ctrlKey, shiftKey, keyCode, button, relatedTarget


// Event Propagation


document.getElementById("images").addEventListener('click', function (e) {
    console.log('click inside the ul tag')
}, false)


document.getElementById("photoshop").addEventListener('click', function (e) {
    console.log('click photoshop')
}, false)


document.getElementById("japan").addEventListener('click', function (e) {
    console.log('click Japan')
}, false)
document.getElementById("river").addEventListener('click', function (e) {
    console.log('click River')
}, false)



document.getElementById("owl").addEventListener('click', function (e) {

    console.log('clicked  owl');


}, false)



// document.getElementById('grandpa').addEventListener('click', function (e) {
//     console.log("You clicked grandpa");
// })

// document.getElementById('father').addEventListener('click', function (e) {
//     console.log("You clicked father");
// })

// document.getElementById('son').addEventListener('click', function (e) {
//     console.log("You clicked son");
// })

// document.getElementById('button').addEventListener('click', function (e) {
//     console.log("You clicked button");
// })



document.getElementById('list').addEventListener(('click'), function (e) {
    console.log("You clicked list");
});


document.getElementById('js').addEventListener(('click'), function (e) {
    console.log("You clicked JavaScript");
})

document.getElementById('php').addEventListener(('click'), function (e) {
    console.log("You clicked PHP");
})
document.getElementById('java').addEventListener(('click'), function (e) {
    console.log("You clicked Java");
})

document.getElementById('python').addEventListener(('click'), function (e) {
    console.log("You clicked Python");
})

document.getElementById('typescript').addEventListener(('click'), function (e) {
    console.log("You clicked TypeScript");
})

document.getElementById('css').addEventListener('click', function (e) {
    console.log("You clicked CSS");
})

document.getElementById('html').addEventListener('click', function (e) {
    console.log("You clicked HTML");
})

document.getElementById('cpp').addEventListener('click', function (e) {
    console.log("You clicked CPP");
})

document.getElementById('c').addEventListener('click', function (e) {
    console.log("You clicked C");
})

document.getElementById('cdp').addEventListener('click', function (e) {
    console.log("You clicked C++");
})

document.getElementById('cs').addEventListener('click', function (e) {
    console.log("You clicked C#");
})