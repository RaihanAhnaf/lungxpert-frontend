import React from "react";

const Covid = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-start">Covid</h2>
      <div className="text-start">
        <p>
          Pada gambar toraks seseorang yang menderita COVID-19, beberapa temuan
          yang mungkin terlihat adalah sebagai berikut:
        </p>
        <div className="row">
          <li className="col-md-3">
            <b>Infiltrat bilateral</b>
          </li>
          <p className="col-md-9">
            COVID-19 sering kali menyebabkan infiltrat bilateral pada paru-paru.
            Infiltrat ini terlihat sebagai area bayangan yang muncul di kedua
            sisi paru-paru pada gambar toraks. Area ini biasanya tampak sebagai
            area konsolidasi atau area yang tampak lebih gelap yang menunjukkan
            adanya peradangan dan penggumpalan cairan atau sel-sel di dalam
            paru-paru.
          </p>
        </div>
        <div className="row">
          <li className="col-md-3">
            <b>Ground-glass opacity (GGO)</b>
          </li>
          <p className="col-md-9">
            GGO adalah temuan yang sering terlihat pada gambar toraks pasien
            COVID-19. GGO terlihat sebagai area yang memiliki peningkatan
            kekeruhan pada paru-paru, tetapi masih mempertahankan struktur
            akibat pengisian cairan atau inflamasi. Area GGO ini tampak seperti
            kabut putih atau seperti kaca yang digores.
          </p>
        </div>
        <div className="row">
          <li className="col-md-3">
            <b>Konsolidasi paru</b>
          </li>
          <p className="col-md-9">
            Pada beberapa kasus COVID-19 yang lebih parah, gambar toraks dapat
            menunjukkan konsolidasi paru. Konsolidasi adalah kondisi di mana
            paru-paru mengalami penggumpalan yang signifikan karena adanya
            cairan, sel-sel peradangan, dan jaringan yang terpengaruh.
            Konsolidasi terlihat sebagai area yang tampak lebih gelap dan lebih
            padat pada gambar toraks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Covid;
