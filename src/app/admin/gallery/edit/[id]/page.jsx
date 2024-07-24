"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GalleryForm from '@/components/galleryForm';
import AdminLayout from '../../../layout';

const EditPicture = ({params}) => {
  const { id } = params;
  const [picture, setPicture] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPicture = async () => {
      const response = await fetch(`/api/gallery/${id}`);
      const data = await response.json();
      setPicture(data);
    };
    fetchPicture();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal memperbarui gambar');
      }

      router.push('/admin/gallery');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Gallery</h1>
        {picture && <GalleryForm initialData={picture} onSubmit={handleSubmit} />}
      </div>
    </AdminLayout>
  );
};

export default EditPicture;
