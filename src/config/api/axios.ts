import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'https://3a4f-37-170-120-65.ngrok-free.app/',
    timeout: 5000,
});