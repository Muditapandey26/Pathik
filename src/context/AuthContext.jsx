import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  // Mock state: null means not logged in
  const [user, setUser] = useState(null); 
  const [role, setRole] = useState(null); // e.g., 'volunteer', 'ngo'

  // Placeholder login function ready for future Firebase/Backend integration
  const login = (userData) => {
    setUser({ id: 'mock-id-123', name: 'Mock User', ...userData });
    setRole(userData.role || 'volunteer');
  };

  // Placeholder logout function
  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const value = {
    user,
    role,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
