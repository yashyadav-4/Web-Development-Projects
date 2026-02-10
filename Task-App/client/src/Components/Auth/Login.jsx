

export default function Login(){
    return (
        <>
            <div>
                <h2>Welcome Back</h2>
                <form >
                    <label htmlFor="">Email</label>
                    <input 
                        type="text"
                        required
                        name="email"
                        placeholder="Enter your Email"
                    />
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        required
                        name="password"
                        placeholder="Enter your password"
                    />
                    <button >submit</button>
                </form>
            </div>
        </>
    )
}