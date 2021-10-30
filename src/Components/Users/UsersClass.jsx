// import React from 'react';
// import User from './User/User';
// import styles from './Users.module.css';
// import * as axios from 'axios';

// class Users extends React.Component {
//     componentDidMount() {
//         // if (this.props.usersPage.users.length === 0) {
//         axios
//             .get(
//                 `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.USERS_ON_PAGE_NUMBER}&page=${this.props.usersPage.currentPageNumber}`,
//             )
//             .then((response) => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount);
//             });
//         // }
//     }

//     // getUsers = () => {
//     //     if (this.props.usersPage.users.length === 0) {
//     //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
//     //             this.props.setUsers(response.data.items);
//     //         });
//     //     }
//     // };

//     onPageChange = (targetPageNum) => {
//         this.props.setCurrentPage(targetPageNum);
//         axios
//             .get(
//                 `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.USERS_ON_PAGE_NUMBER}&page=${targetPageNum}`,
//             )
//             .then((response) => {
//                 this.props.setUsers(response.data.items);
//             });
//     };

//     render = () =>
// }

// // const usersData = [
// //     {
// //         id: 1,
// //         fullName: 'Ralph Cat',
// //         status: 'I have a tail',
// //         location: { city: 'Moscow', country: 'Russia' },
// //         followed: true,
// //         avatarURL: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg',
// //     },
// //     {
// //         id: 2,
// //         fullName: 'Tom Cat',
// //         status: 'I have a tail too',
// //         location: { city: 'Kostroma', country: 'Russia' },
// //         followed: true,
// //         avatarURL: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg',
// //     },
// // ];

// // const Users = ({ usersPage, toggleFollow, setUsers }) => {
// //     const getUsers = () => {};
// // };

// export default Users;
