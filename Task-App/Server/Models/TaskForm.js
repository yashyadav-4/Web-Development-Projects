const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required:true, 
    },
    taskTitle: {
        type: String,
        required: true,
    },
    taskDesc: {
        type: String,
        maxLength: 500,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    priority: {
        type: String,
        default: 'low',
        enum: ['low', 'medium', 'high', 'critical'],
    },
    empName: {
        type: String,
    }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;