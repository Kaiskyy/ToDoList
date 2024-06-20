function addTask() {
    let input = document.getElementById("input")
    let taskList = document.getElementById("taskList")

    let taskText = input.value

    if (input.value !== "") {

    let listItem = document.createElement("li")
    
    listItem.style.backgroundColor = "white"
    listItem.style.margin = "5px"
    listItem.style.paddingTop = "2%"
    listItem.style.paddingBottom = "2%"
   listItem.style.borderRadius = "10px"
   listItem.style.marginRight = "40px"
   listItem.style.boxShadow = "1px 1px 4px"
   listItem.style.fontSize = "1.4rem"
 

    listItem.textContent = taskText

    taskList.appendChild(listItem)
 
    input.value = ""

}

else {
    alert("Input a task first!")
}



}