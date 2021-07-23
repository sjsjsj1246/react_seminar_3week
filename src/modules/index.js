import { combineReducers } from "redux";
import auth from "./auth";
import todos from "./todos";

const rootReducer = combineReducers({
  auth,
  todos,
});

export default rootReducer;
