import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER,
  AUTH_ERROR,
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

//actions to load user
export const loadUser = () => async (dispatch) => {
  // get token
  const token = localStorage.getItem("token");
  // I don't know if i need to check if token exists, I will leave it aside for now

  try {
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    const res = await axios.get("/api/users", config);
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    // alert
    const options = {
      position: "top-center",
    };
    toast.error(err.response.data, options);

    dispatch({ type: AUTH_ERROR });
  }
};

// actions to register user
export const registerUser = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/register", data, config);

    // dispatch register success then load user
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    toast.success("Account created successfully!");

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      const options = {
        position: "top-center",
      };
      errors.forEach((error) => toast.error(error.msg, options));
    }

    dispatch({ type: REGISTER_FAIL });
  }
};
