const { Task } = require("../models");

const completeTodo = async (req, res, next) => {
  try {
    const { toDoId } = req.params;
    console.log(req.body);
    console.log(req.params);

    const result = await Task.findByIdAndUpdate(toDoId, req.body, {
      new: true,
    });
    if (!result) {
      res.status(404).json({ message: `Not found` });
    }
    res.json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = completeTodo;
