import * as todoAPI from "../api/todos";

const GET_TODO_LIST = "GET_TODO_LIST";
const GET_TODO_LIST_SUCCESS = "GET_TODO_LIST_SUCCESS";
const GET_TODO_LIST_ERROR = "GET_TODO_LIST_ERROR";

const CREATE_TODO = "CREATE_TODO";
const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";

const DELETE_TODO = "DELETE_TODO";
const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

const EDIT_TODO = "EDIT_TODO";
const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
const EDIT_TODO_ERROR = "EDIT_TODO_ERROR";

const TOGGLE_TODO = "TOGGLE_TODO";
const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
const TOGGLE_TODO_ERROR = "TOGGLE_TODO_ERROR";

const SET_LOADING = "SET_LOADING";

export const getTodoList = () => async (dispatch) => {
  dispatch({ type: GET_TODO_LIST });
  try {
    const todoList = await todoAPI.getTodoList();
    dispatch({ type: GET_TODO_LIST_SUCCESS, todoList });
  } catch (e) {
    dispatch({ type: GET_TODO_LIST_ERROR, error: e });
  }
};
export const createTodo = (content) => async (dispatch) => {
  dispatch({ type: CREATE_TODO });
  dispatch({ type: SET_LOADING, loading: true });
  try {
    await todoAPI.createTodo(content);
    dispatch({ type: CREATE_TODO_SUCCESS });
  } catch (e) {
    dispatch({ type: CREATE_TODO_ERROR, error: e });
  }
  dispatch({ type: SET_LOADING, loading: false });
};
export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TODO });
  dispatch({ type: SET_LOADING, loading: true });
  try {
    await todoAPI.deleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCCESS });
  } catch (e) {
    dispatch({ type: DELETE_TODO_ERROR, error: e });
  }
  dispatch({ type: SET_LOADING, loading: false });
};
export const editTodo =
  ({ id, content }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_TODO });
    dispatch({ type: SET_LOADING, loading: true });
    try {
      await todoAPI.editTodo({ id, content });
      dispatch({ type: EDIT_TODO_SUCCESS });
    } catch (e) {
      dispatch({ type: EDIT_TODO_ERROR, error: e });
    }
    dispatch({ type: SET_LOADING, loading: false });
  };
export const toggleTodo = (id) => async (dispatch) => {
  dispatch({ type: TOGGLE_TODO });
  dispatch({ type: SET_LOADING, loading: true });
  try {
    await todoAPI.toggleTodo(id);
    dispatch({ type: TOGGLE_TODO_SUCCESS });
  } catch (e) {
    dispatch({ type: TOGGLE_TODO_ERROR, error: e });
  }
  dispatch({ type: SET_LOADING, loading: false });
};

const initialState = {
  todoList: null,
  loading: null,
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.todoList,
      };
    case GET_TODO_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CREATE_TODO_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case EDIT_TODO_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case TOGGLE_TODO_ERROR:
      return {
        ...state,
        error: action.error,
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
