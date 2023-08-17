// Todo List Scripting Code
// Rohit Kumar Pal , Web Developer Intern At LetsGrow More
// Starting Here
"use strict";

let input = document.getElementById("input"); // Taking Input Bar
let add = document.getElementById("addbtn"); // Taking Add Button
let clearAll = document.getElementById("clrbtn"); // Taking Clear Button

// Add button for add iung further Todos for list
add.addEventListener("click", (event) => {
  if (input.value === "") {
    alert("Not a Valid Input, Please provide valid Input here.");
  } else {
    event.preventDefault();
    let li = document.createElement("li");
    li.innerHTML = `<h3 style="display: inline-block;">${input.value}</h3>
    <button id="listDelete" onclick="removeList(this)">x</button>
    <br>`;
    document.getElementById("orderedList").appendChild(li);
    input.value = "";
  }
});

// clear button to remove all item of list
clearAll.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("orderedList").innerHTML = "";
  input.value = "";

  let ol = document.getElementById("orderedList");
  if (ol.children.length <= 0) {
    let h3 = document.createElement("h3");
    h3.classList.add("emp1");
    h3.innerText = `Insert Todo Here`;
    ol.appendChild(h3);
  }
});

// Remove button of lists
function removeList(e) {
  e.parentElement.remove();
  let ol = document.getElementById("orderedList");
  if (ol.children.length <= 0) {
    let h3 = document.createElement("h3");
    h3.classList.add("emp1");
    h3.innerText = `Insert Todo Here`;
    ol.appendChild(h3);
  }
}
