const { Schema, model } = require("mongoose");

const toDoSchema = Schema({
  task: {
    type: String,
    required: [true, "Set your toDo"],
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

const Task = model("todos", toDoSchema);

module.exports = Task;
