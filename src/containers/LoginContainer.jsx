import React from "react";
import Login from "../components/Login";
import { login } from "../api/auth";
import { useHistory } from "react-router";

const LoginContainer = (props) => {
  const history = useHistory();
  const onLogin = ({ username, password }) => {
    login({ username, password }).then((response) => {
      console.log(response.data);
      history.push("/todo");
    });
  };
  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
