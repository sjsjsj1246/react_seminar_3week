import React, { useRef, useState } from "react";
import styles from "./Todo.module.css";
import { BsTrash, BsCheck, BsPencil } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const TodoItem = ({ todo, deleteTodo, toggledTodo, handleEditTodo }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();

  const onEditTodo = () => {
    if (inputRef.current.value === "") return;
    handleEditTodo(todo.id, inputRef.current.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditTodo();
      setEdit(false);
    }
  };
  document.body.onclick = () => {
    if (edit) {
      onEditTodo();
      setEdit(false);
    }
  };

  return (
    <div className={`${styles.todoItemContainer} ${todo.done && styles.done}`}>
      <div
        className={styles.todoCheckbox}
        onClick={(e) => {
          e.stopPropagation();
          toggledTodo(todo.id);
        }}
      >
        {todo.done && <BsCheck color="#FA2060" />}
      </div>
      {edit ? (
        <>
          <input
            autoFocus
            ref={inputRef}
            onKeyPress={handleKeyPress}
            className={styles.description}
          />
          <FiSave
            className={styles.editButton}
            onClick={(e) => {
              e.stopPropagation();
              setEdit(false);
              onEditTodo();
            }}
          />
        </>
      ) : (
        <>
          <p
            className={`${styles.description} ${todo.done && styles.done}`}
            onClick={(e) => {
              e.stopPropagation();
              toggledTodo(todo.id);
            }}
          >
            {todo.content}
          </p>
          <BsPencil
            className={styles.editButton}
            onClick={(e) => {
              e.stopPropagation();
              setEdit(true);
            }}
          />
        </>
      )}

      <BsTrash
        className={styles.deleteButton}
        onClick={(e) => {
          e.stopPropagation();
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
      content: "테스트1",
      done: true,
    },
    {
      id: 2,
      content: "테스트2",
      done: false,
    },
    {
      id: 3,
      content: "테스트3",
      done: false,
    },
  ]);
  const inputRef = useRef();
  const history = useHistory();

  const createTodo = (content) => {
    if (content === "") return;
    setTodoList(
      todoList.concat({ id: Date.now(), content: content, done: false })
    );
    inputRef.current.value = "";
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

  const handleEditTodo = (id, content) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, content: content } : todo
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo(inputRef.current.value);
    }
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoForm}>
        <button
          className={styles.logoutButton}
          onClick={() => {
            history.push("/");
          }}
        >
          로그아웃
        </button>
        <div className={styles.todoList}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggledTodo={toggledTodo}
              handleEditTodo={handleEditTodo}
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

export default Todo;
