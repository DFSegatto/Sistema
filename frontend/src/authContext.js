import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Remova qualquer lógica que persista o token no localStorage
        setIsAuthenticated(false);
    }, []);

    const login = (token) => {
        // Não salvar o token no localStorage
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Não remover o token do localStorage
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
    return useContext(AuthContext);
};
