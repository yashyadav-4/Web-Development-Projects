import { useState } from "react"

export const TaskForm = ({ onAdd }) => {
    const [taskObj, setTaskObj] = useState({
        taskId: 0,
        taskTitle: "",
        taskDesc: "",
        startDate: "",
        endDate: "",
        priority: "low",
        empName: "John"
    });

    const taskChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setTaskObj({ ...taskObj, [key]: value });
    }

    const addTaskHandler = (event) => {
        event.preventDefault();
        onAdd(taskObj);
        setTaskObj({
            taskId: 0,
            taskTitle: "",
            taskDesc: "",
            startDate: "",
            endDate: "",
            priority: "low",
            empName: "John"
        });
    }

    const [isCustomEmp, setIsCustomEmp] = useState(false);

    const handleEmpSelectChange = (e) => {
        const value = e.target.value;
        if (value === "Other") {
            setIsCustomEmp(true);
            setTaskObj({ ...taskObj, empName: "" });
        } else {
            setIsCustomEmp(false);
            setTaskObj({ ...taskObj, empName: value });
        }
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Task</h2>
                <form onSubmit={addTaskHandler} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    {/* Task Title */}
                    <div className="mb-5">
                        <label htmlFor="taskTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                            Task Title
                        </label>
                        <input
                            id="taskTitle"
                            type="text"
                            placeholder="Enter task title"
                            name="taskTitle"
                            value={taskObj.taskTitle}
                            onChange={taskChangeHandler}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                            required
                        />
                    </div>

                    {/* Task Description */}
                    <div className="mb-5">
                        <label htmlFor="taskDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                            Task Description
                        </label>
                        <textarea
                            id="taskDescription"
                            placeholder="Enter detailed task description"
                            name="taskDesc"
                            value={taskObj.taskDesc}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                            rows="4"
                            onChange={taskChangeHandler}
                        />
                    </div>

                    {/* Employee Name */}
                    <div className="mb-5">
                        <label htmlFor="employeeName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Employee Name
                        </label>
                        <div className="flex gap-2">
                            <select
                                id="employeeName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                                onChange={handleEmpSelectChange}
                                name="empName"
                                value={isCustomEmp ? "Other" : taskObj.empName}
                            >
                                <option value="John">John</option>
                                <option value="Max">Max</option>
                                <option value="Smith">Smith</option>
                                <option value="Alex">Alex</option>
                                <option value="Other">Other</option>
                            </select>
                            {isCustomEmp && (
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="empName"
                                    value={taskObj.empName}
                                    onChange={taskChangeHandler}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                                    required
                                    autoFocus
                                />
                            )}
                        </div>
                    </div>

                    {/* Grid for Dates and Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                        {/* Start Date */}
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                Start Date
                            </label>
                            <input
                                id="startDate"
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                                onChange={taskChangeHandler}
                                name="startDate"
                                value={taskObj.startDate}
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                End Date
                            </label>
                            <input
                                id="endDate"
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                                onChange={taskChangeHandler}
                                name="endDate"
                                value={taskObj.endDate}
                            />
                        </div>

                        {/* Priority */}
                        <div>
                            <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
                                Priority
                            </label>
                            <select
                                id="priority"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                                onChange={taskChangeHandler}
                                name="priority"
                                value={taskObj.priority}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-md transition duration-200 transform hover:scale-105 shadow-md"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}