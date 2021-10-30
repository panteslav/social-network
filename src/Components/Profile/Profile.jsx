import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profileData={props.profileData}
                profileStatus={props.profileStatus}
                updateProfileStatus={props.updateProfileStatus}
                followed={props.followed}
                idsToToggleFollow={props.idsToToggleFollow}
                toggleFollow={props.toggleFollow}
                requestFollowStatus={props.requestFollowStatus}
            />
            <MyPosts addPost={props.addPost} posts={props.posts} />
        </div>
    );
};

export default Profile;
