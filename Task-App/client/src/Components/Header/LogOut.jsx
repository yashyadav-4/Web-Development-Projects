import { useNavigate } from 'react-router-dom'

export default function LogOut() {
    const navigate = useNavigate();
    async function remove(e) {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {
                console.log('log out successful')
            } else {
                console.log('logged out successfully')
            }
            navigate('/login');
        } catch (err) {
            console.error("Login error:", err);
        }
    }
    return (
        <>
            <button onClick={remove}>Log out</button>
        </>
    )
}