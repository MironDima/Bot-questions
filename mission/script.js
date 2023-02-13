
const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const headerButton = document.querySelector('.header-button')


const toDoData = []
// const toDoDataObj = JSON.parse(localStorage.getItem("toDoData"))
// console.log(JSON.parse(localStorage.getItem("toDoData")));


const render = function(){
	todoList.innerHTML = ''
	todoCompleted.innerHTML = ''
	
	localStorage.setItem('toDoData',JSON.stringify(toDoData))		

	const toDoDataObj = JSON.parse(localStorage.getItem("toDoData"))

	toDoData.forEach(function(item){

	const li = document.createElement('li')
	li.classList.add('todo-item')	
	li.innerHTML = '<span class="text-todo">' + item.text +'</span>' +
	'<div class="todo-buttons">'+
	'<button class="todo-remove"></button>'+
	'<button class="todo-complete"></button>'+
	'</div>'

	if(item.completed){
		todoCompleted.append(li)
	}else{
		todoList.append(li)
	}

	li.querySelector('.todo-complete').addEventListener('click',function(){
		item.completed = !item.completed
		render()
	})

	li.querySelector('.todo-remove').addEventListener('click',function(){
		li.classList.remove('todo-item')
		li.innerHTML = ''
		
	
	})
	})
}



todoControl.addEventListener('submit',function(event){
	event.preventDefault()
	


	const newToDo = {
	text:headerInput.value,   
	completed:false
}
	console.log(headerInput.value === '');
	if(headerInput.value === '' ){
	headerButton.disabled = true
	
	}
	else{
		toDoData.push(newToDo)
		headerInput.value = ''
		render()

		
}
	
})