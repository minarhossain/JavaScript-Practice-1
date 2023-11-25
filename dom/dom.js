// Window
// document
// HTML(Head, Body)

// Head (title, meta, link, style, script)
// title (text node)
// meta (attribute)
// Body (Header, Main, Footer) (div->> attribute, h1, h2, h3)


// console.log(document.body)

// document.getElementById("heading").innerHTML = "<h1> Hello World </h1> "

// const show = document.getElementById("title").id
// const show = document.getElementById("title").classList
// const show = document.getElementById("title").className
// const show = document.getElementById("title").getAttribute
// const show = document.getElementById("title").getAttribute("id")
// const show = document.getElementById("title").getAttribute("class")
// const show = document.getElementById("title").setAttribute("class", "test")
// let show = document.getElementById("title").setAttribute("class", "test heading")
//! style
// const title = document.getElementById("title");
// title.style.backgroundColor = "green";
// title.style.borderRadius = "10px";
// title.style.padding = "8px";
// console.log(title)

// console.log(title.innerHTML)
// console.log(title.innerText)
// console.log(title.textContent)

//! innerText and innerContext

// console.log(title.innerText); /// ignore the css style display none
// console.log(title.textContent); // show the css style display none that means show all html text in the line


// const querySelector = document.querySelector(".heading");
// const querySelector = document.querySelector("#title");
// const querySelector = document.querySelector("input[type='text']");
// const p = document.querySelector("p");
// const p1 = document.querySelector("p:first-child");

// console.log(querySelector)
// const ul = document.querySelector("ul");
// const li = ul.querySelector('li')
// li.style.backgroundColor = "green";
// li.innerText = "love"

// console.log(li)


// const all = document.querySelectorAll("li");
// all[0].style.backgroundColor = "green";
// all[1].style.backgroundColor = "blue";
// all[2].style.backgroundColor = "tomato";
// console.log(all)

// const list = document.getElementsByClassName("list-item"); // HTML Collection
// convert in array
// const listConvert = Array.from(list);
// console.log(listConvert);

// console.log(list[0])


//! How to create new Element in DOM

const parent = document.querySelector(".parent");
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].textContent);
//     console.log(parent.children[i].innerHTML);
//     console.log(parent.children[i].innerText);
// }
// console.log(parent.children) // Array Like element
// console.log(parent.children[0])
// console.log(parent.children[1].innerHTML)

// parent.children[0].style.backgroundColor = "green";
// parent.children[0].style.borderRadius = "8px";
// parent.children[0].style.padding = "8px";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);


const dayOne = document.querySelector(".day");
// console.log(dayOne);
console.log("Node List:", parent.childNodes)