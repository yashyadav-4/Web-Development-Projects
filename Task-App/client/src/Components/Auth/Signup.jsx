import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup successful", data);
                navigate('/login'); // Redirect to login after successful signup
            } else {
                setError(data.message || "Signup failed");
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFBFC] font-sans">
            <div className="bg-white p-8 rounded-sm shadow-md w-full max-w-[400px] border border-gray-200">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#172B4D]">Sign up for an account</h1>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-sm text-sm mb-4 border border-red-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-gray-200 rounded-sm focus:border-[#0052CC] focus:outline-none transition-colors text-[#172B4D] placeholder-gray-400 text-sm"
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-gray-200 rounded-sm focus:border-[#0052CC] focus:outline-none transition-colors text-[#172B4D] placeholder-gray-400 text-sm"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Create password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border-2 border-gray-200 rounded-sm focus:border-[#0052CC] focus:outline-none transition-colors text-[#172B4D] placeholder-gray-400 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0052CC] hover:bg-[#0065FF] text-white font-bold py-2 px-4 rounded-sm transition-colors duration-200"
                    >
                        Sign up
                    </button>
                </form>

                <div className="mt-6 text-center text-sm border-t border-gray-200 pt-4">
                    <Link to="/login" className="text-[#0052CC] hover:underline">
                        Already have an account? Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}