const ADD_MESSAGE = 'ADD-MESSAGE';

const initalState = {
    dialogs: [
        { id: '1', name: 'Sasha' },
        { id: '2', name: 'Dima' },
        { id: '3', name: 'Dasha' },
        { id: '4', name: 'Vlad' },
        { id: '5', name: 'Cat' },
        { id: '6', name: 'Crocodile' },
    ],
    // newMessageInput: '',
    messages: [{ text: 'Hi' }, { text: 'How r u?' }, { text: 'Yo' }],
};

const dialogsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = { text: action.message };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }

        default:
            return state;
    }
};

export const addMessage = (message) => {
    return { type: ADD_MESSAGE, message };
};

export default dialogsReducer;
