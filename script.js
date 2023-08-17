// Todo List Scripting Code
// Rohit Kumar Pal , Web Developer Intern At LetsGrow More
// Starting Here
"use strict";

let input = document.getElementById("input"); // Taking Input Bar
let add = document.getElementById("addbtn"); // Taking Add Button
let clearAll = document.getElementById("clrbtn"); // Taking Clear Button

add.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `<h3 style="display: inline-block;">${input.value}</h3>
    <button id="listDelete"">x</button>
    <br>`;
    document.getElementById("orderedList").appendChild(li);
    input.value = "";
});
