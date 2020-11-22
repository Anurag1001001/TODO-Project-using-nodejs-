//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

// function to create ToDO, if you undefined the delete path from Home.ejs and then try to delete TODO you will see an animation.
// I did this part before storing content to database just uncomment this and see the magic 
function deleteTodo(e) {
  const item = e.target;
  // Deleting Temporarily TODO by adding class fall which sets opacity to 0.  
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement.parentElement;
    item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("fall");
    item.parentElement.previousElementSibling.previousElementSibling.classList.add("fall");
  }
  


  //  marking the completed task
  if (item.classList[0] === "complete-btn") {
    item.parentElement.previousElementSibling.previousElementSibling.classList.toggle("completed");
    // console.log(item.parentElement.previousElementSibling.previousElementSibling);
    // console.log(item.parentElement.previousElementSibling);
  }
}


// function to filter completed, uncompleted and all task
function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function(todo) {
    
    switch (e.target.value) {
      case "all":
        // console.log(todo);
        if(todo.classList == undefined){
          break;
        }
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList == undefined){
          break;
        }

        console.log(todo.firstChild.nextSibling);
        if (todo.firstChild.nextSibling.classList.contains('completed')) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(todo.classList == undefined){
          break;
        }
        if (!todo.firstChild.nextSibling.classList.contains('completed')) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
