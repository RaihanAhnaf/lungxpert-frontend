import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { profile } from "../api/AuthAPI";

function VariannDetailPneu() {
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
              <h4>Pneumonia</h4>
              <img src="assets/img/pneumonia.png" className="h-50 mt-3" />
            </div>
            <div className="col-md-8 text-start">
              <p>
                Pneumonia adalah infeksi pada paru-paru yang dapat disebabkan
                oleh berbagai mikroorganisme seperti bakteri, virus, atau jamur.
                Pada gambar toraks seseorang yang menderita pneumonia, beberapa
                temuan yang mungkin terlihat adalah sebagai berikut:
              </p>
              <div className="row">
                <li className="col-md-3">
                  <b>Infiltrat</b>
                </li>
                <p className="col-md-9">
                  Pada gambar toraks, akan terlihat adanya bayangan atau area
                  yang tampak lebih gelap di dalam paru-paru. Infiltrat ini
                  menunjukkan adanya peradangan dan penggumpalan cairan atau
                  sel-sel di dalam paru-paru. Area konsolidasi ini bisa berupa
                  bercak kecil atau luas tergantung pada tingkat keparahan
                  infeksi.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Atelectasis</b>
                </li>
                <p className="col-md-9">
                  Atelectasis adalah kondisi di mana paru-paru mengalami kolaps
                  sebagian atau keseluruhan. Pada gambar toraks, dapat terlihat
                  adanya area paru-paru yang tampak lebih kecil atau tidak
                  mengembang dengan baik. Atelectasis dapat terjadi karena
                  blokade saluran udara oleh lendir atau karena adanya tekanan
                  dari infiltrat pneumonia.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Efusi Pleura</b>
                </li>
                <p className="col-md-9">
                  Pada beberapa kasus pneumonia, terjadi efusi pleura, yaitu
                  penumpukan cairan di antara lapisan paru-paru dan dinding
                  dada. Pada gambar toraks, efusi pleura dapat terlihat sebagai
                  gambaran bayangan di samping paru-paru yang menunjukkan adanya
                  cairan.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Penebalan garis-garis bronkial</b>
                </li>
                <p className="col-md-9">
                  Pada pneumonia, garis-garis bronkial yang merupakan saluran
                  udara di dalam paru-paru dapat mengalami penebalan atau
                  pembesaran. Pada gambar toraks, garis-garis ini terlihat lebih
                  tebal dan lebih terlihat daripada yang normal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VariannDetailPneu;
