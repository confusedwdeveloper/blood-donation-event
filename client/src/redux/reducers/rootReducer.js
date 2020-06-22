import { combineReducers } from "redux";
import auth from "./auth";
import donor from "./donor";

const rootReducer = combineReducers({ auth, donor });

export default rootReducer;
