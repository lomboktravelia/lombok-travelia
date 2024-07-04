'use client';

 /* import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../layout';

const KelolaPengguna = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.id_user !== id));
        }
      });
  };

  return (
    <AdminLayout showSidebar={true}>
      <h1 className="text-2xl font-bold mb-4">Kelola Pengguna</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nama Pengguna</th>
            <th className="py-2">Email</th>
            <th className="py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_user}>
              <td className="border px-4 py-2">{user.nama}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <Link href={{ pathname: '/admin/pengguna/edit', query: { id: user.id_user } }}>
                  <a className="text-blue-500 mr-4">✏️</a>
                </Link>
                <button onClick={() => deleteUser(user.id_user)} className="text-red-500">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          border: 1px solid #ddd;
        }
        th {
          background-color: #f4f4f4;
        }
      `}</style>
    </AdminLayout>
  );
};

export default KelolaPengguna; */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../layout';

const KelolaPengguna = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulasi data fetching
    const fetchUsers = () => {
      const fetchedUsers = [
        { id_user: 1, nama: 'John Doe', email: 'john.doe@example.com' },
        { id_user: 2, nama: 'Jane Doe', email: 'jane.doe@example.com' },
        { id_user: 3, nama: 'Michael Smith', email: 'michael.smith@example.com' },
      ];
      setUsers(fetchedUsers);
    };

    // Simulasi waktu fetching data
    setTimeout(fetchUsers, 1000); // Ganti dengan fetch data dari API sesungguhnya
  }, []);

  const deleteUser = (id) => {
    // Implementasi fungsi delete user dari backend
    console.log(`Deleting user with id ${id}`);
    // Contoh implementasi jika menggunakan state
    setUsers(users.filter(user => user.id_user !== id));
  };

  return (
    <AdminLayout showSidebar={true}>
      <h1 className="text-2xl font-bold mb-4">Kelola Pengguna</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nama Pengguna</th>
            <th className="py-2">Email</th>
            <th className="py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_user}>
              <td className="border px-4 py-2">{user.nama}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <Link href={{ pathname: '/admin/pengguna/edit', query: { id: user.id_user } }} passHref>
                  <button className="text-blue-500 mr-4">✏️ Edit</button>
                </Link>
                <button onClick={() => deleteUser(user.id_user)} className="text-red-500">🗑️ Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          border: 1px solid #ddd;
        }
        th {
          background-color: #f4f4f4;
        }
      `}</style>
    </AdminLayout>
  );
};

export default KelolaPengguna;
