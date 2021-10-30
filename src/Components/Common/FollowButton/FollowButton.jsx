import React from 'react';
import styles from './FollowButton.module.css';

const FollowButton = ({ followed, id, idsToToggleFollow, toggleFollow }) => {
    const text = followed ? 'Unfollow' : 'Follow';
    const isDisabled = (id, idsToToggleFollow) => idsToToggleFollow.includes(id);

    return (
        <button
            disabled={isDisabled(id, idsToToggleFollow)}
            onClick={() => toggleFollow(followed, id)}
            className={styles.followButton}
        >
            {text}
        </button>
    );
};

export default FollowButton;
