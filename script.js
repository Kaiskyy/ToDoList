function addTask() {
    
    let maxTasks = 14
    
    let input = document.getElementById("input")
    let taskList = document.getElementById("taskList")

    let taskText = input.value


    if (input.value === "") {
        alert("Put in a task first!")
        return
     }

     if (taskList.children.length >= maxTasks) {
      alert("Cant add more tasks!")
      return
     }

    let listItem = document.createElement("li")

    listItem.style.backgroundColor = "white";
        listItem.style.padding = "2%";
        listItem.style.borderRadius = "10px";
        listItem.style.border = "2px solid rgb(26, 95, 243)";
        listItem.style.marginBottom = "1%";
        listItem.style.display = "flex"; 
        listItem.style.alignItems = "center"; 
        listItem.style.justifyContent = "space-between"; 
        listItem.style.marginRight  = "2.5%"
        listItem.style.maxWidth = "100%"


       
        let deleteButton = document.createElement("button");

      
        deleteButton.textContent = "Delete";
        deleteButton.style.color = "white";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.marginLeft = "10px";
   

    listItem.textContent = taskText

    taskList.appendChild(listItem)

    listItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", function() {
        listItem.remove()
    })

   
 
    input.value = ""

}





