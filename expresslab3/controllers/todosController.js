const fs = require('fs');
const path = require('path');

const todosFileName = 'data-todos.json';

function Todo(id, text) {
  return {id,text };
}
 

  //write todos to file-------------------------------------------------------
function writeTodosToFile(newTodos) {
  fs.writeFileSync(path.join(__dirname, todosFileName), JSON.stringify(newTodos));
}

//read todos----------------------------------------------------------------
function getTodos() {
    const isTodosExist = fs.existsSync(path.join(__dirname, todosFileName));
    if (!isTodosExist) {
      fs.writeFileSync(path.join(__dirname, todosFileName), '[]');
    }
  
    return JSON.parse(fs.readFileSync(path.join(__dirname, todosFileName), 'utf-8'));
  }
  
   //generate id -------------------------------------------------------------
  function generateId() {
      const todos = getTodos();
      if (todos.length < 1) {
        return 1;
      }
      return todos[todos.length - 1].id + 1;
    }
//get todo by id---------------------------------------------------------
function getTodo(id) {
  const todos = getTodos();
 const todo= todos.find((todo) => todo.id === id);
 const arr=[todo];
 return arr;
}
//add todo-----------------------------------------------------------
function addTodo(text) {
 
    const todos = getTodos();
    const todo = Todo(generateId(), text);
    todos.push(todo);
    writeTodosToFile(todos);
    return todos;
  
}
//update-----------------------------------------------
function editToDo(id, newTodoText) {
  
    const todos = getTodos();
    const foundTodo = todos.find((todo) => todo.id === id);

    if (!foundTodo) {
      return undefined;
    }

    foundTodo.text = newTodoText;
    writeTodosToFile(todos);
    return todos;
   
}
//delete-------------------------------------------------
function deleteTodo(id) {
   
    let todos = getTodos();
    const foundTodo = todos.find((todo) => todo.id === id);
    if (!foundTodo) {
      return undefined;
    }
    todos = todos.filter((todo) => todo.id !== id);
    writeTodosToFile(todos);
    return todos;
   
}

module.exports = {
  addTodo, editToDo, deleteTodo, getTodos, getTodo,
};