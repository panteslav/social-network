import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader';
import ProfileStatus from '../../ProfileStatus/ProfileStatus';
import FollowButton from '../../Common/FollowButton/FollowButton';

const ProfileInfo = ({
    profileData,
    profileStatus,
    updateProfileStatus,
    followed,
    idsToToggleFollow,
    toggleFollow,
    requestFollowStatus,
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
                    <img
                        src={
                            photos.small
                                ? photos.small
                                : 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
                        }
                        alt="Profile avatar"
                    ></img>
                </div>
                <FollowButton
                    followed={followed}
                    id={userId}
                    idsToToggleFollow={idsToToggleFollow}
                    toggleFollow={(followed, id) => {
                        toggleFollow(followed, id);
                        requestFollowStatus(id);
                    }}
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
