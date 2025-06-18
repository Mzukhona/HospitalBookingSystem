import React from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as necessary
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ({children}) => {

    const isAuthenticated = useAuth().authState.isAuthenticated;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoutes;