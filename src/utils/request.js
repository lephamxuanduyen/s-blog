import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 60000,
});

request.interceptors.request.use(
    axiosConfig => axiosConfig,
    error => Promise.reject(error),
);

request.interceptors.response.use(
    response => response,
    async error => {
        if (error?.response?.status === 401) {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    },
);

export default request;