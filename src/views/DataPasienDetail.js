import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import { convertDicomImg, getPrediction } from "../api/PredictionAPI";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import ModalVarian from "../component/ModalVarian";
import { getPatient } from "../api/PatientsAPI";
import { useParams } from "react-router-dom";
import { profile } from "../api/AuthAPI";

const DataPasienDetail = () => {
  const [user, setUser] = useState(null);
  const [payload, setPayload] = useState({
    name: "",
    result: "",
    date: null,
    label: "",
    image: "",
  });

  let { id } = useParams();

  const refFile = useRef(null);
  const [status, setStatus] = useState({
    uploaded: false,
    saved: false,
  });
  const [result, setResult] = useState({
    name: "",
    prediction: "",
    date: null,
    label: "",
    image: "",
  });
  const [file, setFile] = useState({
    file: null,
    url: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const getPatientService = async () => {
    try {
      const response = await getPatient({ id: id });
      console.log(response.data.data);
      setPayload({
        name: response.data.data.name,
        result: response.data.data.result,
        label: response.data.data.label,
        image: response.data.data.image,
        date: response.data.data.date_formatted,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    getPatientService();
  }, []);

  const getProfile = async () => {
    try {
      const response = await profile();
      setUser(response.data);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Layout>
      <div className="px-2 pt-3 pb-5">
        <h4 className="text-end">Dr. {user?.name ?? "-"}</h4>
        <div className="row mt-5">
          <div className="box col-md-5 px-4 py-4 me-2">
            <img
              src={`http://147.139.191.239:8000/public/images/${payload.image}`}
              onClick={() => setIsOpen(!isOpen)}
              className="w-100"
            />
          </div>
          <div className="box col-md-6 px-4 py-4 ms-2 d-flex flex-column align-items-center justify-content-center">
            <h5>Pasien ini masuk kelas</h5>
            <strong className="my-3 ungu fs-1">{payload.result}</strong>
          </div>
        </div>
        <div className="box mt-3 px-4 py-4 ms-2 text-start">
          <div>
            <p>Nama Pasien</p>
            <h5>{payload.name}</h5>
          </div>
          <div className="mt-4">
            <p>Hari, Tanggal</p>
            <h5>{payload.date}</h5>
          </div>
          <div className="mt-4">
            <p>Label dari dokter</p>
            <h5>{payload.label}</h5>
          </div>
        </div>
      </div>
      {isOpen &&
        createPortal(
          <ModalVarian
            onClose={() => setIsOpen(false)}
            imgPath={`http://147.139.191.239:8000/public/images/${payload.image}`}
          />,
          document.body
        )}
    </Layout>
  );
};

export default DataPasienDetail;
