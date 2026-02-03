let todoList = [];

function addTodo(inputClassName, inputClassDate) {
  const inputElement = document.querySelector(`.${inputClassName}`);
  const inputValue = inputElement.value;
  const inputDateElement = document.querySelector(`.${inputClassDate}`);
  const inputDateValue = inputDateElement.value;
  if (inputValue === "" || inputDateValue === "") {
    alert("Please enter a todo and a date");
    return;
  }
  console.log("Adding todo:", inputValue, "with date:", inputDateValue);
  todoList.push({ name: inputValue, date: inputDateValue });
  inputElement.value = "";
  inputDateElement.value = "";
  inputElement.focus();
  console.log(todoList);
  renderTodoList();
}

function removeTodo(index) {
  console.log("Removing todo at index:", index);
  todoList.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  // Remove all elements with class="todo-item-remove"
  document.querySelectorAll(".todo-item-remove").forEach((el) => el.remove());
  let todoListElement = document.querySelector(".add-row");
  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
    todoListElement.innerHTML += `
      <div class="todo-item-remove">${todoList[i].name}</div>
      <div class="todo-item-remove">${todoList[i].date}</div>
      <button class="delete-button todo-item-remove" onclick='removeTodo(${i});'>
      Delete
      </button>
      `;
  }
}
