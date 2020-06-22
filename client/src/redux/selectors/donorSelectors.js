import { createSelector } from "reselect";

const selectDonor = (state) => state.donor;

export const selectDonorsLoading = createSelector(
  [selectDonor],
  (donor) => donor.donorsLoading
);
export const selectDonorsError = createSelector(
  [selectDonor],
  (donor) => donor.error
);
export const selectDonors = createSelector(
  [selectDonor],
  (donor) => donor.donors
);
