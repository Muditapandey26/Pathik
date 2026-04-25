import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NGORoute({ children }) {
  const { user, role } = useAuth();

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in but not an ngo, redirect to home
  if (role !== 'ngo') {
    return <Navigate to="/" replace />;
  }

  // If authenticated and authorized, render the child components (dashboard)
  return children;
}
