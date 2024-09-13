let taskList = [];

function addTask(task) {
  taskList.push(task);
  renderTaskList();
}

function renderTaskList() {
  const taskListElement = document.getElementById('task-list');
  taskListElement.innerHTML = '';
  taskList.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task;
    taskListElement.appendChild(taskElement);
  });
}

document.getElementById('add-task-btn').addEventListener('click', () => {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  if (task) {
    addTask(task);
    taskInput.value = '';
  }
});

renderTaskList();