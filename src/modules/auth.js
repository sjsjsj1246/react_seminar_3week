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

const SET_LOADING = "SET_LOADING";

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN });
    dispatch({ type: SET_LOADING, loading: true });
    try {
      await authAPI.login({ username, password });
      dispatch({ type: LOGIN_SUCCESS });
    } catch (e) {
      dispatch({ type: LOGIN_ERROR, error: e });
    }
    dispatch({ type: SET_LOADING, loading: false });
  };

export const register =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER });
    dispatch({ type: SET_LOADING, loading: true });
    try {
      await authAPI.register({ username, password });
      dispatch({ type: REGISTER_SUCCESS });
    } catch (e) {
      dispatch({ type: REGISTER_ERROR, error: e });
    }
    dispatch({ type: SET_LOADING, loading: false });
  };

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: SET_LOADING, loading: true });
  try {
    await authAPI.logout();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    dispatch({ type: LOGOUT_ERROR, error: e });
  }
  dispatch({ type: SET_LOADING, loading: false });
};

const initialState = {
  loading: null,
  error: null,
};

export default function auth(state = initialState, action) {
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
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
