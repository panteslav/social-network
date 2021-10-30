export const getUsers = (state) => state.usersPage.users;

export const getFriends = (state) => state.usersPage.friends;

export const getIdsToToggleFollow = (state) => state.usersPage.idsToToggleFollow;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getFetchingStatus = (state) => state.usersPage.isFetching;

export const getUsersOnPageNumber = (state) => state.usersPage.USERS_ON_PAGE_NUMBER;
