import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIdsToToggleFollow } from '../../../Redux/usersSelectors';
import styles from './FollowButton.module.css';

const FollowButton = ({ followed, id, toggleFollow }) => {
    const dispatch = useDispatch();
    const idsToToggleFollow = useSelector(getIdsToToggleFollow);

    const text = followed ? 'Unfollow' : 'Follow';
    const isDisabled = (id, idsToToggleFollow) => idsToToggleFollow.includes(id);

    return (
        <button
            disabled={isDisabled(id, idsToToggleFollow)}
            onClick={() => dispatch(toggleFollow(followed, id))}
            className={styles.followButton}
        >
            {text}
        </button>
    );
};

export default FollowButton;
