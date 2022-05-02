const express = require("express");
const router = express.Router();

const addTodo = require("../../controllers/addTodo");
const getTodos = require("../../controllers/getTodos");
const completeTodo = require("../../controllers/completeTodo");
const deleteToDo = require("../../controllers/deleteToDo");

router.get("/", getTodos);

router.post("/", addTodo);

router.delete("/:toDoId", deleteToDo);

router.put("/:toDoId", completeTodo);

module.exports = router;
