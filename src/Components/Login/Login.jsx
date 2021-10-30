import React from 'react';
import { Form, Field } from 'react-final-form';
import { logIn } from '../../Redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthStatus, getUserId } from '../../Redux/authSelectors';

const required = (value) => (value ? undefined : 'Required field');
const maxLength = (maxLength) => (value) => {
    return !value || value.length <= 20 ? undefined : `Max length is ${maxLength}`;
};
const composeValidators =
    (...validators) =>
    (value) =>
        validators.reduce((error, validator) => {
            return error || validator(value);
        }, undefined);

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            validate={props.validate}
            render={({ handleSubmit, submitError }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="login"
                                component="input"
                                validate={composeValidators(required, maxLength(20))}
                            >
                                {({ input, meta }) => (
                                    <div>
                                        <label>First Name</label>
                                        <input {...input} type="text" placeholder="login" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field
                                name="password"
                                component="input"
                                validate={composeValidators(required, maxLength(20))}
                            >
                                {({ input, meta }) => {
                                    return (
                                        <div>
                                            <label>Password</label>
                                            <input
                                                {...input}
                                                type="password"
                                                placeholder="password"
                                            />
                                            {meta.error && meta.touched && (
                                                <span>{meta.error}</span>
                                            )}
                                        </div>
                                    );
                                }}
                            </Field>
                        </div>
                        {submitError && <div className="error">{submitError}</div>}
                        <div>
                            <Field name="rememberMe" component="input" type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <div>
                            <button type="submit">LOG IN</button>
                        </div>
                    </form>
                );
            }}
        ></Form>
    );
};

const Login = ({ isAuth, userId, logIn }) => {
    const onSubmit = (formData) => {
        return logIn(formData);
    };

    if (isAuth) {
        return <Redirect to={`/profile/${userId}`} />;
    }

    return (
        <div>
            <h1>LOG IN</h1>
            <LoginForm
                onSubmit={onSubmit}
                validate={(e) => console.log(e)}
                // validators={{ required, maxLength, composeValidators }}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getAuthStatus(state),
    userId: getUserId(state),
});

export default connect(mapStateToProps, { logIn })(Login);
