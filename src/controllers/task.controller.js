const Task = require("../database/models/task.models");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  //create task function
  createTask: async (req, res, next) => {
    try {
      const task = await Task.create({ ...req.body });
      return res.status(201).json({ msg: "successfully added a task", task });
    } catch (error) {
      return next(error);
    }
  },

  //get tasks
  getAllTasks: async (req, res, next) => {
    try {
      const tasks = await Task.find({});
      return res.status(200).json({ data: tasks, number: tasks.length });
    } catch (error) {
      return next(error);
    }
  },

  //get task by Id function
  getTaskById: async (req, res, next) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      //check if task Id is valid
      if (!task) {
        return res.status(404).json({
          message: `No task with id: ${taskId}`
        });
      }
      res.status(200).json({ message: task });
    } catch (error) {
      return next(error);
    }
  },

  //update task by Id function
  updateTaskById: async (req, res, next) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findByIdAndUpdate(taskId, req.body);
      //check if Id is valid
      if (!task) {
        return res.status(404).json({
          message: `No task with id: ${taskId}`
        });
      }
      res.status(200).json({ message: `task successfuly updated` });
    } catch (error) {
      return next(error);
    }
  },

  //Delete task by Id
  deleteTaskById: async (req, res, next) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findByIdAndDelete(taskId);
      //check if Id is a valid
      if (!task) {
        return res.status(404).json({
          message: `No task with id: ${taskId}`
        });
      }
      res.status(200).json({ message: `task successfuly deleted` });
    } catch (error) {
      return next(error);
    }
  }
};
