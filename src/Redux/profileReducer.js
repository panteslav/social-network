import profileAPI from '../APIs/profileAPI';
import usersAPI from '../APIs/usersAPI';
import { toggleFollow } from './usersReducer';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const SET_FOLLOW_STATUS = 'SET_FOLLOW_STATUS';
const TOGGLE_FOLLOW_STATUS = 'TOGGLE_FOLLOW_STATUS';

const initialState = {
    posts: [],
    profileData: null,
    profileStatus: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        //Posts
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: action.body,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }

        //Profile
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.profileData,
            };
        }

        //Status
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            };
        }

        case UPDATE_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            };
        }

        //Follow
        case SET_FOLLOW_STATUS: {
            return {
                ...state,
                followStatus: action.isFollowed,
            };
        }

        case TOGGLE_FOLLOW_STATUS: {
            return {
                ...state,
                followStatus: !state.followStatus,
            };
        }

        default:
            return state;
    }
};

//Posts
export const addPost = (body) => ({ type: ADD_POST, body });

//Profile
export const setUserProfile = (profileData) => ({ type: SET_USER_PROFILE, profileData });

export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const requestUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    };
};

//Status
export const requestProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId).then((response) => {
            if (response.status === 200) {
                dispatch(setProfileStatus(response.data));
            } else console.log('Bad server response.');
        });
    };
};

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.status === 200) {
                dispatch(setProfileStatus(status));
            } else console.log('Bad server response.');
        });
    };
};

//Follow
export const setFollowStatus = (isFollowed) => {
    return {
        type: SET_FOLLOW_STATUS,
        isFollowed,
    };
};

export const requestFollowStatus = (id) => {
    return (dispatch) => {
        profileAPI.getFollowStatus(id).then((response) => {
            if (response.status === 200) {
                dispatch(setFollowStatus(response.data));
            } else console.log('Bad server response.');
        });
    };
};

export const toggleFollowStatus = () => {
    return {
        type: TOGGLE_FOLLOW_STATUS,
    };
};

export const toggleProfileFollow = toggleFollow.bind(null, toggleFollowStatus);

export default profileReducer;
