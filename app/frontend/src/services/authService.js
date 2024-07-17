import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Fun��o de login
export const login = async (email, senha) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, senha });
        return response.data; // Supondo que a API retorna o token
    } catch (error) {
        throw new Error('Credenciais inv�lidas');
    }
};

// Fun��o de registro
export const register = async (nome, email, senha) => {
    try {
        const response = await axios.post(`${API_URL}/usuarios`, { nome, email, senha });
        return response.data; // Supondo que a API retorna o usu�rio criado
    } catch (error) {
        throw new Error('Erro ao registrar usu�rio');
    }
};
