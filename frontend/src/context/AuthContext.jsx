import React, { createContext, useState } from 'react';

// Create a context object
export const AuthContext = createContext();

// Create a context provider component
export const AuthContextProvider = ({ children }) => {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = () => {
    // Perform login logic (e.g., send login request to backend)
    // Upon successful login, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic (e.g., clear local storage, send logout request to backend)
    // Upon successful logout, set isAuthenticated to false
    setIsAuthenticated(false);
  };

  // Value object to provide to consumers
  const authContextValue = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
