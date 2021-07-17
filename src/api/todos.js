import axios from "axios";

const getTodoList = async () => {
  const response = await axios({
    method: "get",
    url: "/api/todos",
  });
  return response;
};

const getTodoById = async (id) => {
  const response = await axios({
    method: "get",
    url: `/api/todos/${id}`,
  });
  return response;
};

const createTodo = async (content) => {
  const response = await axios({
    method: "post",
    url: "/api/todos",
    data: {
      content,
    },
  });
  return response;
};

const deleteTodo = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/todos/${id}`,
  });
  return response;
};

const editTodo = async ({ id, content }) => {
  const response = await axios({
    method: "patch",
    url: `/api/todos/${id}`,
    data: {
      content,
    },
  });
  return response;
};
