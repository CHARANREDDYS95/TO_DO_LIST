// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to the list
function addTask() {
  const task = todoInput.value;
  if (task.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

// Mark task as completed
function completeTask(event) {
  const listItem = event.target;
  listItem.classList.toggle('completed');
}

// Event listeners
addBtn.addEventListener('click', addTask);
todoList.addEventListener('click', completeTask);
