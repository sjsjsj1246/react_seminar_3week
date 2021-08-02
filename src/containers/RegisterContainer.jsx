import React from "react";
import { useHistory } from "react-router";
import { register } from "../api/auth";
import Register from "../components/Register";

const RegisterContainer = (props) => {
  const history = useHistory();

  const onRegister = ({ username, password }) => {
    register({ username, password }).then(() => {
      history.push("/todo");
    });
  };
  return <Register onRegister={onRegister} />;
};

export default RegisterContainer;
