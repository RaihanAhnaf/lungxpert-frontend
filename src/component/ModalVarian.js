import React, { useEffect, useState } from "react";
import ImageZoom from "react-image-zooom";
import Normal from "./Normal";
import Tuberkulosis from "./Tuberkulosis";
import Pneumonia from "./Pneumonia";
import Covid from "./Covid";

const ModalVarian = ({ onClose, imgPath }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [select, setSelected] = useState("pilihVarian");

  const [normalContentVisible, setNormalContentVisible] = useState(false);
  const [tuberkulosisContentVisible, setTuberkulosisContentVisible] =
    useState(false);
  const [pneumoniaContentVisible, setPneumoniaContentVisible] = useState(false);
  const [covidContentVisible, setCovidContentVisible] = useState(false);

  useEffect(() => {
    select === "normal"
      ? setNormalContentVisible(true)
      : setNormalContentVisible(false);
    select === "tuberkulosis"
      ? setTuberkulosisContentVisible(true)
      : setTuberkulosisContentVisible(false);
    select === "pneumonia"
      ? setPneumoniaContentVisible(true)
      : setPneumoniaContentVisible(false);
    select === "covid"
      ? setCovidContentVisible(true)
      : setCovidContentVisible(false);
  }, [select]);

  const handleOnChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div
      className={`top-0 start-0 position-fixed vw-100 vh-100 d-flex align-items-center px-4`}
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 999 }}
    >
      <div className="col-md-6" onClick={() => setIsZoomed(!isZoomed)}>
        <ImageZoom
          src={imgPath}
          alt="lung image"
          zoom="200"
          className={`${isZoomed ? "w-100" : ""}`}
        />
      </div>
      <div className="col-md-6 container position-relative box px-4 py-4">
        <button
          className="btn-close position-absolute btn-sm top-0 end-0 mt-4 me-4"
          onClick={onClose}
        ></button>
        <select
          className="form-select"
          value={select}
          onChange={handleOnChange}
        >
          <option value="pilihVarian">Pilih Varian</option>
          <option value="normal">Normal</option>
          <option value="tuberkulosis">Tuberkulosis</option>
          <option value="pneumonia">Pneumonia</option>
          <option value="covid">Covid-19</option>
        </select>

        {/* <h2 className="text-start">Tuberkulosis</h2>
        <div className="text-start">
          <p>
            Tuberkulosis (TB) adalah penyakit infeksi bakteri yang dapat
            menyerang paru-paru dan organ lain dalam tubuh. Pada gambar toraks
            seseorang yang menderita TB, beberapa temuan yang mungkin terlihat
            adalah sebagai berikut:
          </p>
          <div className="row">
            <li className="col-md-3">
              <b>Lesi Kavitasi</b>
            </li>
            <p className="col-md-9">
              Pada kasus TB paru yang lebih lanjut, gambar toraks dapat
              menunjukkan adanya lesi kavitasi. Lesi ini terlihat sebagai ruang
              kosong dengan dinding yang terlihat pada gambar toraks. Lesi
              kavitasi terbentuk karena bakteri TB merusak jaringan paru-paru
              dan membentuk rongga di dalamnya.
            </p>
          </div>
          <div className="row">
            <li className="col-md-3">
              <b>Infiltrat</b>
            </li>
            <p className="col-md-9">
              Adalah gambaran bayangan yang muncul pada gambar toraks dan
              menunjukkan adanya infeksi aktif di paru-paru. Infiltrat biasanya
              terlihat sebagai area yang tampak lebih gelap atau area
              konsolidasi di paru-paru. Ini mengidentifikasikan adanya
              peradangan dan pengumpulan cairan atau sel-sel di dalam paru-paru.
            </p>
          </div>
          <div className="row">
            <li className="col-md-3">
              <b>Efusi Pleura</b>
            </li>
            <p className="col-md-9">
              yaitu penumpukan cairan di antara lapisan paru-paru dan dinding
              dada. Pada gambar toraks, efusi pleura terlihat sebagai gambaran
              bayangan di samping paru-paru. Ini menunjukkan adanya cairan yang
              mengisi ruang di antara paru-paru dan dinding dada.
            </p>
          </div>
          <div className="row">
            <li className="col-md-3">
              <b>Pembesaran kelenjar getah bening</b>
            </li>
            <p className="col-md-9">
              Pada gambar toraks, pembesaran ini dapat terlihat sebagai
              pembesaran atau bayangan yang lebih besar dari biasanya di daerah
              kelenjar getah bening.
            </p>
          </div>
        </div> */}
        {/* <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#4954FD" }}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-outine-primary ms-1"
            style={{ borderColor: "#4954FD", color: "#4954FD" }}
          >
            Next
          </button>
        </div> */}
        {normalContentVisible && <Normal />}
        {tuberkulosisContentVisible && <Tuberkulosis />}
        {pneumoniaContentVisible && <Pneumonia />}
        {covidContentVisible && <Covid />}
      </div>
    </div>
  );
};

export default ModalVarian;
