import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import useLogout from '../hooks/useLogout';

const NavBar = () => {
  const { loading, logout } = useLogout();
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  // Function to handle login
  const handleLogin = () => {
    // Perform login actions (e.g., authenticate user)
    // For demonstration, let's just update the loggedIn state
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = async () => {
    // Perform logout actions (e.g., clear session, reset state)
    await logout(); // Assuming this handles the logout process
    setLoggedIn(false);
  };

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="logo mb-4 lg:mb-0 ml-20">
          <h1 className="text-2xl font-bold">Book<span className="text-red-500">Store</span></h1>
        </div>
        <div className="menu flex items-center mr-10">
          <ul className="flex flex-col lg:flex-row lg:items-center">
            <NavLink to="/" className="mr-0 lg:mr-6 mb-2 lg:mb-0">Home</NavLink>
            <NavLink to="/books" className="mr-0 lg:mr-6 mb-2 lg:mb-0">Books</NavLink>
            <NavLink to="/addBooks" className="mr-0 lg:mr-6 mb-2 lg:mb-0">Add Books</NavLink>
          </ul>
          {loggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Logout</button>
          ) : (
            <NavLink to="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
