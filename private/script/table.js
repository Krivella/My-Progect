"use strict"
let taskContainer = localStorage.getItem("tasks");
let i = 0;
taskContainer = JSON.parse(taskContainer);
for(let item of taskContainer){
  let columnOfTasks = document.querySelector(".task_container");
  let oneTask = document.createElement("div");
  oneTask.classList.add("oneTask")
  oneTask.setAttribute("data-id", i);
  oneTask.innerHTML=`
    <div id = "section" class = "container">
    <h2 class='header' >${item.title}</h2>
    <p class='members'>Участники:<br>${item.members}</p>
    </div>
    <div>
    <p class="description">${item.description}</p>
    <div class='time'>
    <p>Выполнить к: </p>
    <p>${item.date}</p>
     </div>
     <div class="email">
    <p>Email заказчика </p>
    <p>${item.email}</p>
    </div>
    </div>`;
  columnOfTasks.append(oneTask)
  oneTask.addEventListener("click", function(){
      if(!(this.classList.contains ( "task_selected"))){
        this.classList.add("task_selected");
      }else{
        this.classList.remove("task_selected");
    }
  });
  i++;

}

let button = document.querySelector(".button_delete");
button.addEventListener("click", function(){
  let focus=document.querySelectorAll(".task_selected");
  for(let section of focus){
    let number= parseInt(section.getAttribute("data-id"));
    taskContainer.splice(number, 1);
    section.remove();
  }
  localStorage.setItem("tasks", JSON.stringify(taskContainer))
})