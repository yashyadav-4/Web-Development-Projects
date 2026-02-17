import { useNavigate } from "react-router-dom";

export default function LogOut() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear cookie by setting it to expire in the past
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-4 rounded text-sm transition duration-200 ml-4"
        >
            Logout
        </button>
    )
}