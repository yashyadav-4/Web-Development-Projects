import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import { Header } from './Components/Header/Header'
import { TaskForm } from './Components/TaskOperations/TaskForm';
import { TaskList } from './Components/TaskOperations/TaskList';

function App() {
  const username = "Yash";
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);

  const handleAuthError = (response) => {
    if (response.status === 401) {
      navigate('/login');
      return true;
    }
    return false;
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      if (handleAuthError(response)) return;

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

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE'
      });
      if (handleAuthError(response)) return;

      if (response.ok) {
        fetchTasks();
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (handleAuthError(response)) return;

      if (response.ok) {
        fetchTasks();
      } else {
        const errorData = await response.json();
        console.error('Failed to update task:', errorData.message || response.statusText);
      }
    } catch (error) {
      console.error("error updating task ", error);
    }
  }

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
      if (handleAuthError(response)) return;

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
      <TaskList taskList={taskList} onDelete={deleteTask} onUpdate={updateTask} />
    </>
  )
}

export default App