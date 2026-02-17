const Task = require('../Models/TaskForm');


async function handleTaskAdd(req, res) {
    try {
        
        const { taskTitle, taskDesc, startDate, endDate, priority, empName } = req.body;
        await Task.create({ taskTitle, taskDesc, startDate, endDate, priority, empName , createdBy:req.user._id})
        return res.status(201).json({ message: "Task added succesfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleTaskFetch(req, res) {
    try {
        const allTasks = await Task.find({createdBy:req.user._id});
        res.status(200).json(allTasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleDeleteTask(req, res) {
    try {
        const { id } = req.params;
        const deletedTask= await Task.findByIdAndDelete(id);
        if(!deletedTask){
            return res.status(404).json({message:"Task not FOund"});
        }
        return res.status(200).json({ message: "successfully deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleUpdateTask(req , res){
    try{
        const {id}= req.params;
        const updatedData= req.body;
        console.log('reached backend');
        const updatedTask= await Task.findByIdAndUpdate(id , updatedData, {returnDocument:'after'}) ;
        if(!updatedTask){
            return res.status(404).json({message:"Task cant be updated"});
        }
        return res.status(200).json({message:"Successfully updated"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    handleTaskAdd,
    handleTaskFetch,
    handleDeleteTask,
    handleUpdateTask,
    
};


