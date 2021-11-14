import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toggleUserFollow, requestUsers } from '../../Redux/usersReducer';
import Preloader from '../Common/Preloader';
import {
    getUsers,
    getIdsToToggleFollow,
    getTotalUsersCount,
    getFetchingStatus,
    getUsersOnPageNumber,
} from '../../Redux/usersSelectors';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageNumber: 1,
        };
    }

    componentDidMount() {
        this.props.requestUsers(this.props.USERS_ON_PAGE_NUMBER, this.state.currentPageNumber);
    }

    setCurrentPageNumber = (targetPageNum) => {
        this.setState({
            ...this.state,
            currentPageNumber: targetPageNum,
        });
    };

    onPageChange = (targetPageNum) => {
        this.setCurrentPageNumber(targetPageNum);
        this.props.requestUsers(this.props.USERS_ON_PAGE_NUMBER, targetPageNum);
    };

    render = () => {
        return (
            <>
                <div>{this.props.isFetching ? <Preloader /> : null}</div>
                <Users
                    users={this.props.users}
                    currentPageNumber={this.state.currentPageNumber}
                    totalUsersCount={this.props.totalUsersCount}
                    idsToToggleFollow={this.props.idsToToggleFollow}
                    toggleUserFollow={this.props.toggleUserFollow}
                    onPageChange={this.onPageChange}
                />
            </>
        );
    };
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    idsToToggleFollow: getIdsToToggleFollow(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getFetchingStatus(state),
    USERS_ON_PAGE_NUMBER: getUsersOnPageNumber(state),
});

export default connect(mapStateToProps, {
    toggleUserFollow,
    requestUsers,
})(UsersContainer);
