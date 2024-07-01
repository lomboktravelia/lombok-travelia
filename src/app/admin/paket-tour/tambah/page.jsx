/*import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const TambahPaketTour = () => {
  const [namaPaket, setNamaPaket] = useState('');
  const [jenisPaket, setJenisPaket] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/paket-tour', {
        nama_paket: namaPaket,
        jenis_paket: jenisPaket,
        deskripsi,
        harga,
      });
      router.push('/admin/paket-tour');
    } catch (error) {
      console.error('Error adding paket tour:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tambah Paket Tour</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nama Paket Tour</label>
          <input
            type="text"
            value={namaPaket}
            onChange={(e) => setNamaPaket(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Jenis Paket Tour</label>
          <input
            type="text"
            value={jenisPaket}
            onChange={(e) => setJenisPaket(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Tambah Paket Tour
        </button>
      </form>
    </div>
  );
};

export default TambahPaketTour; */
/*
import { useRouter } from 'next/navigation';
import PackageForm from '@/components/packageForm';

export default function AddPackageTour() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    await fetch('/api/paket-tour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    router.push('/admin/paket-tour');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Paket Tour</h1>
      <PackageForm onSubmit={handleSubmit} />
    </div>
  );
}
*/

"use client";
import { useRouter } from 'next/navigation';
import PackageForm from '@/components/packageForm';

export default function AddPackageTour() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    await fetch('/api/paket-tour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    router.push('/admin/paket-tour');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Paket Tour</h1>
      <PackageForm onSubmit={handleSubmit} />
    </div>
  );
}

