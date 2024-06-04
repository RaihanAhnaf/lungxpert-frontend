import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../auth/Login";
import Sidebar from "../component/Sidebar";
import LandingPage from "../views/LandingPage";
import DataPasien from "../views/DataPasien";
import Varian from "../views/Varian";
import VarianDetailTbc from "../views/VarianDetailTbc";
import Klasifikasi from "../views/Klasifikasi";
import VariannDetailPneu from "../views/VariannDetailPneu";
import VarianDetailCvd from "../views/VarianDetailCvd";
import VarianDetailNrml from "../views/VarianDetailNrml";
import DataPasienDetail from "../views/DataPasienDetail";
import DataPasienEdit from "../views/DataPasienEdit";
import AdminDashboard from "../admin/AdminDashboard";
import TambahDokter from "../admin/TambahDokter";
import EditDokter from "../admin/EditDokter";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/klasifikasi" element={<Klasifikasi />} />
        <Route path="/datapasien" element={<DataPasien />} />
        <Route path="/varian" element={<Varian />} />
        <Route path="/detailtbc" element={<VarianDetailTbc />} />
        <Route path="/detailpneu" element={<VariannDetailPneu />} />
        <Route path="/detailcvd" element={<VarianDetailCvd />} />
        <Route path="/detailnrml" element={<VarianDetailNrml />} />
        <Route path="/detaildatapasien/:id" element={<DataPasienDetail />} />
        <Route path="/editdatapasien/:id" element={<DataPasienEdit />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-tambahdokter" element={<TambahDokter />} />
        <Route path="/admin-editdokter/:id" element={<EditDokter />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
