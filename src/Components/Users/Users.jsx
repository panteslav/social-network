import React from 'react';
import User from './User/User';
import styles from './Users.module.css';
import Pagination from '../Common/Pagination/Pagination';

const Users = ({
    users,
    currentPageNumber,
    totalUsersCount,
    idsToToggleFollow,
    toggleUserFollow,
    onPageChange,
}) => {
    const usersItems = users.map(({ id, name, status, location, followed, photos }) => {
        return (
            <User
                id={id}
                name={name}
                status={status}
                location={location}
                followed={followed}
                photos={photos}
                idsToToggleFollow={idsToToggleFollow}
                toggleUserFollow={toggleUserFollow}
            ></User>
        );
    });

    return (
        <div>
            <div>Users</div>
            <div className={styles.users}>{usersItems}</div>
            <Pagination
                totalUsersCount={totalUsersCount}
                currentPageNumber={currentPageNumber}
                onPageChange={onPageChange}
            />
            <div>Total users count: {totalUsersCount}</div>
        </div>
    );
};

export default Users;
