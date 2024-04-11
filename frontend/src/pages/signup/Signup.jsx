import { NavLink } from "react-router-dom";
import GenderSelect from "./GenderSelect";
import { useState } from "react";
import toast from "react-hot-toast";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
		if (inputs.username.trim() === '') {
			// Display error message or prevent form submission
			// For example, you can display an error message to the user
			// and prevent the form from being submitted
			toast.error("Username can't be empty")
			return;
		}
		await signup(inputs);
        setInputs("");
        // Add your signup logic here
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-white'>
                <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className='block text-gray-700'>Full Name</label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700'>Username</label>
                        <input
                            type='text'
                            placeholder='johndoe'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='block text-gray-700'>Confirm Password</label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderSelect onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <NavLink
                        to={"/login"}
                        className='text-sm text-blue-600 hover:underline'
                    >
                        Already have an account? Login
                    </NavLink>

                    <button className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' disabled={loading}>
                        {loading ? <span className='loading loading-spinner text-white'></span> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
