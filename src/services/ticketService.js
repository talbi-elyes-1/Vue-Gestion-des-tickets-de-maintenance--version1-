import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getTickets = async () => {
    const response = await api.get('/tickets');
    return response.data;
};