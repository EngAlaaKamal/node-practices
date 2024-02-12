const router = require("express").Router();
const {
  addTodo,
  editToDo,
  deleteTodo,
  getTodos,
  getTodo,
} = require("../controllers/todosController");
const { validateTodoInput, validateTodoId } = require("../models/todosModel");
//-----------------------------------------------------

//Get all todos
router.get("/", (req, res) => {
  res.status(200);
  res.render("index.ejs", { todos: getTodos() });
});

//Get a single todo
router.get("/:id", validateTodoId, (req, res) => {
  const todoid = parseInt(req.params.id);
  console.log(todoid);
  res.render("index.ejs", { todos: getTodo(todoid) });
});

//post a new todo
router.post("/", validateTodoInput, (req, res) => {
  const { text } = req.body;
  res.render("index.ejs", { todos: addTodo(text) });
});

//Delete a todo

router.delete("/:id", validateTodoId, (req, res) => {
  const todoid = parseInt(req.params.id);
  const updatedTodos = deleteTodo(todoid);

  if (!updatedTodos) {
    res.status(404).send("Todo not found");
  } else {
    res.render("index.ejs", { todos: updatedTodos });
  }
});

//Update a todo
router.patch("/:id", validateTodoInput, validateTodoId, (req, res) => {
  const todoid = parseInt(req.params.id);
  const { text } = req.body;
  const updatedTodos = editToDo(todoid, text);

  if (updatedTodos === undefined) {
    res.status(404).send("Todo not found");
  } else {
    res.render("index.ejs", { todos: updatedTodos });
  }
});

module.exports = router;
