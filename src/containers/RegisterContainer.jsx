import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Register from "../components/Register";
import { register } from "../modules/auth";

const RegisterContainer = (props) => {
  const { loading } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const onRegister = ({ username, password }) => {
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (!loading) {
      history.push("/todo");
    }
  }, [loading]);
  return <Register onRegister={onRegister} />;
};

export default RegisterContainer;
