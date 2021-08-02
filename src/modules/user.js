import { createAction, handleActions } from "redux-actions";
import * as authAPI from "../api/auth";

const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";
const INIT_USER = "user/INIT_USER";

export const initUser = createAction(INIT_USER);

export const check = () => async (dispatch) => {
  dispatch({ type: CHECK });
  try {
    const response = await authAPI.check();
    dispatch({ type: CHECK_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CHECK_FAILURE, payload: e });
  }
};

const initialState = {
  user: null,
  checkError: null,
  success: null,
};

export default handleActions(
  {
    [INIT_USER]: (state) => initialState,
    [CHECK]: (state) => ({
      ...state,
      success: false,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
      success: true,
    }),
    [CHECK_FAILURE]: (state, { payload: checkError }) => ({
      ...state,
      user: null,
      checkError,
      success: true,
    }),
  },
  initialState
);
