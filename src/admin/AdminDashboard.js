import React, { useRef, useEffect, useState } from "react";
import LayoutAdmin from "../layout/LayoutAdmin";
import "datatables.net-responsive-bs5";
import $ from "jquery";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../api/UsersAPI";
import { toast } from "react-toastify";

$.DataTable = require("datatables.net-bs5");

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const tableRef = useRef();

  const getUsersService = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
    });
    getUsersService();
    return () => table.destroy();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Apakah user ini ingin dihapus?")) {
        const promise = deleteUser({ id });
        toast.promise(promise, {
          pending: "Memuat...",
          success: {
            render({ data }) {
              getUsersService();
              return "User Berhasil Dihapus";
            },
          },
          error: {
            render({ err }) {
              console.error({ err });
              return "User Gagal Dihapus";
            },
          },
        });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <LayoutAdmin>
      <div className="px-2 pt-3 pb-5">
        <h4 className="text-end">Admin</h4>
        <div className="row">
          <h3 className="col-md-9 text-start mt-3">Data Dokter</h3>
          <Link
            to="/admin-tambahdokter"
            className="col-md-2 btn btn-sm btn-success text-light mt-4 mb-1 ms-auto"
          >
            Tambah Dokter
          </Link>
        </div>
        <div id="data-pasien" className="mt-5">
          {users.length !== 0 ? (
            <table className="table table-bordered table-striped table-hover display table-sx w-100">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Dokter</th>
                  <th>Email</th>
                  <th>Tanggal Lahir</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.length != 0 &&
                  users.map((user, idx) => (
                    <tr key={user.id}>
                      <td>{idx + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.birth_date ?? "-"}</td>
                      <td>
                        <div className="d-flex justify-content-center px-4">
                          <Link
                            to={`/admin-editdokter/${user.id}`}
                            className="btn btn-sm btn-warning text-light me-2 col-4"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger text-light me-2 col-4"
                            onClick={() => handleDelete(user.id)}
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p>Data Masih Kosong</p>
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdminDashboard;
