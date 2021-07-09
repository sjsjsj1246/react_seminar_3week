import React, { useRef, useState } from "react";
import styles from "./Todo.module.css";
import { BsTrash, BsCheck } from "react-icons/bs";

const TodoItem = ({ todo, deleteTodo, toggledTodo }) => {
  return (
    <div className={styles.todoItemContainer}>
      <div
        className={styles.todoCheckbox}
        onClick={() => {
          toggledTodo(todo.id);
        }}
      >
        {todo.done && <BsCheck color="#FA2060" />}
      </div>
      <p
        className={`${styles.description} ${todo.done && styles.done}`}
        onClick={() => {
          toggledTodo(todo.id);
        }}
      >
        {todo.description}
      </p>
      <BsTrash
        className={styles.delete}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      />
    </div>
  );
};

const Todo = (props) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      description: "테스트1",
      done: true,
    },
    {
      id: 2,
      description: "테스트2",
      done: false,
    },
    {
      id: 3,
      description: "테스트3",
      done: false,
    },
  ]);
  const inputRef = useRef();

  const createTodo = (description) => {
    setTodoList(
      todoList.concat({ id: Date.now(), description: description, done: false })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggledTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoForm}>
        <div className={styles.todoList}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggledTodo={toggledTodo}
            />
          ))}
        </div>

        <div className={styles.createTodoForm}>
          <input type="text" ref={inputRef} />
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

export default Todo;
