const { Task } = require("../models");

const addTodo = async (req, res, next) => {
  try {
    const newToDo = await Task.create(req.body);
    console.log(newToDo);
    res.status(201).json({ newToDo, status: "success" });
  } catch (error) {
    next(error.message);
  }
};

module.exports = addTodo;
