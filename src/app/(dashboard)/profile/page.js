"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  // Données fictives du profil
  const [profile] = useState({
    name: 'Jean Dupont',
    username: 'jeandupont',
    email: 'jean.dupont@example.com',
    plan: 'Standard',
    planExpiry: '12 Dec 2023',
    profilePic: null,
    bio: 'Photographe passionné | Créateur de contenu | Voyageur',
    location: 'Paris, France',
    website: 'www.jeandupont.com',
    joinDate: 'Janvier 2022'
  });

  // Statistiques fictives du compte
  const [accountStats] = useState({
    posts: 152,
    followers: 5482,
    following: 722,
    engagement: '3.2%',
    growthRate: '+12% ce mois'
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Profil</h1>
        <Link
          href="/dashboard/edit-profile"
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Modifier le profil
        </Link>
      </div>

      {/* Profile Card */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              {profile.profilePic ? (
                <img
                  src={profile.profilePic}
                  alt="Profil"
                  className="h-full w-full object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              )}
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-medium leading-6 text-gray-900">{profile.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">@{profile.username}</p>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{profile.bio}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Nom complet</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Localisation</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.location}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Site web</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.website}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Plan actif</dt>
              <dd className="mt-1 text-sm text-blue-600 font-medium">{profile.plan}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Expiration du plan</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.planExpiry}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Date d'inscription</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.joinDate}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Actions</dt>
              <dd className="mt-2 text-sm text-gray-900">
                <span className="space-x-4">
                  <Link
                    href="/dashboard/edit-profile"
                    className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Modifier le profil
                  </Link>
                  <Link
                    href="/dashboard/edit-profile/password"
                    className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Changer le mot de passe
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Gérer l'abonnement
                  </Link>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Account Statistics */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Statistiques du compte Instagram</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Résumé de l'activité de votre compte @{profile.username}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              <div className="bg-gray-50 px-4 py-5 rounded-md shadow-sm">
                <dt className="text-sm font-medium text-gray-500 truncate">Publications</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">{accountStats.posts}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 rounded-md shadow-sm">
                <dt className="text-sm font-medium text-gray-500 truncate">Abonnés</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">{accountStats.followers}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 rounded-md shadow-sm">
                <dt className="text-sm font-medium text-gray-500 truncate">Abonnements</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">{accountStats.following}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 rounded-md shadow-sm">
                <dt className="text-sm font-medium text-gray-500 truncate">Engagement</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">{accountStats.engagement}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 rounded-md shadow-sm">
                <dt className="text-sm font-medium text-gray-500 truncate">Croissance</dt>
                <dd className="mt-1 text-xl font-semibold text-green-600">{accountStats.growthRate}</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Activité récente</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Dernières actions effectuées sur la plateforme
          </p>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Analyse des followers effectuée</p>
                <p className="text-sm text-gray-500">Il y a 2 jours</p>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Hashtags générés pour "photographie de paysage"</p>
                <p className="text-sm text-gray-500">Il y a 5 jours</p>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Publication planifiée pour le 15 octobre</p>
                <p className="text-sm text-gray-500">La semaine dernière</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 