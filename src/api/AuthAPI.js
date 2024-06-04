import axios from "axios";

export const login = ({ email, password }) => {
  return axios.post(`http://147.139.191.239:8000/api/login`, {
    email,
    password,
  });
};

export const profile = () => {
  const token = localStorage.getItem("token");
  return axios.get("http://147.139.191.239:8000/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
