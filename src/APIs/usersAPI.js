import axiosInstance from './common/apiInstance';
import profileAPI from './profileAPI';

const usersAPI = {
    getUsers: (usersOnPageNumber, currentPageNumber) =>
        axiosInstance.get(`users?count=${usersOnPageNumber}&page=${currentPageNumber}`),
    getFriends: () => axiosInstance.get(`users?friend=true`),
    sendToggleFollowRequest: (followed, userId) => {
        const fullEndPoint = 'follow/' + userId;
        return followed ? axiosInstance.delete(fullEndPoint) : axiosInstance.post(fullEndPoint, {});
    },
    getProfile: (userId) => {
        console.warn('Obsolete method at usersAPI.js. Use getProfile from profileAPI.js');
        return profileAPI.getProfile(userId);
    },
};

export default usersAPI;
