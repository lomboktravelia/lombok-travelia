"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PackageForm from '@/components/packageForm';

export default function EditPackageTour() {
  const router = useRouter();
  const { id } = router.query;
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const res = await fetch(`/api/paket-tour/${id}`);
        const data = await res.json();
        setPackageData(data);
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (formData) => {
    await fetch(`/api/paket-tour/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    router.push('/admin/paket-tour');
  };

  if (!packageData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Paket Tour</h1>
      <PackageForm onSubmit={handleSubmit} initialData={packageData} />
    </div>
  );
}

