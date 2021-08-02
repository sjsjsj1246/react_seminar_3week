import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ onLogin, errorMessage }) => {
  const username = useRef();
  const password = useRef();

  const handleLogin = () => {
    onLogin({
      username: username.current.value,
      password: password.current.value,
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
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
          <input
            className={styles.input}
            ref={password}
            onKeyPress={onKeyPress}
            type="password"
          />
        </div>
        <Link to="/register" className={styles.signupButton}>
          회원가입
        </Link>
        <button className={styles.button} onClick={handleLogin}>
          로그인
        </button>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
