const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// 🧠 Load tasks from Local Storage
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(taskText => createTask(taskText));
});

function createTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", li.firstChild.textContent);
    if (newTask) {
      li.firstChild.textContent = newTask;
      updateLocalStorage();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateLocalStorage();
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText);
  updateLocalStorage();
  taskInput.value = "";
});

function updateLocalStorage() {
  const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// ✅ Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach((task) => {
    tasks.push(task.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Load tasks from localStorage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    storedTasks.forEach((task) => addTask(task));
  }
}

// ✅ Modify addTask to call saveTasks()
function addTask(taskText) {
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", () => {
    span.style.textDecoration = "line-through";
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";

  saveTasks(); // ✅ Save after every new task
}

// ✅ Load tasks when page opens
window.addEventListener("DOMContentLoaded", loadTasks);

