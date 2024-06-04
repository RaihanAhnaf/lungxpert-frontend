import axios from "axios";

export const login = ({ email, password }) => {
  return axios.post(`http://localhost:8000/api/login`, { email, password });
};

export const profile = () => {
  const token = localStorage.getItem("token");
  return axios.get("http://localhost:8000/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
