import React from 'react';
import s from './User.module.css';
import defaultUserAvatar from '../../../Assets/Images/default_avatar.jpeg';
import { NavLink } from 'react-router-dom';
import FollowButton from '../../Common/FollowButton/FollowButton';
import { toggleUserFollow } from '../../../Redux/usersReducer';

const User = ({
    id,
    name,
    status,
    location,
    followed,
    photos,
    // toggleUserFollow,
    // idsToToggleFollow,
}) => {
    // const sendToggleFollowRequest = (followed) => {
    //     return followed
    //         ? axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id, {
    //               withCredentials: true,
    //               headers: { 'API-KEY': '00f20d53-e6de-4b2c-8d06-5e5dc617fb9c' },
    //           })
    //         : axios.post(
    //               'https://social-network.samuraijs.com/api/1.0/follow/' + id,
    //               {},
    //               {
    //                   withCredentials: true,
    //                   headers: { 'API-KEY': '00f20d53-e6de-4b2c-8d06-5e5dc617fb9c' },
    //               },
    //           );
    // };

    return (
        <div className={s.container}>
            <div className={s.sidebar}>
                <div className={s.avatarContainer}>
                    <NavLink to={`/profile/${id}`}>
                        <img
                            className={s.avatar}
                            src={photos.small !== null ? photos.small : defaultUserAvatar}
                            alt="avatar"
                        ></img>
                    </NavLink>
                </div>
                <div className={s.followButtonContainer}>
                    <FollowButton
                        followed={followed}
                        id={id}
                        // idsToToggleFollow={idsToToggleFollow}
                        toggleFollow={toggleUserFollow}
                    />
                </div>
            </div>
            <div className={s.data}>
                <div className={s.bio}>
                    <div className={s.name}>{name}</div>
                    <div className={status}>{status}</div>
                </div>
                <div className={s.location}>
                    <div>{'location.city'},</div>
                    <div>{'location.country'}</div>
                </div>
            </div>
        </div>
    );
};

export default User;
