"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const EditPengguna = ({ params }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({ nama: "", email: "" });
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/users?id_user=${params?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.users[0]);
      });
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/api/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user?.nama,
        email: user?.email,
        id_user: params?.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(({ message }) => {
            Swal.fire({
              title: "Updated!",
              text: message,
              icon: "success",
            });
            router.push("/admin/pengguna");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white text-4xl font-bold">Loading...</div>
        </div>
      )}
      <AdminLayout showSidebar={true}>
        <h1 className="text-2xl font-bold mb-4">Edit Profil</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2">Nama</label>
            <input
              type="text"
              name="nama"
              value={user.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update Profil
          </button>
        </form>
      </AdminLayout>
    </>
  );
};

export default EditPengguna;
