import { createSelector } from "reselect";

export const selectAuth = (state) => state.auth;

export const selectLoginStatus = createSelector(
  [selectAuth],
  (auth) => auth.isLoggedIn
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  (auth) => auth.loading
);
