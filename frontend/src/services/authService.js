import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (email, senha) => {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data;
};

export const register = async (nome, email, senha) => {
    const response = await axios.post(`${API_URL}/usuarios`, { nome, email, senha });
    return response.data;
};
