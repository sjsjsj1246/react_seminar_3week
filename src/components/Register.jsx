import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = ({ onRegister }) => {
  const username = useRef();
  const password = useRef();

  const handleRegister = () => {
    onRegister({
      username: username.current.value,
      password: password.current.value,
    });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.field}>
          <p>ID</p>
          <input className={styles.input} ref={username} type="text" />
        </div>
        <div className={styles.field}>
          <p>PASSWORD</p>
          <input className={styles.input} ref={password} type="password" />
        </div>
        <Link to="/" className={styles.loginButton}>
          로그인
        </Link>
        <button className={styles.button} onClick={handleRegister}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Register;
