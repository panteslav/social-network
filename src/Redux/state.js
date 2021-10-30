// import profileReducer from './profileReducer';
// import dialogsReducer from './dialogsReducer';
// import sidebarReducer from './sidebarReducer';

// const store = {
//     _state: {
//         profilePage: {
//             newPostInput: '',
//             posts: [
//                 { id: 1, text: 'Hello, world!', likesCount: '5' },
//                 { id: 2, text: 'Test', likesCount: '100' },
//             ],
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: '1', name: 'Sasha' },
//                 { id: '2', name: 'Dima' },
//                 { id: '3', name: 'Dasha' },
//                 { id: '4', name: 'Vlad' },
//                 { id: '5', name: 'Cat' },
//                 { id: '6', name: 'Crocodile' },
//             ],
//             newMessageInput: '',
//             messages: [{ text: 'Hi' }, { text: 'How r u?' }, { text: 'Yo' }],
//         },
//         sidebar: {
//             navbar: {},
//             friendsBar: {
//                 names: ['Andrew', 'Julia', 'Robert', 'Vlad', 'Ralph'],
//             },
//         },
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     _callSubscriber: () => {},
//     dispatch(action) {
//         this._state.profilePagePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber(this._state);
//     },
// };

// export default store;

// window._state = store._state;
