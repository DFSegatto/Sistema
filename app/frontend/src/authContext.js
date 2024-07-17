import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Remova qualquer l�gica que persista o token no localStorage
        setIsAuthenticated(false);
    }, []);

    const login = (token) => {
        // N�o salvar o token no localStorage
        setIsAuthenticated(true);
    };

    const logout = () => {
        // N�o remover o token do localStorage
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar o contexto de autentica��o
export const useAuth = () => {
    return useContext(AuthContext);
};
