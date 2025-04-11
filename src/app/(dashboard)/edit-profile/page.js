"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function EditProfile() {
  // Données fictives du profil
  const [profile, setProfile] = useState({
    name: 'Jean Dupont',
    username: 'jeandupont',
    email: 'jean.dupont@example.com',
    bio: 'Photographe passionné | Créateur de contenu | Voyageur',
    location: 'Paris, France',
    website: 'www.jeandupont.com',
    profilePic: null,
  });

  // État pour gérer le chargement
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fonction de mise à jour du profil
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'une requête API
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Profil mis à jour avec succès !');
      
      // Effacer le message après 3 secondes
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1000);
  };

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Modifier le profil</h1>
        <Link
          href="/dashboard/profile"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Retour au profil
        </Link>
      </div>

      {successMessage && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{successMessage}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Informations personnelles</h3>
              <p className="mt-1 text-sm text-gray-500">
                Ces informations seront affichées sur votre profil public.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Nom d'utilisateur
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={profile.username}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={profile.bio}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Courte description pour votre profil. Les hashtags et emojis sont autorisés.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Localisation
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Site web
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    value={profile.website}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Photo de profil
                </label>
                <div className="mt-2 flex items-center">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    {profile.profilePic ? (
                      <img src={profile.profilePic} alt="Profil" className="h-full w-full object-cover" />
                    ) : (
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </div>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Changer
                  </button>
                  <button
                    type="button"
                    className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Sécurité du compte</h3>
              <p className="mt-1 text-sm text-gray-500">
                Gérez la sécurité de votre compte.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/dashboard/edit-profile/password"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Changer le mot de passe
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link
              href="/dashboard/profile"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className={`ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}