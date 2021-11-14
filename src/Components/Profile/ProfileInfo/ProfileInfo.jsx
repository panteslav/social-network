import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatus from '../../ProfileStatus/ProfileStatus';
import FollowButton from '../../Common/FollowButton/FollowButton';
import defaultAvatar from '../../../Assets/Images/default_avatar.jpeg';

const ProfileInfo = ({
    profileData,
    profileStatus,
    updateProfileStatus,
    followed,
    idsToToggleFollow,
    toggleFollow,
}) => {
    if (!profileData) {
        return <Preloader />;
    }
    const {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        userId,
        photos,
    } = profileData;

    return (
        <div className={styles.content}>
            {/* <div>{profileData.aboutMe}</div> */}
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={photos.small || defaultAvatar} alt="Profile avatar"></img>
                </div>
                <FollowButton
                    followed={followed}
                    id={userId}
                    idsToToggleFollow={idsToToggleFollow}
                    toggleFollow={toggleFollow}
                />
                <ul className={styles.info}>
                    User info
                    <li className={styles.infoItem}>Full name: {fullName}</li>
                    <li className={styles.infoItem}>User id: {userId}</li>
                    <li className={styles.infoItem}>Looking for job: {lookingForAJob}</li>
                    <li className={styles.infoItem}>
                        Looking for job description: {lookingForAJobDescription}
                    </li>
                    {/* <li className={styles.infoItem}>contacts: {profileData.contacts}</li> */}
                    {/* <li className={styles.infoItem}>photos: {profileData.userId}</li> */}
                    {/* <li className={styles.infoItem}>User id: {profileData.photos.small}</li> */}
                </ul>
                <ProfileStatus
                    userId={userId}
                    status={profileStatus}
                    updateProfileStatus={updateProfileStatus}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
