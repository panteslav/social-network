import authAPI from '../APIs/authAPI';
import { FORM_ERROR } from 'final-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initalState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                // isAuth: true,
            };
        }
        default:
            return state;
    }
};

export const setUserAuthData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.authMe().then((response) => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                dispatch(setUserAuthData(id, email, login, true));
            } else console.log('Bad auth response at header');
        });
    };
};

export const logIn = ({ login, password, rememberMe = false }) => {
    return async (dispatch) => {
        const response = await authAPI.login(login, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            return { [FORM_ERROR]: 'Login Failed' };
        }
    };
};

export const logOut = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false));
            } else console.log('Bad server response at logout');
        });
    };
};

export default authReducer;
