import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOAD_USER,
  CLEAR_AUTH_LOADING,
  LOGOUT,
  LOGIN_FAIL,
  LOGIN_SUCCCESS,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: false,
  loading: true,
  user: null,
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCCESS: {
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        loading: false,
      };
    }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAIL: {
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        isLoggedIn: false,
        user: null,
        loading: false,
      };
    }
    case LOAD_USER: {
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: payload,
      };
    }
    case CLEAR_AUTH_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default: {
      return state;
    }
  }
}
