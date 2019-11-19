
  const submit = document.querySelectorAll("input")[1]
  const inputField = document.getElementById("new-task-description")
  const list = document.getElementById("tasks")
  const form = document.querySelector("form")
  
document.addEventListener("DOMContentLoaded", () => {

  const priority = ["high", "medium", "low"]
  const dropdown = document.createElement("SELECT")
  dropdown.id = "dropdown"
  const option = document.createElement("option")
  form.append(dropdown)

  for (let i = 0; i < priority.length; i++){
    let option = document.createElement("option")
    option.value = priority[i]
    option.text = priority[i]
    dropdown.appendChild(option)
  }


  submit.addEventListener("click", function(event){
    event.preventDefault()
    addTask()
  })
  
  function addTask() {
    const importance = document.getElementById("dropdown")
    const text = inputField.value
    if (text !== ""){

    const task = document.createElement("li")
    const deleteButton = document.createElement("button")
    const randomID = Math.floor(Math.random() * 10000)
    task.textContent = text
    task.id = randomID
    deleteButton.id = randomID
    if (importance.value == "high"){
      task.style.color = "red"
    } else if (importance.value == "medium") {
      task.style.color = "orange"
    } else if (importance.value == "low") {
      task.style.color = "green"
    }

    list.appendChild(task)

  
    deleteButton.textContent = "X"
    task.appendChild(deleteButton)
    inputField.value = ""
    }
  }

  list.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
      if (isButton) {
        const id = event.target.id
        const taskAndButton = document.getElementById(`${id}`)
        taskAndButton.remove()
      }
  })

})
