import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../Redux/authReducer';
import { getAuthStatus, getLogin, getUserId } from '../../Redux/authSelectors';

const Header = ({ isAuth, userId, login, logOut }) => {
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="logo"
            ></img>
            <div className={styles.login}>
                {isAuth ? (
                    <div>
                        <NavLink to={`/profile/${userId}`}>{login}</NavLink>
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getAuthStatus(state),
    userId: getUserId(state),
    login: getLogin(state),
});

export default connect(mapStateToProps, { logOut })(Header);
