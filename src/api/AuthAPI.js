import axios from "axios";

export const login = ({ email, password }) => {
  return axios.post(`https://api.lungxpert.my.id/api/login`, {
    email,
    password,
  });
};

export const profile = () => {
  const token = localStorage.getItem("token");
  return axios.get("https://api.lungxpert.my.id/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
