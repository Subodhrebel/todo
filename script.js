const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.innerHTML += '<button class="delete-btn">Delete</button>';
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.parentNode;
        taskItem.remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
