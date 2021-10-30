import React, { useCallback, useEffect, useMemo } from 'react';
import FriendItem from './FriendItem/FriendItem';
import styles from './FriendsBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../../Redux/usersSelectors';
import { requestFriends } from '../../../Redux/usersReducer';

const FriendsBar = () => {
    const friends = useSelector((state) => getFriends(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestFriends());
    }, [dispatch]);

    //fix key={index} below
    const friendsItems = friends.map(({ name, id }) => <FriendItem key={id} name={name} id={id} />);

    return (
        <div className={styles.container}>
            <h3>Friends</h3>
            <div className={styles.items}>{friendsItems}</div>
        </div>
    );
};

export default FriendsBar;
