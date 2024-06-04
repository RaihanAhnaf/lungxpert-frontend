import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutAdmin from "../layout/LayoutAdmin";
import { toast } from "react-toastify";
import { createUsers } from "../api/UsersAPI";

const TambahDokter = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const promise = createUsers(payload);
    toast.promise(promise, {
      pending: "Memuat...",
      success: {
        render({ data }) {
          navigate("/admin-dashboard");
          return "User Berhasil Ditambahkan";
        },
      },
      error: {
        render({ err }) {
          console.error({ err });
          return "User Gagal Ditambahkan";
        },
      },
    });
  };

  return (
    <LayoutAdmin>
      <div className="px-2 pt-3 pb-5">
        <h4 className="text-end">Admin</h4>
        <h3 className="col-md-9 text-start mt-3">Tambah Dokter</h3>

        <div className="col-6 px-4 text-start">
          <div className="form">
            <form className="mt-5" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-label fw-bold">Nama Dokter</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Dokter"
                  aria-label="Nama Dokter"
                  name="name"
                  value={payload.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <label className="form-label fw-bold">Tanggal Lahir</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Tanggal Lahir"
                  aria-label="Tanggal Lahir"
                  name="birth_date"
                  value={payload.birth_date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <label className="form-label fw-bold">Role</label>
                <select
                  name="role"
                  class="form-select"
                  aria-label="Default select role"
                  value={payload.role}
                  onChange={handleChange}
                >
                  <option selected>Pilih Role</option>
                  <option value="admin">Admin</option>
                  <option value="doctor">Dokter</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  name="password"
                  value={payload.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold"
                  style={{ backgroundColor: "#4954FD" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default TambahDokter;
