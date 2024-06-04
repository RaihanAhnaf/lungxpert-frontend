import axios from "axios";

export const getPatients = () => {
  const token = localStorage.getItem("token");
  return axios.get("http://localhost:8000/api/patients", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createPatients = ({ name, result, label, image }) => {
  const token = localStorage.getItem("token");
  return axios.post(
    "http://localhost:8000/api/patients",
    { name, result, label, image },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editPatients = ({ id, name, result, label, image }) => {
  const token = localStorage.getItem("token");
  return axios.put(
    `http://localhost:8000/api/patients/${id}`,
    { name, result, label, image },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getPatient = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.get(`http://localhost:8000/api/patients/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deletePatient = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.delete(`http://localhost:8000/api/patients/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
