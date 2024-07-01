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

