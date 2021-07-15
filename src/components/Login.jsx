import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/todo");
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.field}>
          <p>ID</p>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.field}>
          <p>PASSWORD</p>
          <input className={styles.input} type="text" />
        </div>
        <Link to="/signup" className={styles.signupButton}>
          회원가입
        </Link>
        <button className={styles.button} onClick={onClick}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
