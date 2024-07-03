'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../layout';
import GalleryForm from '../../../components/galleryForm';

const GalleryPage = () => {
  const [galleries, setGalleries] = useState([
    { id: 1, name: 'Gili Trawangan.jpg', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Bukit Malimbu.jpg', image: '/path/to/image2.jpg' },
    { id: 3, name: 'View laut via Villa Hantu.jpg', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Hutan Pusuk.jpg', image: '/path/to/image4.jpg' },
    { id: 5, name: 'Desa Adat Sasak Sade.jpg', image: '/path/to/image5.jpg' },
    { id: 6, name: 'Desa Tenun Sukarare.jpg', image: '/path/to/image6.jpg' },
  ]);

  const router = useRouter();

  const handleShow = (id) => {
    const gallery = galleries.find(g => g.id === id);
    if (gallery) {
      alert(`Menampilkan: ${gallery.name}`);
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/gallery/edit/${id}`);
  };

  const handleDelete = (id) => {
    setGalleries(galleries.filter(g => g.id !== id));
  };

  const handleAddGallery = () => {
    router.push('/admin/gallery/tambah');
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Kelola Gallery</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={handleAddGallery}
        >
          Tambah Gallery
        </button>
      </div>
      <GalleryForm 
        galleries={galleries} 
        onShow={handleShow} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </AdminLayout>
  );
};

export default GalleryPage;
