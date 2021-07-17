import React, { useRef, useState } from "react";
import styles from "./TodoItem.module.css";
import { BsTrash, BsCheck, BsPencil } from "react-icons/bs";
import { FiSave } from "react-icons/fi";

const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();

  const handleEditTodo = () => {
    if (inputRef.current.value === "") return;
    onEditTodo({
      id: todo.id,
      content: inputRef.current.value,
    });
  };

  const handleDeleteTodo = (e) => {
    e.stopPropagation();
    onDeleteTodo(todo.id);
  };

  const handleToggleTodo = (e) => {
    e.stopPropagation();
    onToggleTodo(todo.id);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEditTodo();
      setEdit(false);
    }
  };

  document.body.onclick = () => {
    if (edit) {
      handleEditTodo();
      setEdit(false);
    }
  };

  return (
    <div
      className={`${styles.todoItemContainer} ${
        todo.isCompleted && styles.done
      }`}
    >
      <div className={styles.todoCheckbox} onClick={handleToggleTodo}>
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
              handleEditTodo();
            }}
          />
        </>
      ) : (
        <>
          <p
            className={`${styles.description} ${
              todo.isCompleted && styles.done
            }`}
            onClick={handleToggleTodo}
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

      <BsTrash className={styles.deleteButton} onClick={handleDeleteTodo} />
    </div>
  );
};

export default TodoItem;
