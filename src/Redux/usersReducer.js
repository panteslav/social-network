import usersAPI from '../APIs/usersAPI';

const NUM_OF_USERS_TO_DISPLAY = 5;
const TOGGLE_FOLLOW_ACTION_TYPE = 'TOGGLE_FOLLOW_ACTION_TYPE';
const SET_USERS_ACTION_TYPE = 'SET_USERS_ACTION_TYPE';
const SET_FRIENDS = 'SET_FREINDS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING_STATUS_AC = 'TOGGLE_FETCHING_STATUS_AC';
const ADD_ID_TO_TOGGLE_FOLLOW_LIST = 'ADD_ID_TO_TOGGLE_FOLLOW_LIST';
const REMOVE_ID_FROM_TOGGLE_FOLLOW_LIST = 'REMOVE_ID_FROM_TOGGLE_FOLLOW_LIST';

const initalState = {
    isFetching: false,
    idsToToggleFollow: [],
    users: [],
    totalUsersCount: 0,
    NUM_OF_USERS_TO_DISPLAY,
    friends: [],
};

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        //Users
        case SET_USERS_ACTION_TYPE: {
            return {
                ...state,
                users: [...action.users],
            };
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        }

        // Follow
        case TOGGLE_FETCHING_STATUS_AC: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }

        case TOGGLE_FOLLOW_ACTION_TYPE: {
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.id ? { ...u, followed: !u.followed } : u,
                ),
            };
        }

        case ADD_ID_TO_TOGGLE_FOLLOW_LIST: {
            return {
                ...state,
                idsToToggleFollow: [...state.idsToToggleFollow, action.id],
            };
        }

        case REMOVE_ID_FROM_TOGGLE_FOLLOW_LIST: {
            return {
                ...state,
                idsToToggleFollow: state.idsToToggleFollow.filter((id) => id !== action.id),
            };
        }

        //Friends
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...action.friends],
            };
        }

        default: {
            return state;
        }
    }
};

//Users
export const setUsers = (users) => ({
    type: SET_USERS_ACTION_TYPE,
    users,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});

export const requestUsers = (pageSize = NUM_OF_USERS_TO_DISPLAY, page) => {
    return (dispatch) => {
        dispatch(toggleFetchingStatus(true));
        usersAPI.getUsers(pageSize, page).then((response) => {
            dispatch(toggleFetchingStatus(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        });
    };
};

//Follow
export const toggleFetchingStatus = (isFetching) => {
    return {
        type: TOGGLE_FETCHING_STATUS_AC,
        isFetching,
    };
};

export const toggleFollowStatus = (userId) => ({
    type: TOGGLE_FOLLOW_ACTION_TYPE,
    id: userId,
});

export const addIdToToggleList = (id) => {
    return {
        type: ADD_ID_TO_TOGGLE_FOLLOW_LIST,
        id,
    };
};

export const removeIdFromToggleList = (id) => {
    return {
        type: REMOVE_ID_FROM_TOGGLE_FOLLOW_LIST,
        id,
    };
};

export const toggleFollow = (followed, id) => {
    return (dispatch) => {
        dispatch(addIdToToggleList(id));
        usersAPI.sendToggleFollowRequest(followed, id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(toggleFollowStatus(id));
                dispatch(requestFriends());
            }
            dispatch(removeIdFromToggleList(id));
        });
    };
};

//Friends
export const setFriends = (friends) => ({
    type: SET_FRIENDS,
    friends,
});

export const requestFriends = () => {
    return (dispatch) => {
        usersAPI.getFriends().then((response) => {
            dispatch(setFriends(response.data.items));
        });
    };
};

export default usersReducer;
