const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todo: String,
    description: String
});

const Task = mongoose.model('task',TaskSchema);
module.exports = Task;