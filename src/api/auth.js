import axios from "axios";

const register = async ({ userId, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/register",
    data: {
      userId,
      password,
    },
  });
  return response;
};

const login = async ({ userId, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/login",
    data: {
      userId,
      password,
    },
  });
  return response;
};

const logout = async () => {
  const response = await axios({
    method: "post",
    url: "/api/auth/logout",
  });
  return response;
};

const check = async () => {
  const response = await axios({
    method: "get",
    url: "/api/auth/check",
  });
  return response;
};
