import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
// import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    // sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store = store;

export default store;
