'use client';

import AdminLayout from '../../layout'; // Pastikan jalur impor ini benar

const AddGalleryPage = () => {
  const handleAddGallery = (e) => {
    e.preventDefault();
    // Logika untuk menambah galeri
    console.log('New Gallery Added');
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Tambah Gallery</h1>
        <form onSubmit={handleAddGallery}>
          <input
            type="text"
            placeholder="Upload Picture"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Tambah
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddGalleryPage;
