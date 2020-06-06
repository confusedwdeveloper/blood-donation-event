import { createSelector, createStructuredSelector } from "reselect";

export const selectAuth = (state) => state.auth;

export const selectLoginStatus = createSelector(
  [selectAuth],
  (auth) => auth.isLoggedIn
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  (auth) => auth.loading
);

export const selectUser = createSelector([selectAuth], (auth) => auth.user);

export const selectFirstName = createSelector(
  [selectUser],
  (user) => user?.firstName
);
const selectLastName = createSelector([selectUser], (user) => user?.lastName);
export const selectEmail = createSelector([selectUser], (user) => user?.email);

export const selectFullName = createSelector(
  [selectFirstName, selectLastName],
  (f, l) => `${f} ${l}`
);

export const selectUserId = createSelector([selectUser], (user) => user?._id);

export const selectContact = createStructuredSelector({
  firstName: selectFirstName,
  lastName: selectLastName,
  email: selectEmail,
});

export const selectIsRegistered = createSelector(
  [selectUser],
  (user) => user?.isRegistered
);
