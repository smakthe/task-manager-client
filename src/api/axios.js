import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-manager-api-ctij.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
