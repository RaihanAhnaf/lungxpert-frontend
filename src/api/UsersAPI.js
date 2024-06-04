import axios from "axios";

export const getUsers = () => {
  const token = localStorage.getItem("token");
  return axios.get("http://147.139.191.239:8000/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createUsers = ({ name, email, password, role, birth_date }) => {
  const token = localStorage.getItem("token");
  return axios.post(
    "http://147.139.191.239:8000/api/users",
    { name, email, password, role, birth_date },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editUsers = ({ id, name, email, password, role, birth_date }) => {
  const token = localStorage.getItem("token");
  return axios.put(
    `http://147.139.191.239:8000/api/users/${id}`,
    { name, email, password, role, birth_date },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getUser = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.get(`http://147.139.191.239:8000/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.delete(`http://147.139.191.239:8000/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
