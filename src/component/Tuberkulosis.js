import React from "react";

const Tuberkulosis = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-start">Tuberkulosis</h2>
      <div className="text-start">
        <p>
          Tuberkulosis (TB) adalah penyakit infeksi bakteri yang dapat menyerang
          paru-paru dan organ lain dalam tubuh. Pada gambar toraks seseorang
          yang menderita TB, beberapa temuan yang mungkin terlihat adalah
          sebagai berikut:
        </p>
        <div className="row">
          <li className="col-md-3">
            <b>Lesi Kavitasi</b>
          </li>
          <p className="col-md-9">
            Pada kasus TB paru yang lebih lanjut, gambar toraks dapat
            menunjukkan adanya lesi kavitasi. Lesi ini terlihat sebagai ruang
            kosong dengan dinding yang terlihat pada gambar toraks. Lesi
            kavitasi terbentuk karena bakteri TB merusak jaringan paru-paru dan
            membentuk rongga di dalamnya.
          </p>
        </div>
        <div className="row">
          <li className="col-md-3">
            <b>Infiltrat</b>
          </li>
          <p className="col-md-9">
            Adalah gambaran bayangan yang muncul pada gambar toraks dan
            menunjukkan adanya infeksi aktif di paru-paru. Infiltrat biasanya
            terlihat sebagai area yang tampak lebih gelap atau area konsolidasi
            di paru-paru. Ini mengidentifikasikan adanya peradangan dan
            pengumpulan cairan atau sel-sel di dalam paru-paru.
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
            Pada gambar toraks, pembesaran ini dapat terlihat sebagai pembesaran
            atau bayangan yang lebih besar dari biasanya di daerah kelenjar
            getah bening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tuberkulosis;
