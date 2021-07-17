import axios from "axios";

export const getTodoList = async () => {
  const response = await axios({
    method: "get",
    url: "/api/todos",
  });
  return response;
};

export const getTodoById = async (id) => {
  const response = await axios({
    method: "get",
    url: `/api/todos/${id}`,
  });
  return response;
};

export const createTodo = async (content) => {
  const response = await axios({
    method: "post",
    url: "/api/todos",
    data: {
      content,
    },
  });
  return response;
};

export const deleteTodo = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/todos/${id}`,
  });
  return response;
};

export const editTodo = async ({ id, content }) => {
  const response = await axios({
    method: "patch",
    url: `/api/todos/${id}`,
    data: {
      content,
    },
  });
  return response;
};

export const toggleTodo = async (id) => {
  const response = await axios({
    method: "patch",
    url: `/api/todos/complete/${id}`,
  });
  return response;
};
