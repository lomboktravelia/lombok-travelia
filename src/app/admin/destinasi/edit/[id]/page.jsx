"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import DestinationForm from '@/components/destinationForm';
import AdminLayout from '../../../layout';

const EditDestinasi = ({ params }) => {
  const [initialData, setInitialData] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchDestinasi = async () => {
      try {
        const response = await fetch(`/api/destinasi/${id}`);
        const data = await response.json();
        if (data.status === 200) {
          console.log(data); // Pastikan data yang diterima dari API sesuai dengan yang diharapkan
          setInitialData({
            id: data.data.id_destinasi,
            nama_destinasi: data.data.nama_destinasi,
            jenis_destinasi: data.data.jenis_destinasi,
            deskripsi: data.data.deskripsi,
            harga: data.data.harga,
            picture: data.data.image_url,
          });
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDestinasi();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/destinasi/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.status === 200) {
        router.push('/admin/destinasi');
      } else {
        console.error('Failed to update data:', data.message);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Destinasi</h1>
        {initialData ? (
          <DestinationForm onSubmit={handleSubmit} initialData={initialData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default EditDestinasi;
