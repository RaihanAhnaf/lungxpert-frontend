import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/AuthAPI";
import { toast } from "react-toastify";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const promise = login(payload);
    toast.promise(promise, {
      pending: "Memuat...",
      success: {
        render({ data }) {
          localStorage.setItem("token", data.data.data.token);
          if (data.data.data.user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/klasifikasi");
          }
          return "Login Berhasil";
        },
      },
      error: {
        render({ err }) {
          console.error({ err });
          return "Login Gagal";
        },
      },
    });
  };

  return (
    <div className="row w-100" style={{ height: "100vh" }}>
      <div className="col-6 py-4 px-5 text-start">
        <h4 style={{ fontWeight: "bold" }}>Masuk</h4>
        <p>Selamat Datang kembali! Silahkan masuk dengan akun Anda.</p>

        <div className="form">
          <form className="mt-5" onSubmit={onSubmit}>
            <div className="form-group">
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
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6 position-relative">
        <div id="loginimg"></div>
      </div>
    </div>
  );
};

export default Login;
