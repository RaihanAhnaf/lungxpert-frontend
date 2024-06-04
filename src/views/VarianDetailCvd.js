import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { profile } from "../api/AuthAPI";

function VarianDetailCvd() {
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
      <div className="px-2 pt-3 pb-5">
        <h4 className="text-end">Dr. {user?.name ?? "-"}</h4>
        <div className="box px-4 py-4 mt-5">
          <div className="row">
            <div className="col-md-4 text-start">
              <h4>Covid-19</h4>
              <img src="assets/img/covid.png" className="h-50 mt-3" />
            </div>
            <div className="col-md-8 text-start">
              <p>
                Pada gambar toraks seseorang yang menderita COVID-19, beberapa
                temuan yang mungkin terlihat adalah sebagai berikut:
              </p>
              <div className="row">
                <li className="col-md-3">
                  <b>Infiltrat bilateral</b>
                </li>
                <p className="col-md-9">
                  COVID-19 sering kali menyebabkan infiltrat bilateral pada
                  paru-paru. Infiltrat ini terlihat sebagai area bayangan yang
                  muncul di kedua sisi paru-paru pada gambar toraks. Area ini
                  biasanya tampak sebagai area konsolidasi atau area yang tampak
                  lebih gelap yang menunjukkan adanya peradangan dan
                  penggumpalan cairan atau sel-sel di dalam paru-paru.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Ground-glass opacity (GGO)</b>
                </li>
                <p className="col-md-9">
                  GGO adalah temuan yang sering terlihat pada gambar toraks
                  pasien COVID-19. GGO terlihat sebagai area yang memiliki
                  peningkatan kekeruhan pada paru-paru, tetapi masih
                  mempertahankan struktur akibat pengisian cairan atau
                  inflamasi. Area GGO ini tampak seperti kabut putih atau
                  seperti kaca yang digores.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Konsolidasi paru</b>
                </li>
                <p className="col-md-9">
                  Pada beberapa kasus COVID-19 yang lebih parah, gambar toraks
                  dapat menunjukkan konsolidasi paru. Konsolidasi adalah kondisi
                  di mana paru-paru mengalami penggumpalan yang signifikan
                  karena adanya cairan, sel-sel peradangan, dan jaringan yang
                  terpengaruh. Konsolidasi terlihat sebagai area yang tampak
                  lebih gelap dan lebih padat pada gambar toraks.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Efusi pleura</b>
                </li>
                <p className="col-md-9">
                  Meskipun jarang terjadi, COVID-19 dapat menyebabkan efusi
                  pleura, yaitu penumpukan cairan di antara lapisan paru-paru
                  dan dinding dada. Pada gambar toraks, efusi pleura dapat
                  terlihat sebagai gambaran bayangan di samping paru-paru yang
                  menunjukkan adanya cairan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VarianDetailCvd;
