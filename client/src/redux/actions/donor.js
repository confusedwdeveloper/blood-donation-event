import axios from "axios";
import { toast } from "react-toastify";
import { DONOR_LOAD_FAIL, LOAD_DONORS, CLEAR_DONORS } from "./types";

// action to load donors
export const loadDonors = () => async (dispatch) => {
  // get token
  const token = localStorage.getItem("token");
  try {
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    const res = await axios.get("/api/event", config);

    dispatch({
      type: LOAD_DONORS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      const options = {
        position: "top-center",
      };
      errors.forEach((error) => toast.error(error.msg, options));
    }

    dispatch({ type: DONOR_LOAD_FAIL });
  }
};
// clear donors
export const clearDonors = () => (dispatch) => {
  dispatch({ type: CLEAR_DONORS });
};
