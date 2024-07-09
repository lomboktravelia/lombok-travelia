"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DestinationForm from '@/components/destinationForm';
import AdminLayout from '../../../layout';

export default function EditDestination({ params }) {
  const router = useRouter();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function fetchDestination() {
      const res = await fetch(`/api/destinasi?id=${params.id}`);
      const { data } = await res.json();
      setInitialData(data);
    }

    fetchDestination();
  }, [params.id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/destinasi?id=${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal mengupdate destinasi');
      }

      // Redirect to admin destination page after successful submit
      router.push('/admin/destinasi');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error if necessary
    }
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Destinasi</h1>
        {initialData ? (
          <DestinationForm onSubmit={handleSubmit} initialData={initialData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </AdminLayout>
  );
}
