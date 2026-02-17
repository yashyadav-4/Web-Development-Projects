
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/task',
        element: <App />
    }
])

export default router;