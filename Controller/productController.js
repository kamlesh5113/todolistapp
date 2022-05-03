const Task = require('../Model/Product');


const createtask = async (req, res) => {
    const task = new Task({
        todo: req.body.title,
        description: req.body.desc
    })
    try {
        const savedtask = await task.save();
        res.send(savedtask);
        console.log("Inserted");
    } catch (error) {
        res.send("Something went Wroung,No insertion done");
        res.status(400).send(error);
    }
};

const gettask = async (req, res) => {
    try {
        const task = await Task.find();
        res.json(task);
    }
    catch (error) {
        res.json({ message: "No data found" });
    }
};

const updatetask = async (req, res) => {
    try {
        const tasks = {
            todo: req.body.title,
            description: req.body.desc
        };
        const updatetodo = await Task.findByIdAndUpdate(req.params.id, tasks);
        console.log("done");
    } catch (err) {
        console.log("NO Updation done");
    }
}

const deletetodo = async (req, res) => {
    try {
        const removetask = await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Successfully Deleted" });
        console.log("Deleted")
    } catch (error) {
        console.log("Error");
        res.json({ message: "Not Deleted" });
    }
}
module.exports = {
    createtask, gettask, updatetask, deletetodo
}