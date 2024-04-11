import { useState } from "react";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md'>
                <h1 className='mb-8 text-3xl font-semibold text-center text-gray-800'>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="username" className='block mb-2 text-sm text-gray-800'>Username</label>
                        <input
                            id="username"
                            type='text'
                            placeholder='Enter username'
                            className='w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className='block mb-2 text-sm text-gray-800'>Password</label>
                        <input
                            id="password"
                            type='password'
                            placeholder='Enter Password'
                            className='w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4 text-sm text-gray-800">
                        <NavLink to='/signup' className='hover:underline'>{"Don't"} have an account?</NavLink>
                    </div>

                    <button className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600' disabled={loading}>
                        {loading ? <span className='loading-spinner'></span> : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
