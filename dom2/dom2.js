const div = document.createElement('div');
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "Dom Learning");
div.style.backgroundColor = "green";
div.style.padding = "12px";
div.style.borderRadius = "12px"
div.innerText = "DOM Learning";
const addText = document.createTextNode("Hello World");
div.appendChild(addText)
document.body.appendChild(div);

//! +++++++++++++++++++++++++++ Edit and remove element in DOM========================

// function addLanguage(langName) {
//     let li = document.createElement('li');
//     li.innerHTML = `${langName}`;
//     document.querySelector('.language').appendChild(li);
// }
// addLanguage('Python')
// addLanguage('TypeScript')


function addOptimizeLanguage(languageName) {
    const li = document.createElement('li');
    // const addText = document.createTextNode(languageName)
    // li.appendChild(addText);
    li.appendChild(document.createTextNode(languageName));
    document.querySelector('.language').appendChild(li);
}
addOptimizeLanguage("Python");
addOptimizeLanguage("Go");

//! ++++++++ Edit +++++++++++

document.querySelector("li:nth-child(1)").style.backgroundColor = "green";
const secondLanguage = document.querySelector("li:nth-child(2)");
// secondLanguage.innerHTML = "Lolo";

const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLanguage.replaceWith(newLi);

//! ++++++++ edit +++++++++++

const firstLanguage = document.querySelector("li:first-child");
firstLanguage.outerHTML = '<li>TypeScript</li>';

//! remove

const lastLanguage = document.querySelector("li:last-child");
lastLanguage.remove();