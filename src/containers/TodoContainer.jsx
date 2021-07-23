import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "../modules/todos";
import { logout } from "../modules/auth";

const TodoContainer = (props) => {
  const { todoList, loading } = useSelector((state) => state.todos);
  const history = useHistory();
  const dispatch = useDispatch();

  const onCreateTodo = (content) => {
    dispatch(createTodo(content));
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = ({ id, content }) => {
    dispatch(editTodo({ id, content }));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {
    if (!loading) {
      dispatch(getTodoList());
    }
  }, [dispatch, loading]);

  if (!todoList) return "로딩중";

  return (
    <TodoList
      todoList={todoList}
      onCreateTodo={onCreateTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
      onToggleTodo={onToggleTodo}
      onLogout={onLogout}
    />
  );
};

export default TodoContainer;
