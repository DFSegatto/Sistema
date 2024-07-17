import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/usuarios`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/usuarios`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/usuarios/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${API_URL}/usuarios/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/usuarios/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
