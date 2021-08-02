import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/auth";
import { check } from "../modules/user";

const LoginContainer = (props) => {
  const { auth, error } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = ({ username, password }) => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("아이디와 패스워드를 다시 입력해주세요");
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, error, dispatch]);

  useEffect(() => {
    if (user) {
      alert(`${user.username}님 안녕하세요!`);
      history.push("/todo");
    }
  }, [user, history]);

  return <Login onLogin={onLogin} errorMessage={errorMessage} />;
};

export default LoginContainer;
