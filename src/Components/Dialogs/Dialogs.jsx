import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Field } from 'react-final-form';

const Dialogs = ({ dialogs, messages, addMessage, isAuth }) => {
    const minLength = (minLength) => (value) =>
        value && value.length > minLength ? undefined : 'Message body cannot be empty';

    const DialogForm = (props) => {
        return (
            <Form
                onSubmit={props.onSubmit}
                validate={props.validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="message"
                            component={'textarea'}
                            autoFocus
                            validate={minLength(0)}
                        >
                            {({ input, meta }) => {
                                return (
                                    <div>
                                        {/* <label>First Name</label> */}
                                        <input
                                            {...input}
                                            type="text"
                                            placeholder="Write a message..."
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                )}
            />
        );
    };

    const dialogsElements = dialogs.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />);
    const messagesElements = messages.map((m) => <Message key={m.id} text={m.text} />);

    const onAddMessage = (props) => {
        addMessage(props.message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <DialogForm onSubmit={onAddMessage} validators={{ minLength }} />
        </div>
    );
};

export default Dialogs;
