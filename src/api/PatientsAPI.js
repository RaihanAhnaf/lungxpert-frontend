import axios from "axios";

export const getPatients = () => {
  const token = localStorage.getItem("token");
  return axios.get("https://api.lungxpert.my.id/api/patients", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createPatients = ({ name, result, label, image }) => {
  const token = localStorage.getItem("token");
  return axios.post(
    "https://api.lungxpert.my.id/api/patients",
    { name, result, label, image },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const editPatients = ({ id, name, result, label, image }) => {
  const token = localStorage.getItem("token");
  return axios.put(
    `https://api.lungxpert.my.id/api/patients/${id}`,
    { name, result, label, image },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getPatient = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.get(`https://api.lungxpert.my.id/api/patients/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deletePatient = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios.delete(`https://api.lungxpert.my.id/api/patients/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
