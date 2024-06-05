import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import { convertDicomImg, getPrediction } from "../api/PredictionAPI";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import ModalVarian from "../component/ModalVarian";
import { useNavigate, useParams } from "react-router-dom";
import { editPatients, getPatient } from "../api/PatientsAPI";
import { profile } from "../api/AuthAPI";

const DataPasienEdit = () => {
  const [user, setUser] = useState(null);
  const [payload, setPayload] = useState({
    name: "",
    label: "",
  });

  const navigate = useNavigate();

  let { id } = useParams();

  const refFile = useRef(null);
  const [status, setStatus] = useState({
    uploaded: false,
    saved: false,
  });
  const [result, setResult] = useState({
    name: "",
    prediction: "",
    label: "",
    image: "",
    date: null,
  });

  const [file, setFile] = useState({
    file: null,
    url: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e) => {
    const fileBlob = e.target.files[0];

    if (file.file && fileBlob?.name !== file.file?.name) handleClear();

    // refFile.current.value = fileBlob?.name;
    const splitLength = fileBlob.name.split(".").length;
    const ext = fileBlob.name.split(".")[splitLength - 1];
    setFile({
      file: fileBlob,
      url: URL.createObjectURL(fileBlob),
    });
    if (ext === "dcm") {
      const promise = convertDicomImg(fileBlob);
      toast.promise(promise, {
        pending: "Memproses Gambar Dicom...",
        success: {
          render({ data }) {
            const fileUrl = process.env.REACT_APP_BASEURL + data.data.file;
            setFile({
              ...file,
              url: fileUrl,
            });
            convertBlob(fileUrl);
            return "Gambar Berhasil diproses";
          },
        },
        error: {
          render({ err }) {
            console.error({ err });
            return "Gambar Gagal diproses";
          },
        },
      });
    }
  };

  const convertBlob = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = {
      type: "image/png",
    };
    const fileBlob = new File(
      [data],
      `${Math.floor(Math.random() * 1000000)}.png`,
      metadata
    );
    setFile({
      url,
      file: fileBlob,
    });
  };

  const handleClear = () => {
    refFile.current.value = "";
    setFile({
      file: null,
      url: null,
    });
    setResult({
      name: "",
      prediction: "",
      label: "",
    });
    setStatus({
      uploaded: false,
      saved: false,
    });
  };

  const handleName = (e) => {
    setPayload({
      ...payload,
      name: e.target.value,
    });
  };

  const handleLabel = (e) => {
    setPayload({
      ...result,
      label: e.target.value,
    });
  };

  const getPatientService = async () => {
    try {
      const response = await getPatient({ id: id });
      console.log(response.data.data);
      setResult({
        ...result,
        name: response.data.data.name,
        result: response.data.data.result,
        label: response.data.data.label,
        image: response.data.data.image,
        date: response.data.data.date_formatted,
      });

      setPayload({
        ...payload,
        name: response.data.data.name,
        label: response.data.data.label,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const promise = editPatients({ id, ...payload });
    toast.promise(promise, {
      pending: "Memuat...",
      success: {
        render({ data }) {
          getPatientService();
          return "Pasien Berhasil Diedit";
        },
      },
      error: {
        render({ err }) {
          console.error({ err });
          return "Pasien Gagal Diedit";
        },
      },
    });
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
              src={`http://147.139.191.239:8000/public/images/${result.image}`}
              onClick={() => setIsOpen(!isOpen)}
              className="w-100"
            />
          </div>
          <div className="box col-md-6 px-4 py-4 ms-2 d-flex flex-column align-items-center justify-content-center">
            <h5>Pasien ini masuk kelas</h5>
            <strong className="my-3 ungu fs-1">{payload.result}</strong>
          </div>
        </div>
        <div className="row mt-3">
          <div className="box col-md-5 px-4 py-4 me-2 custom-file text-start">
            <form onSubmit={onSubmit}>
              <label>Nama Pasien</label>
              <div className="input-group mt-2 mb-3">
                <input
                  name="name"
                  type="text"
                  placeholder="Nama Pasien"
                  className="form-control"
                  onChange={handleName}
                  value={payload.name}
                />
              </div>

              <label>
                Label dari dokter{" "}
                <small className="text-secondary">
                  (*dapat diisi ketika prediksi tersedia)
                </small>
              </label>
              <div className="input-group mt-2 mb-3">
                <input
                  type="text"
                  placeholder="Label"
                  className="form-control"
                  onChange={handleLabel}
                  value={payload.label}
                />
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#4954FD" }}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
          <div className="box col-md-6 px-4 py-4 ms-2 text-start">
            <div>
              <p>Nama Pasien</p>
              <h5>{result.name || "-"}</h5>
            </div>
            <div className="mt-4">
              <p>Hari, Tanggal</p>
              <h5>{result.date || "-"}</h5>
            </div>
            <div className="mt-4">
              <p>Label dari dokter</p>
              <h5>{result.label || "-"}</h5>
            </div>
          </div>
        </div>
      </div>
      {isOpen &&
        createPortal(
          <ModalVarian
            onClose={() => setIsOpen(false)}
            imgPath={`http://147.139.191.239:8000/public/images/${result.image}`}
          />,
          document.body
        )}
    </Layout>
  );
};

export default DataPasienEdit;
