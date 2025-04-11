"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ScheduleRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard/schedule');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Redirection en cours...</h2>
        <p className="mt-2 text-gray-600">Vous allez être redirigé vers le planificateur de publications.</p>
      </div>
    </div>
  );
} 