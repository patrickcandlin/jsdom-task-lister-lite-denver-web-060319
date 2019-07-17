document.addEventListener("DOMContentLoaded", () => {
  
  
});

const tasks = document.getElementById("tasks")
const todoButton = document.getElementById("create-a-task").addEventListener('click', function(event){
  event.preventDefault()
})
// const click = document.getElementByID("").addEventListener('click', deleteTask)

function handleClick(){
  let todoContent = document.getElementById("new-task-description").value
  todoButton
  createTask(todoContent)
}

function createTask(string) {
  const task = document.createElement('li')
  task.id = 'task'
  const deleteButton = document.createElement('button')
  deleteButton.id = "delete-task"
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener('click', deleteTask)
  deleteButton.onclick = "deleteTask()"
  task.innerText = string
  tasks.appendChild(task)
  task.appendChild(deleteButton)
}

function deleteTask() {
  console.log('hello')
  const target = document.getElementById("task")
  tasks.removeChild(target)
  
}