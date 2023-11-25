// const list = document.getElementById('list');
// list.addEventListener('click', function (event) {
//     event.target.style.backgroundColor = "yellow"
// })


document.getElementById('list').addEventListener('click', function (e) {
    if (e.target.matches('li')) {
        if (e.target.innerText === "JavaScript") {
            e.target.style.backgroundColor = "green";
        } else {

            e.target.style.backgroundColor = "yellow";
        }
    }
    // console.log(e.target)
})

// add new element

function addElement() {
    const newLi = document.createElement('li');
    newLi.textContent = "Go";
    document.getElementById('list').appendChild(newLi);
}
