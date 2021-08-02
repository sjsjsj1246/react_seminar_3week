import * as todosAPI from "../api/todos";

const GET_TODO_LIST = "todos/GET_TODO_LIST";
const GET_TODO_LIST_SUCCESS = "todos/GET_TODO_LIST_SUCCESS";
const GET_TODO_LIST_FAILURE = "todos/GET_TODO_LIST_FAILURE";

const CREATE_TODO = "todos/CREATE_TODO";
const CREATE_TODO_SUCCESS = "todos/CREATE_TODO_SUCCESS";
const CREATE_TODO_FAILURE = "todos/CREATE_TODO_FAILURE";

const DELETE_TODO = "todos/DELETE_TODO";
const DELETE_TODO_SUCCESS = "todos/DELETE_TODO_SUCCESS";
const DELETE_TODO_FAILURE = "todos/DELETE_TODO_FAILURE";

const EDIT_TODO = "todos/EDIT_TODO";
const EDIT_TODO_SUCCESS = "todos/EDIT_TODO_SUCCESS";
const EDIT_TODO_FAILURE = "todos/EDIT_TODO_FAILURE";

const TOGGLE_TODO = "todos/TOGGLE_TODO";
const TOGGLE_TODO_SUCCESS = "todos/TOGGLE_TODO_SUCCESS";
const TOGGLE_TODO_FAILURE = "todos/TOGGLE_TODO_FAILURE";

const SET_LOADING = "todos/SET_LOADING";

export const getTodoList = () => async (dispatch) => {
  dispatch({ type: GET_TODO_LIST });
  try {
    const response = await todosAPI.getTodoList();
    dispatch({ type: GET_TODO_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_TODO_LIST_FAILURE, payload: e });
  }
};

export const createTodo = (content) => async (dispatch) => {
  dispatch({ type: CREATE_TODO });
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await todosAPI.createTodo(content);
    dispatch({ type: CREATE_TODO_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CREATE_TODO_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TODO });
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await todosAPI.deleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: DELETE_TODO_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const editTodo =
  ({ id, content }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_TODO });
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await todosAPI.editTodo({ id, content });
      dispatch({ type: EDIT_TODO_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: EDIT_TODO_FAILURE, payload: e });
    }
    dispatch({ type: SET_LOADING, payload: false });
  };

export const toggleTodo = (id) => async (dispatch) => {
  dispatch({ type: TOGGLE_TODO });
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await todosAPI.toggleTodo(id);
    dispatch({ type: TOGGLE_TODO_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: TOGGLE_TODO_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

const initState = {
  todoList: [],
  error: null,
  loading: false,
};

export default function todos(state = initState, action) {
  switch (action.type) {
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
      };
    case GET_TODO_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
