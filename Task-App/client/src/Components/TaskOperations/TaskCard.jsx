import { useState } from 'react';

export const TaskCard = ({ task, index, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const getPriorityColor = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'critical': return 'bg-red-100 text-red-800 border-red-300';
            case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'low': return 'bg-green-100 text-green-800 border-green-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getPriorityBadge = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'critical': return '🔴';
            case 'high': return '🟠';
            case 'medium': return '🟡';
            case 'low': return '🟢';
            default: return '⚪';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onUpdate(task._id, editedTask);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTask({ ...task });
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className="bg-white rounded-lg shadow-md border border-blue-200 p-6">
                <div className="space-y-3">
                    <input
                        type="text"
                        name="taskTitle"
                        value={editedTask.taskTitle}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-lg font-bold"
                        placeholder="Task Title"
                    />
                    <textarea
                        name="taskDesc"
                        value={editedTask.taskDesc}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-sm"
                        placeholder="Description"
                    />
                    <select
                        name="priority"
                        value={editedTask.priority}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-sm"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                    <input
                        type="text"
                        name="empName"
                        value={editedTask.empName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-sm"
                        placeholder="Assigned To"
                    />
                    <div className="flex gap-2 mt-4">
                        <button onClick={handleSave} className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">Save</button>
                        <button onClick={handleCancel} className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-6 overflow-hidden">
            {/* Header with Priority Badge */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex-1 pr-2">{task.taskTitle || 'Untitled Task'}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)} whitespace-nowrap`}>
                    {getPriorityBadge(task.priority)} {task.priority?.charAt(0).toUpperCase() + task.priority?.slice(1)}
                </span>
            </div>

            {/* Description */}
            {task.taskDesc && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.taskDesc}</p>
            )}

            {/* Employee Name */}
            {task.empName && (
                <div className="mb-3 pb-3 border-b border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Assigned To</p>
                    <p className="text-sm font-semibold text-blue-600">{task.empName}</p>
                </div>
            )}

            {/* Dates Section */}
            {(task.startDate || task.endDate) && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {task.startDate && (
                        <div className="bg-gray-50 rounded p-2">
                            <p className="text-xs text-gray-500 uppercase">Start Date</p>
                            <p className="text-sm font-semibold text-gray-700">{new Date(task.startDate).toLocaleDateString()}</p>
                        </div>
                    )}
                    {task.endDate && (
                        <div className="bg-gray-50 rounded p-2">
                            <p className="text-xs text-gray-500 uppercase">End Date</p>
                            <p className="text-sm font-semibold text-gray-700">{new Date(task.endDate).toLocaleDateString()}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
                <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 px-4 rounded-md border border-blue-200 transition duration-200 text-sm"
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(task._id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-4 rounded-md border border-red-200 transition duration-200 text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}