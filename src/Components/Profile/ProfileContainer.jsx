import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    addPost,
    requestUserProfile,
    requestProfileStatus,
    updateProfileStatus,
    requestFollowStatus,
} from '../../Redux/profileReducer';
import { toggleFollow } from '../../Redux/usersReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../HOCs/withAuthRedirect';
import { compose } from 'redux';
import {
    getPosts,
    getProfileData,
    getProfileStatus,
    getFollowStatus,
} from '../../Redux/profileSelectors';
import { getUserId } from '../../Redux/authSelectors';
import { getIdsToToggleFollow } from '../../Redux/usersSelectors';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        // if (this.props.followed) {

        // }
        this.props.requestUserProfile(userId);
        this.props.requestProfileStatus(userId);
        this.props.requestFollowStatus(userId);
    }

    render() {
        return (
            <Profile
                profileData={this.props.profileData}
                profileStatus={this.props.profileStatus}
                posts={this.props.posts}
                // userId={this.props.userId}
                addPost={this.props.addPost}
                updateProfileStatus={this.props.updateProfileStatus}
                followed={this.props.followed}
                idsToToggleFollow={this.props.idsToToggleFollow}
                toggleFollow={this.props.toggleFollow}
                requestFollowStatus={this.props.requestFollowStatus}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: getUserId(state),
        posts: getPosts(state),
        profileData: getProfileData(state),
        profileStatus: getProfileStatus(state),
        followed: getFollowStatus(state),
        idsToToggleFollow: getIdsToToggleFollow(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        addPost,
        updateProfileStatus,
        requestUserProfile,
        requestProfileStatus,
        requestFollowStatus,
        toggleFollow,
    }),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer);
