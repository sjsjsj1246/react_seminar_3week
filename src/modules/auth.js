import * as authAPI from "../api/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

const LOGOUT = "auth/LOGOUT";
const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE";

const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      const response = await authAPI.login({ username, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: LOGIN_FAILURE, payload: e });
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    const response = await authAPI.logout();
    dispatch({ type: LOGOUT_SUCCESS, payload: "로그아웃 성공" });
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE, payload: e });
  }
};

export const register =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER });
    try {
      const response = await authAPI.register({ username, password });
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: REGISTER_FAILURE, payload: e });
    }
  };

const initState = {
  auth: null,
  error: null,
  loading: null,
  success: null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
