import React, { memo, useRef, useState } from "react";
import styles from "./TodoItem.module.css";
import { BsTrash, BsCheck, BsPencil } from "react-icons/bs";
import { FiSave } from "react-icons/fi";

const TodoItem = ({ todo, deleteTodo, toggledTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();

  const onEditTodo = () => {
    if (inputRef.current.value === "") return;
    editTodo(todo.id, inputRef.current.value);
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
    <div
      className={`${styles.todoItemContainer} ${
        todo.isCompleted && styles.isCompleted
      }`}
    >
      <div
        className={styles.todoCheckbox}
        onClick={(e) => {
          e.stopPropagation();
          toggledTodo(todo.id);
        }}
      >
        {todo.isCompleted && <BsCheck color="#FA2060" />}
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
            className={`${styles.description} ${
              todo.isCompleted && styles.isCompleted
            }`}
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

export default memo(TodoItem);
