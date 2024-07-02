import { useState } from 'react';

export default function PackageForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    nama_paket: initialData.nama_paket || '',
    jenis_paket: initialData.jenis_paket || '',
    deskripsi: initialData.deskripsi || '',
    daerah_wisata: initialData.daerah_wisata || '',
    itinerary: initialData.itinerary || '',
    include: initialData.include || '',
    exclude: initialData.exclude || '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    for (const key in formData) {
      formDataWithFile.append(key, formData[key]);
    }
    if (file) {
      formDataWithFile.append('picture', file);
    }
    onSubmit(formDataWithFile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Nama Paket Tour</label>
        <input
          type="text"
          name="nama_paket"
          value={formData.nama_paket}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Jenis Paket Tour</label>
        <select
          name="jenis_paket"
          value={formData.jenis_paket}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Pilih Paket Tour</option>
          <option value="Paket Reguler">Paket Reguler</option>
          <option value="Paket Extraordinary">Paket Extraordinary</option>
          <option value="Paket Honeymoon">Paket Honeymoon</option>
          <option value="Paket One Day Trip">Paket One Day Trip</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">Picture</label>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Deskripsi</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div>
        <label className="block mb-2">Daerah Wisata</label>
        <input
          type="text"
          name="daerah_wisata"
          value={formData.daerah_wisata}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Itinerary</label>
        <input
          type="text"
          name="itinerary"
          value={formData.itinerary}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Include</label>
        <input
          type="text"
          name="include"
          value={formData.include}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Exclude</label>
        <input
          type="text"
          name="exclude"
          value={formData.exclude}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {initialData.id_tour ? 'Edit' : 'Tambah'}
      </button>
    </form>
  );
}


