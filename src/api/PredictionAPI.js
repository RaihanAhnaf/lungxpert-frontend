import axios from "axios";

export const getPrediction = (file, name) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append(`image`, file);
  formData.append("name", name);
  return axios.post(`http://localhost:8000/api/patients`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const convertDicomImg = (file) => {
  const formData = new FormData();
  formData.append(`img`, file);
  return axios.post(`http://localhost:5000/convert-dcm`, formData);
};
