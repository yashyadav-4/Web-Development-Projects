const Task = require('../Models/TaskForm');

async function handleTaskAdd(req, res) {
    try {
        const { taskTitle, taskDesc, startDate, endDate, priority, empName } = req.body;

        await Task.create({
            taskTitle, taskDesc, startDate, endDate, priority, empName
        })
        return res.status(201).json({ message: "Task Added succesfully" });
    } catch (error) {
        console.error("Error adding task:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function handleTaskFetch(req, res) {
    try {
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    handleTaskAdd,
    handleTaskFetch
};
