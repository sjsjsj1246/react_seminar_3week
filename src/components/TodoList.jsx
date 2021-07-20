import React, { useRef } from "react";
import styles from "./TodoList.module.css";
import { useHistory } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  onCreateTodo,
  onDeleteTodo,
  onEditTodo,
  onToggleTodo,
  onLogout,
}) => {
  const inputRef = useRef();

  const createTodo = (content) => {
    if (content === "") return;
    onCreateTodo(content);
    inputRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo(inputRef.current.value);
    }
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoForm}>
        <button className={styles.logoutButton} onClick={onLogout}>
          로그아웃
        </button>
        <div className={styles.todoList}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
              onToggleTodo={onToggleTodo}
            />
          ))}
        </div>

        <div className={styles.createTodoForm}>
          <input type="text" ref={inputRef} onKeyPress={handleKeyPress} />
          <button
            onClick={() => {
              createTodo(inputRef.current.value);
            }}
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
