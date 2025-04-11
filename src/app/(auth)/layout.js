import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="mb-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Bestgram</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Bienvenue</h2>
          </div>
          {children}
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 flex justify-center items-center">
          <div className="max-w-2xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Développez votre présence Instagram</h2>
            <p className="text-xl">Analysez, gérez et boostez votre compte Instagram avec Bestgram</p>
          </div>
        </div>
      </div>
    </div>
  );
} 