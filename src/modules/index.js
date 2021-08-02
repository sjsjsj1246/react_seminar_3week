import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import todos from "./todos";

const rootStore = combineReducers({
  todos,
  auth,
  user,
});

export default rootStore;
