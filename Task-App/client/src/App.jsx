import { useState, useEffect } from 'react';
import './App.css'
import { Header } from './Components/Header/Header'
import { TaskForm } from './Components/TaskOperations/TaskForm';
import { TaskList } from './Components/TaskOperations/TaskList';

function App() {
  const username = "Yash";

  const [taskList, setTaskList] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      if (response.ok) {
        const data = await response.json();
        setTaskList(data);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        fetchTasks();
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  return (
    <>
      <Header username={username} />
      <TaskForm onAdd={addTask} />
      <TaskList taskList={taskList} />
    </>
  )
}

export default App