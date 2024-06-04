import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <nav className="ps-5 pe-5 navbar navbar-expand-lg navbar-dark bg-ungu">
        <img src="assets/img/logo-dashboard.png" alt="Logo" className="mt-4" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-items">
              <a className="nav-link text-white" href="#service">
                Layanan
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-link text-white" href="#work">
                Tentang
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-link text-white" href="#footer">
                Bergabung
              </a>
            </li>
          </ul>
          <Link to="/login">
            <button className="btn-try form-inline px-4 py-2">Masuk</button>
          </Link>
        </div>
      </nav>
      {/* hero section */}
      <div className="hero" id="hero">
        <div className="bg-sbar text-white">
          <div className="row w-100 ps-5">
            <div className="col-md-5 mt-5 text-start ps-5">
              <h3>Selamat Datang di</h3>
              <img src="assets/img/logo-hero.png" className="logo-hero" />
              <h4>
                Solusi Canggih Deteksi Penyakit <br /> pada Gambar X-ray
              </h4>
              <Link to="/login">
                <button className="btn-try px-4 py-2 my-3">
                  Coba Sekarang
                </button>
              </Link>
            </div>
            <div className="col-md-7 mt-3 mb-5">
              <img src="assets/img/laptop.png" className="h-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* Service section */}
      <div id="service">
        <h3 className="mt-5 mb-5">Layanan LungXpert</h3>
        <div className="row mx-5 mb-5 justify-content-around">
          <div className="card col-md-3 px-4 py-4 d-flex align-self-center">
            <div className="ungu">
              <h4>Deteksi Cepat dan Akurat</h4>
              <p>
                Dengan kecerdasan buatan terkini, LungXpert mampu menganalisis
                gambar x-ray dengan cepat. Hasil yang diberikan sangat akurat,
                membantu identifikasi dini penyakit paru-paru dan masalah
                kesehatan lainnya.
              </p>
            </div>
          </div>
          <div className="card col-md-3 px-4 py-4 d-flex align-self-center">
            <div className="ungu">
              <h4>Layanan Tanpa Batas</h4>
              <p>
                LungXpert memahami kebutuhan beragam pengguna. Oleh karena itu,
                kami menawarkan layanan tanpa batas, memungkinkan Anda
                mengunggah gambar sebanyak yang Anda butuhkan tanpa biaya
                tambahan.
              </p>
            </div>
          </div>
          <div className="card col-md-3 px-4 py-4 d-flex align-self-center">
            <div className="ungu">
              <h4>Akses kesehatan Dimanapun, Kapanpun</h4>
              <p>
                LungXpert memungkinkan akses kesehatan yang mudah dan efisien,
                membantu Anda mengambil langkah-langkah preventif lebih cepat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Work section */}
      <div className="row w-100 py-4" id="work">
        <div className="col-md-6">
          <img src="assets/img/work.png" />
        </div>
        <div className="col-md-6">
          <h3>Bagaimana LungXpert Bekerja?</h3>
          <div className="row text-start mt-4 ungu">
            <div className="col-md-1">
              <h4>1.</h4>
            </div>
            <div className="col-md-11">
              <h4>Unggah Gambar X-ray Anda</h4>
              <p>
                Mulai dengan mengunggah gambar rontgen dada Anda ke platform
                kami.
                <br /> Proses ini cepat dan sederhana.
              </p>
            </div>
          </div>
          <div className="row text-start mt-4 ungu">
            <div className="col-md-1">
              <h4>2.</h4>
            </div>
            <div className="col-md-11">
              <h4>Analisis Cepat</h4>
              <p>
                LungXpert akan segera menganalisis gambar tersebut menggunakan
                algoritma pintar kami untuk mendeteksi tanda-tanda penyakit pada
                paru-paru dan area terkait.
              </p>
            </div>
          </div>
          <div className="row text-start mt-4 ungu">
            <div className="col-md-1">
              <h4>3.</h4>
            </div>
            <div className="col-md-11">
              <h4>Hasil yang Akurat</h4>
              <p>
                Hasil analisis akan segera ditampilkan, memberikan informasi
                rinci tentang kondisi kesehatan Anda. Jika ditemukan tanda-tanda
                penyakit, LungXpert akan memberikan saran untuk konsultasi lebih
                lanjut dengan profesional medis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div className="bg-ungu pt-5 pb-1 px-3 text-white" id="footer">
        <h3>Bergabunglah dengan LungXpert Hari ini !</h3>
        <h5 className="mt-4 mb-5">
          Jangan biarkan ketidakpastian menghambat perjalanan kesehatan Anda.{" "}
          <br /> Bergabunglah dengan LungXpert hari ini dan nikmati layanan
          deteksi penyakit pada gambar rontgen dada yang canggih, cepat, dan
          andal. <br /> Kesehatan Anda layak mendapatkan yang terbaik!
        </h5>
        <p>LungXpert - Menjadikan Kesehatan Respiratori Anda Prioritas Kami.</p>
      </div>
    </div>
  );
};

export default LandingPage;
