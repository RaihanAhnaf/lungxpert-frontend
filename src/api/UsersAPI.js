import axios from "axios";

export const getUsers = () => {
  const token = localStorage.getItem("token");
  return axios.get("https://api.lungxpert.my.id/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createUsers = ({ name, email, password, role, birth_date }) => {
  const token = localStorage.getItem("token");
  return axios.post(
    "https://api.lungxpert.my.id/api/users",
    { name, email, password, role, birth_date },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editUsers = ({ id, name, email, password, role, birth_date }) => {
  const token = localStorage.getItem("token");
  return axios.put(
    `https://api.lungxpert.my.id/api/users/${id}`,
    { name, email, password, role, birth_date },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getUser = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.get(`https://api.lungxpert.my.id/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.delete(`https://api.lungxpert.my.id/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
