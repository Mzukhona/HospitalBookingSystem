import React from 'react';
import { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({children}) => {
    const [authState, setAuthState] = React.useState({
        isAuthenticated: false,
        user: null,
    });
    const login = (user) => {
        setAuthState({ isAuthenticated: true, user });
    };
    const logout = () => {
        setAuthState({ isAuthenticated: false, user: null });       
    }
    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider ;

