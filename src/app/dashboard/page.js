"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRoot() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard/creative');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Chargement du tableau de bord...</h2>
        <p className="mt-2 text-gray-600">Veuillez patienter pendant que nous préparons votre dashboard.</p>
      </div>
    </div>
  );
} 