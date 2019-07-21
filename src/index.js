document.addEventListener("DOMContentLoaded", () => {
  });

const tasks = document.getElementById("tasks")
const todoButton = document.getElementById("create-a-task")
                            .addEventListener('click', event => event.preventDefault())
//linked in the html 
function handleClick(){
  const todoContent = document.getElementById("new-task-description").value
  createTask(todoContent)
  document.getElementById("create-task-form").reset()
}

function createTask(string) {
  const task = document.createElement('li')
  task.innerText = string
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener('click', event => event.target.parentNode.remove())
  tasks.appendChild(task)
  task.appendChild(deleteButton)
}

function deleteTask() {
  const target = document.getElementById("task")
  tasks.removeChild(target)
}