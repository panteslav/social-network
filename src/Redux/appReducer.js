import { getAuthUserData } from './authReducer';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

const initalState = {
    isInitialized: false,
};

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS: {
            return {
                ...state,
                isInitialized: true,
            };
        }
        default:
            return state;
    }
};

export const setInitialized = () => {
    return {
        type: INITIALIZATION_SUCCESS,
    };
};

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => dispatch(setInitialized()));
};

export default appReducer;
