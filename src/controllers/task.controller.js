const Task = require("../database/models/task.models");
const  ObjectId = require('mongoose').Types.ObjectId;


module.exports = {
  //create task function
  createTask: async (req, res) => {
    const task = await Task.create(req.body);
      res.status(201).json({ msg: 'successfully added a task', task });
  },


  //get todos
  getAllTasks: async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks, number: tasks.length });
  },


  //get task by Id function
  getTaskById: async (req, res) => {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      //check if task Id is valid
      if (!task || ObjectId.isValid(taskId) == false) {
      return res.status(404).json({
             message: `No task with id: ${taskId}` 
     });
  }
    res.status(200).json({ message: task });
  },


  //update task by Id function
  updateTaskById: async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate(taskId, req.body);
    //check if Id is valid
    if (!task || ObjectId.isValid(taskId) == false) {
    return res.status(404).json({ 
           message: `No task with id: ${taskId}` 
   });
 } 
    res.status(200).json({ message: `task successfuly updated` });
  },


  //Delete task by Id
  deleteTaskById: async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    //check if Id is a valid
    if (!task || ObjectId.isValid(taskId) == false) {
   return res.status(404).json({
          message: `No task with id: ${taskId}` });
  }
    res.status(200).json({message: `task successfuly deleted`});
  },
};