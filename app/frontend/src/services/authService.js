import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Função de login
export const login = async (email, senha) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, senha });
        return response.data; // Supondo que a API retorna o token
    } catch (error) {
        throw new Error('Credenciais inválidas');
    }
};

// Função de registro
export const register = async (nome, email, senha) => {
    try {
        const response = await axios.post(`${API_URL}/usuarios`, { nome, email, senha });
        return response.data; // Supondo que a API retorna o usuário criado
    } catch (error) {
        throw new Error('Erro ao registrar usuário');
    }
};
