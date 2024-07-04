'use client';

/*import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../../layout';

const EditPengguna = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({ nama: '', email: '' });

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(response => {
      if (response.ok) {
        router.push('/admin/pengguna');
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
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
  );
};

export default EditPengguna; */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Menggunakan useRouter dari next/navigation
import AdminLayout from '../../layout';

const EditPengguna = () => {
  const router = useRouter();
  const { query } = router; // Mengambil seluruh objek query dari router
  const [user, setUser] = useState({ nama: '', email: '' });

  useEffect(() => {
    const fetchData = async () => {
      if (!query || !query.id || typeof window === 'undefined') {
        console.error('User id tidak terdefinisi');
        return;
      }

      // Simulasi data fetching dari API (ganti dengan fetch sesungguhnya)
      const fetchedUsers = [
        { id_user: 1, nama: 'John Doe', email: 'john.doe@example.com' },
        { id_user: 2, nama: 'Jane Doe', email: 'jane.doe@example.com' },
        { id_user: 3, nama: 'Michael Smith', email: 'michael.smith@example.com' },
      ];

      const foundUser = fetchedUsers.find(user => user.id_user.toString() === query.id);
      if (foundUser) {
        setUser(foundUser);
      } else {
        console.error(`User dengan id ${query.id} tidak ditemukan`);
      }
    };

    fetchData();
  }, [query]); // Menggunakan query sebagai dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query || !query.id) {
      console.error('User id tidak terdefinisi');
      return;
    }

    try {
      // Simulasi update data ke backend (ganti dengan fetch sesungguhnya)
      console.log('Mengirim data profil yang diubah:', user);

      // Simulasi respon sukses dari backend
      console.log('Profil pengguna berhasil diperbarui');

      router.push('/admin/pengguna');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  // Render loading state while fetching data
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
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
  );
};

export default EditPengguna;
