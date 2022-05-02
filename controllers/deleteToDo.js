const { Task } = require("../models");

const deleteToDo = async (req, res, next) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const removedTransaction = await Task.findByIdAndRemove(req.params.toDoId);
    if (!removedTransaction) {
      res.status(404).json({ message: "No such transaction" });
    }
    res.status(200).json({ message: "successfully removed" });
  } catch (error) {
    next(error.message);
  }
};

module.exports = deleteToDo;
