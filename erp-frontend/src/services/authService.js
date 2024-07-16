import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};
