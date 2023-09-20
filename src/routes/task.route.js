const route = require('express').Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
} = require("../controllers/task.controller")

route.post('/task', createTask); // 
route.get('/tasks', getAllTasks);
route.get('/task/:id', getTaskById);
route.patch('/task/:id', updateTaskById);
route.delete('/task/:id', deleteTaskById);

  
module.exports = route;