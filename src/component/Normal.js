import React from "react";

const Normal = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-start">Normal</h2>
      <div className="text-start">
        <p>
          Gambaran toraks yang normal dan sehat akan menunjukkan struktur
          paru-paru dan organ di sekitarnya dalam kondisi yang baik. Beberapa
          ciri-ciri dari gambaran toraks yang normal adalah sebagai berikut:
        </p>
        <div className="row">
          <li className="col-md-3">
            <b>Paru-paru</b>
          </li>
          <p className="col-md-9">
            Paru-paru terlihat jelas dan berisi udara dengan baik. Tidak ada
            tanda-tanda infiltrat atau konsolidasi yang menunjukkan adanya
            infeksi atau peradangan. Jaringan paru-paru tampak seragam dan tidak
            ada area yang menonjol atau menonjol secara tidak wajar.
          </p>
        </div>
        <div className="row">
          <li className="col-md-3">
            <b>Tulang dada</b>
          </li>
          <p className="col-md-9">
            Tulang dada terlihat jelas dan tidak menunjukkan tanda-tanda fraktur
            atau perubahan struktural lainnya. Ruang di antara tulang-tulang
            rusuk tampak normal, menunjukkan tidak adanya efusi pleura atau
            cairan yang tidak biasa.
          </p>
        </div>
        <div className="row">
          <li className="col-md-3">
            <b>Jantung</b>
          </li>
          <p className="col-md-9">
            Jantung terletak di tempatnya yang normal di dalam rongga dada dan
            tidak menunjukkan pembesaran yang tidak biasa atau perubahan
            struktural lainnya. Kontur jantung terlihat jelas dan tidak ada
            tanda-tanda pembesaran atrium atau ventrikel yang tidak normal.
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
            Tulang belakang terlihat dengan baik di bagian tengah gambar toraks
            tanpa tanda-tanda patah tulang atau deformitas lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Normal;
