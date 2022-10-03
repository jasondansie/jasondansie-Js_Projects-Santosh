
const ul = document.querySelector("ul");


let todoList = localStorage.add("items") ? JSON.parse(localStorage.getItem("items")) : [];

//list of items and append to html

const listMaker = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}