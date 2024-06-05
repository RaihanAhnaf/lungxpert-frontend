import React, { useRef, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import "datatables.net-responsive-bs5";
import $ from "jquery";
import { Link } from "react-router-dom";
import { deletePatient, getPatients } from "../api/PatientsAPI";
import { toast } from "react-toastify";
import { profile } from "../api/AuthAPI";

$.DataTable = require("datatables.net-bs5");

const DataPasien = () => {
  const [user, setUser] = useState(null);
  const [patients, setPatients] = useState([]);

  const getPatientsService = async () => {
    try {
      const response = await getPatients();
      console.log(response.data.data);
      setPatients(response.data.data);
    } catch (error) {
      console.error({ error });
    }
  };
  const tableRef = useRef();
  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });
    return () => table.destroy();
  }, []);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });
    getPatientsService();
    return () => table.destroy();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Apakah user ini ingin dihapus?")) {
        const promise = deletePatient({ id });
        toast.promise(promise, {
          pending: "Memuat...",
          success: {
            render({ data }) {
              getPatientsService();
              return "User Berhasil Dihapus";
            },
          },
          error: {
            render({ err }) {
              console.error({ err });
              return "User Gagal Dihapus";
            },
          },
        });
      }
    } catch (error) {
      console.error({ error });
    }
  };

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
        <h3 className="text-start mt-3">Data Pasien</h3>
        <div id="data-pasien" className="mt-5">
          {patients.length !== 0 ? (
            <table
              className="table table-bordered table-striped table-hover display table-sx w-100"
              ref={tableRef}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Pasien</th>
                  <th>Hasil Klasifikasi</th>
                  <th>Label</th>
                  <th>Hari, Tanggal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {patients.length != 0 &&
                  patients.map((patient, idx) => (
                    <tr key={patient.id}>
                      <td>{idx + 1}</td>
                      <td>{patient.name}</td>
                      <td>{patient.result}</td>
                      <td>{patient.label ?? "-"}</td>
                      <td>{patient.date_formatted}</td>
                      <td>
                        <div className="d-flex justify-content-center px-4">
                          <Link
                            to={`/detaildatapasien/${patient.id}`}
                            className="btn btn-sm btn-primary text-light me-2 col-4"
                          >
                            Detail
                          </Link>
                          <Link
                            to={`/editdatapasien/${patient.id}`}
                            className="btn btn-sm btn-warning text-light me-2 col-4"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger text-light me-2 col-4"
                            onClick={() => handleDelete(patient.id)}
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p>Data Masih Kosong</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DataPasien;
