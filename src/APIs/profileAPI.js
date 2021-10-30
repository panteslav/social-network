import axiosInstance from './common/apiInstance';

const profileAPI = {
    getProfile: (userId) => {
        return axiosInstance.get('profile/' + userId);
    },
    getProfileStatus: (userId) => {
        return axiosInstance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return axiosInstance.put('profile/status', { status: status });
    },
    getFollowStatus: (userId) => {
        return axiosInstance.get('follow/' + userId);
    },
};

export default profileAPI;
