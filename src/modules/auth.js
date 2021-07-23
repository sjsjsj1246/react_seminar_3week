import * as authAPI from "../api/auth";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const REGISTER = "REGISTER";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_ERROR = "REGISTER_ERROR";

const LOGOUT = "LOGOUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_ERROR = "LOGOUT_ERROR";

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      await authAPI.login(username, password);
      dispatch({ type: LOGIN_SUCCESS });
    } catch (e) {
      dispatch({ type: LOGIN_ERROR, error: e });
    }
  };

export const register =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER });
    try {
      await authAPI.getPostById({ username, password });
      dispatch({ type: REGISTER_SUCCESS });
    } catch (e) {
      dispatch({ type: REGISTER_ERROR, error: e });
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    await authAPI.logout();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    dispatch({ type: LOGOUT_ERROR, error: e });
  }
};

const initialState = {
  error: null,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.error,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        authError: action.error,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        authError: action.error,
      };
    default:
      return state;
  }
}
