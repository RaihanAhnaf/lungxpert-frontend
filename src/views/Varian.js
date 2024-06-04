import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { profile } from "../api/AuthAPI";

const Varian = () => {
  const [user, setUser] = useState(null);

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
      <div className="px-5 pt-3 pb-5">
        <h4 className="text-end">Dr. {user?.name ?? "-"}</h4>
        <h3 className="text-start mt-3">Varian Penyakit Paru</h3>
        <div className="row w-100 mt-5 text-start">
          <div className="col-md-6">
            <img src="assets/img/normal.png" />
            <div className="row">
              <h3 className="col-md-6 mt-4">Normal</h3>
              <Link to="/detailnrml" className="col-md-6 mt-4">
                <button className="form-inline px-4 py-2">Lihat Detail</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src="assets/img/tuberkulosis.png" />
            <div className="row">
              <h3 className="col-md-6 mt-4">Tuberkulosis</h3>
              <Link to="/detailtbc" className="col-md-6 mt-4">
                <button className="form-inline px-4 py-2">Lihat Detail</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row w-100 mt-5 text-start">
          <div className="col-md-6">
            <img src="assets/img/covid.png" />
            <div className="row">
              <h3 className="col-md-6 mt-4">Covid-19</h3>
              <Link to="/detailcvd" className="col-md-6 mt-4">
                <button className="form-inline px-4 py-2">Lihat Detail</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src="assets/img/pneumonia.png" />
            <div className="row">
              <h3 className="col-md-6 mt-4">Pneumonia</h3>
              <Link to="/detailpneu" className="col-md-6 mt-4">
                <button className="form-inline px-4 py-2">Lihat Detail</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Varian;
