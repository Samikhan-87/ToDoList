const input = document.querySelector(".input");
const add = document.querySelector(".add");
const tasksDiv = document.querySelector(".tasks");
const searchInput = document.querySelector(".search");


function addTask() {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.textContent = taskText;
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "del";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      taskDiv.remove();
    });
    taskDiv.appendChild(deleteBtn);
    tasksDiv.appendChild(taskDiv);
    input.value = ""; 
  }
}


add.addEventListener("click", addTask);

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

searchInput.addEventListener("input", function() {
    const searchOption = searchInput.value.toLowerCase().trim();
    const tasks = tasksDiv.querySelectorAll(".task");
    tasks.forEach(task => {
      const taskText = task.textContent.toLowerCase();
      if (taskText.includes(searchOption)) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  });
  