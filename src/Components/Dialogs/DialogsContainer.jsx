import React from 'react';
import s from './Dialogs.module.css';
import { addMessage } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOCs/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs, getMessages } from '../../Redux/dialogsSelectors';

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    dialogs: getDialogs(state),
    messages: getMessages(state),
});

export default compose(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect,
)(Dialogs);
