import axiosInstance from './common/apiInstance';

const authAPI = {
    authMe: () => axiosInstance.get('auth/me'),
    login: (email, password, rememberMe) =>
        axiosInstance.post('auth/login', {
            email,
            password,
            rememberMe,
        }),
    logout: () => axiosInstance.delete('auth/login'),
};

export default authAPI;
