export const getLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserName = (state) => state.auth.user.name;
export const getUserEmail = (state) => state.auth.user.email;
export const getRefreshing = (state) => state.auth.isRefreshing;
