import axios from 'axios';
import router from "../../router";

export const httpClient = axios.create({
    baseURL: 'https://4260-37-170-120-65.ngrok-free.app/',
    timeout: 5000,
});

httpClient.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        router.push({ name: 'Login' });
    }

    return config;
}, error => {
    return Promise.reject(error);
});


httpClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {

            localStorage.removeItem('accessToken');
            router.push({ name: 'Login' });

            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);