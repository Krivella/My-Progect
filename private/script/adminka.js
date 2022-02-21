"use strict"



let toDoList = document.forms.toDoList;
toDoList.elements.taskName.addEventListener('input', function(){

 if (taskName.validity.tooShort){
 	this.nextElementSibling.innerText = 'Количество символов от 3 до 20'
 }else if(taskName.validity.tooLong){
 	this.nextElementSibling.innerText='Количество символов от 3 до 20'
 }else this.nextElementSibling.innerText= ' '
 taskName.nextElementSibling.innerText.classList.add("message")
 
});

toDoList.elements.taskDescription.addEventListener('input', function(){

 if (taskDescription.validity.tooShort){
 	this.nextElementSibling.innerText = 'Минимум 5 символов'
 }else this.nextElementSibling.innerText= ' '
taskDescription.nextElementSibling.innerText.classList.add("message")
});



toDoList.elements.timeForTask.addEventListener('input', function(){
let today = new Date();
let inputDate = toDoList.elements.timeForTask.value;
let inputDateObj = new Date(inputDate);
	if(inputDateObj.getTime()<today.getTime()){
		timeForTask.nextElementSibling.innerText = 'Дата не должна быть в прошлом'
	}else timeForTask.nextElementSibling.innerText= " "
	timeForTask.nextElementSibling.innerText.classList.add("message")
	 
})


let button = document.getElementById("getSomePeople")
button.addEventListener("click", function(){
let buttonDiv = document.getElementById("firstButton")
if(buttonDiv.children.length<6){
	let div= document.createElement('div');
	let newWorker = document.createElement('div');
	newWorker.innerHTML = `
	<input id="somePeople" type="text" class="add" name="somePeople" placeholder="Добавить участника">`
	let removePeople = document.createElement("button")
	removePeople.innerText = 'X';
	removePeople.classList.add("remove")
	div.append(newWorker, removePeople);
	removePeople.addEventListener("click", function(){
		div.remove()
		//removePeople.remove(newWorker)
	})
buttonDiv.append(div)
}
})

toDoList = document.getElementsByName("toDoList")[0]
toDoList.addEventListener("submit", function(event){
	console.log(event.target)
	event.preventDefault();
	if(taskName.validity.valid && timeForTask.validity.valid){
		toDoList.nextElementSibling.innerText = "Объект успешно добавлен"
	}else toDoList.nextElementSibling.innerText = "Заполните поля со звездой"
	let somePeopls = [];
	let somePeople = document.getElementsByName("somePeople")
	for (let man of somePeople){
        somePeopls.push(man.value)
    }
	//let taskContainer = localStorage.getItem("tasks");
	//if (taskContainer!==undefined){taskContainer = JSON.parse(taskContainer)};
	let taskEmail = document.getElementsByName("taskEmail")[0]
	let last = localStorage.getItem("tasks");
	let tasks;
	if(last) 
		tasks = JSON.parse(last);
	else
		tasks = [];
	let storage = {
		title: taskName.value,
		description: taskDescription.value,
		date: timeForTask.value,
		email: taskEmail.value,
		members: somePeopls
	};
	tasks.push(storage);

		localStorage.setItem("tasks", JSON.stringify(tasks))

	
})


