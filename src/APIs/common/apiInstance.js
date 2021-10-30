import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '00f20d53-e6de-4b2c-8d06-5e5dc617fb9c' },
});

export default axiosInstance;
