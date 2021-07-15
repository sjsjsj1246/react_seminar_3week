import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = (props) => {
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
        <Link to="/" className={styles.loginButton}>
          로그인
        </Link>
        <button className={styles.button} onClick={onClick}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Signup;
