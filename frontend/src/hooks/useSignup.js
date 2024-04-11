import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	// console.log(setAuthUser)

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});

			const data = await res.json()
			console.log(data);
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("book-store",JSON.stringify(data));
			window.location.href = "/";
			toast.success(`${username} successfully signed up`)
		} catch (error) {
			toast.error(error.message);
			console.log("Error: error in useSignUp",error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}