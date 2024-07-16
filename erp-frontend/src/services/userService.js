import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/usuarios/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/usuarios/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    throw error;
  }
};
