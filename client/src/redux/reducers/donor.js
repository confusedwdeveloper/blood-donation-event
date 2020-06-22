import { LOAD_DONORS, DONOR_LOAD_FAIL, CLEAR_DONORS } from "../actions/types";

const initialState = {
  donorsLoading: true,
  donors: [],
  error: false,
};

export default function donor(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_DONORS: {
      return {
        ...state,
        donors: [...payload],
        donorsLoading: false,
      };
    }
    case DONOR_LOAD_FAIL: {
      return {
        ...state,
        donors: [],
        donorsLoading: false,
        error: true,
      };
    }
    case CLEAR_DONORS: {
      return {
        ...state,
        donorsLoading: true,
        donors: [],
        error: false,
      };
    }
    default: {
      return state;
    }
  }
}
