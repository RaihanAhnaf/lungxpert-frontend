import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { profile } from "../api/AuthAPI";

function VarianDetailNrml() {
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
              <h4>Normal</h4>
              <img src="assets/img/normal.png" className="h-50 mt-3" />
            </div>
            <div className="col-md-8 text-start">
              <p>
                Gambaran toraks yang normal dan sehat akan menunjukkan struktur
                paru-paru dan organ di sekitarnya dalam kondisi yang baik.
                Beberapa ciri-ciri dari gambaran toraks yang normal adalah
                sebagai berikut:
              </p>
              <div className="row">
                <li className="col-md-3">
                  <b>Paru-paru</b>
                </li>
                <p className="col-md-9">
                  Paru-paru terlihat jelas dan berisi udara dengan baik. Tidak
                  ada tanda-tanda infiltrat atau konsolidasi yang menunjukkan
                  adanya infeksi atau peradangan. Jaringan paru-paru tampak
                  seragam dan tidak ada area yang menonjol atau menonjol secara
                  tidak wajar.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Tulang dada</b>
                </li>
                <p className="col-md-9">
                  Tulang dada terlihat jelas dan tidak menunjukkan tanda-tanda
                  fraktur atau perubahan struktural lainnya. Ruang di antara
                  tulang-tulang rusuk tampak normal, menunjukkan tidak adanya
                  efusi pleura atau cairan yang tidak biasa.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Jantung</b>
                </li>
                <p className="col-md-9">
                  Jantung terletak di tempatnya yang normal di dalam rongga dada
                  dan tidak menunjukkan pembesaran yang tidak biasa atau
                  perubahan struktural lainnya. Kontur jantung terlihat jelas
                  dan tidak ada tanda-tanda pembesaran atrium atau ventrikel
                  yang tidak normal.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Kelenjar getah bening</b>
                </li>
                <p className="col-md-9">
                  Kelenjar getah bening di sekitar paru-paru dan di daerah dada
                  terlihat normal dan tidak membesar.
                </p>
              </div>
              <div className="row">
                <li className="col-md-3">
                  <b>Tulang belakang</b>
                </li>
                <p className="col-md-9">
                  Tulang belakang terlihat dengan baik di bagian tengah gambar
                  toraks tanpa tanda-tanda patah tulang atau deformitas lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VarianDetailNrml;
