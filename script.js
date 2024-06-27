function saveTasksToLocalStorage() {
    let tasks = [];
    let taskItems = document.querySelectorAll("#taskList li span");

    taskItems.forEach(function(taskItem) {
        tasks.push(taskItem.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTaskToDOM(taskText, taskList) {
    let listItem = document.createElement("li");
    listItem.style.backgroundColor = "white";
    listItem.style.padding = "2%";
    listItem.style.borderRadius = "10px";
    listItem.style.border = "1px solid rgb(26, 95, 243)";
    listItem.style.marginBottom = "1%";
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.justifyContent = "space-between";
    listItem.style.width = "90%";
   
  

    let textContainer = document.createElement("span");
    textContainer.textContent = taskText;
   

    let buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";

    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.style.color = "white";
    doneButton.style.backgroundColor = "green";
    doneButton.style.border = "none";
    doneButton.style.padding = "5px 10px";
    doneButton.style.borderRadius = "5px";
    doneButton.style.cursor = "pointer";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.marginLeft = "10px";

    taskList.appendChild(listItem);
    listItem.appendChild(textContainer);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);

    doneButton.addEventListener("click", function() {
        textContainer.style.textDecoration = "line-through";
        saveTasksToLocalStorage();
    });

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        saveTasksToLocalStorage();
    });
}


function addTask() {
    let maxTasks = 14;
    let maxTaskText = 49;

    let input = document.getElementById("input");
    let taskList = document.getElementById("taskList");

    let taskText = input.value;

    if (input.value === "") {
        alert("Put in a task first");
        return;
    }

    if (taskList.children.length >= maxTasks) {
        alert("Can't add more tasks");
        return;
    }

    if (taskText.length >= maxTaskText) {
        alert("Task can't be more than 48 characters");
        return;
    }

    addTaskToDOM(taskText, taskList);
    saveTasksToLocalStorage();
    input.value = "";
}


window.addEventListener('load', function() {
    let taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(taskText) {
        addTaskToDOM(taskText, taskList);
    });
});
