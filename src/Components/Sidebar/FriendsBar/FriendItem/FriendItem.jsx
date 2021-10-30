import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FriendItem.module.css';

const FriendItem = ({ name, id }) => {
    return (
        <Link to={`/profile/${id}`}>
            <div className={styles.container}>
                <div className={styles.avatar}></div>
                <div className={styles.name}>{name}</div>
            </div>
        </Link>
    );
};

export default FriendItem;
