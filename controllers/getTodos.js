const { Task } = require("../models");

const getTodos = async (req, res, next) => {
  try {
    const toDos = await Task.find({});
    console.log(toDos);
    res.status(200).json({ toDos, status: "success" });
  } catch (error) {
    next(error.message);
  }
};

module.exports = getTodos;
