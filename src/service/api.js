import axios from 'axios';

const api = axios.create({
    baseUrl: '​https://viacep.com.br/ws/'
});

export default api;