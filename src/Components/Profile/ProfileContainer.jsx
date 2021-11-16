import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import {
    requestUserProfile,
    requestProfileStatus,
    requestFollowStatus,
} from '../../Redux/profileReducer';

import { useLocation, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthUserId } from '../../Redux/authSelectors';

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const authUserId = useSelector(getAuthUserId);
    //consider later useNavigate
    //const navigate = useNavigate();
    useEffect(() => {
        let [, , userId] = location.pathname.split('/');

        if (!userId) {
            userId = authUserId;
            if (!userId) {
                history.push('/login');
                // navigate('/login');
            }
        }
        dispatch(requestUserProfile(userId));
        dispatch(requestProfileStatus(userId));
        dispatch(requestFollowStatus(userId));
    });

    return <Profile />;
};

export default compose(withRouter)(ProfileContainer);
