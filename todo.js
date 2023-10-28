let inputElement = document.querySelector("#todo-input");
let dateElement = document.querySelector("#todo-date");
let timeElement = document.querySelector("#todo-time");
let btn = document.querySelector(".add-todo-btn");
let errorMsg = document.querySelector("#error-msg");
let bodyElements = document.querySelector(".todo-body");

let todoList = [];

function addTodo() {
  btn.style.backgroundColor = "#252422";
  btn.style.color = "#EB5E28";
  btn.style.border = "2px dashed #EB5E28";
  btn.innerText = "Done";
  setTimeout(() => {
    btn.style.backgroundColor = "#EB5E28";
    btn.style.color = "#252422";
    btn.innerText = "Add";
  }, 1000);

  let todoItem = inputElement.value.toUpperCase();
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;

  if (todoItem === "") {
    btn.style.backgroundColor = "#CCC5B9";
    btn.style.color = "#252422"
    btn.innerText = "Empty";
    btn.style.border = "none";
  } else {
    todoList.push({ item: todoItem, dueDate: todoDate, time: todoTime });
    inputElement.value = "";
    dateElement.value = "";
    timeElement.value = "";
  }

  displayItems();
}

function displayItems() {
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate, time } = todoList[i];

    newHtml += `
        <div>
            <span>${item}</span>
            <span>${dueDate}</span>
            <span>${time}</span>
            <button onclick ="todoList.splice(${i}, 1); displayItems()">❌</button>
        </div>
        `;
  }

  bodyElements.innerHTML = newHtml;
}
