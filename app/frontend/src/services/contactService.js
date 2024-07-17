import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const sendContactMessage = async (contactData) => {
    try {
        const response = await axios.post(`${API_URL}/contact`, contactData);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar a mensagem de contato:', error);
        throw error;
    }
};
