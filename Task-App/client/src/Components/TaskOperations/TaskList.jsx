import { TaskCard } from "./TaskCard"

export const TaskList = ({ taskList, onDelete }) => {
    return (
        <div className="bg-gray-100 py-8 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Task List</h2>
                    <p className="text-gray-600">Total Tasks: <span className="font-semibold text-blue-600">{taskList.length}</span></p>
                </div>

                {taskList.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-200">
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l4-4m0 0l1.6 1.6a1 1 0 11-1.414 1.414L9 14" />
                        </svg>
                        <p className="text-gray-500 text-lg">No tasks yet. Create one to get started!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            taskList.map((task, index) => (
                                <TaskCard key={index} task={task} index={index} onDelete={onDelete} />
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}