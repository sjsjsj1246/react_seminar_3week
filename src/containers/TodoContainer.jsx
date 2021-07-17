import React, { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "../api/todos";
import { logout } from "../api/auth";
import TodoList from "../components/TodoList";
import { useHistory } from "react-router";

const TodoContainer = (props) => {
  const [todoList, setTodoList] = useState();
  const history = useHistory();

  const onGetTodoList = () => {
    getTodoList().then((response) => setTodoList(response.data));
  };

  const onCreateTodo = (content) => {
    createTodo(content).then((response) => {
      console.log(response);
      onGetTodoList();
    });
  };

  const onDeleteTodo = (id) => {
    deleteTodo(id).then((response) => {
      console.log(response);
      onGetTodoList();
    });
  };

  const onEditTodo = ({ id, content }) => {
    editTodo({ id, content }).then((response) => {
      console.log(response);
      onGetTodoList();
    });
  };

  const onToggleTodo = (id) => {
    toggleTodo(id).then((response) => {
      console.log(response);
      onGetTodoList();
    });
  };

  const onLogout = () => {
    logout().then((data) => console.log(data));
    history.push("/");
  };

  useEffect(() => {
    onGetTodoList();
  }, []);

  if (!todoList) return "로딩중";

  return (
    <TodoList
      todoList={todoList}
      setTodoList={setTodoList}
      onCreateTodo={onCreateTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
      onToggleTodo={onToggleTodo}
      onLogout={onLogout}
    />
  );
};

export default TodoContainer;
