"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  // Données fictives pour le graphique
  const [monthlyData] = useState([
    { month: 'Jan', followers: 3200 },
    { month: 'Feb', followers: 3500 },
    { month: 'Mar', followers: 3800 },
    { month: 'Apr', followers: 4300 },
    { month: 'May', followers: 4700 },
    { month: 'Jun', followers: 5100 },
    { month: 'Jul', followers: 5482 },
  ]);

  // Comptes fictifs connectés
  const connectedAccounts = [
    { name: 'main_account', followers: 5482, engagement: '3.2%', growth: '+12%' },
    { name: 'business_account', followers: 2134, engagement: '4.5%', growth: '+8%' },
  ];

  // Statistiques récentes
  const recentStats = [
    { name: 'Followers', value: '5,482', change: '+2.5%', trend: 'up' },
    { name: 'Engagement', value: '3.2%', change: '+0.8%', trend: 'up' },
    { name: 'Posts', value: '152', change: '+3', trend: 'up' },
    { name: 'Impressions', value: '18.2k', change: '-1.2%', trend: 'down' },
  ];

  // Calcul du max pour le graphique
  const maxFollowers = Math.max(...monthlyData.map(d => d.followers));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <div>
          <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
            <option>3 derniers mois</option>
            <option>Année en cours</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {recentStats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {stat.value}
                <span className="ml-2 text-sm font-medium text-gray-500">sur Instagram</span>
              </div>

              <div className={`flex items-baseline text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                <svg
                  className={`h-5 w-5 flex-shrink-0 self-center ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      stat.trend === 'up'
                        ? 'M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
                        : 'M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'
                    }
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </dd>
          </div>
        ))}
      </div>

      {/* Graph */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Évolution des abonnés</h3>
          <div className="mt-6" style={{ height: '300px' }}>
            <div className="h-full flex items-end">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="w-1/7 flex flex-col items-center">
                  <div 
                    className="w-12 bg-blue-500 rounded-t" 
                    style={{ 
                      height: `${(data.followers / maxFollowers) * 250}px`,
                    }}
                  ></div>
                  <div className="mt-2 text-xs text-gray-500">{data.month}</div>
                  <div className="text-xs font-medium">{data.followers}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Comptes connectés</h3>
            <Link
              href="/dashboard/accounts"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Voir tous
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Compte
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Abonnés
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Engagement
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Croissance
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {connectedAccounts.map((account) => (
                      <tr key={account.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="ml-4">@{account.name}</div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {account.followers.toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {account.engagement}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600">
                          {account.growth}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <Link
                            href={`/dashboard/accounts/${account.name}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Détails<span className="sr-only">, {account.name}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Générateur de hashtags</dt>
                  <dd>
                    <div className="text-sm text-gray-900">
                      Trouvez les meilleurs hashtags pour votre prochain post
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/hashtags"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Générer
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Planifier du contenu</dt>
                  <dd>
                    <div className="text-sm text-gray-900">
                      Programmez vos posts Instagram à l'avance
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/scheduler"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Planifier
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Analyser les followers</dt>
                  <dd>
                    <div className="text-sm text-gray-900">
                      Identifiez les comptes inactifs et faux followers
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/analytics"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Analyser
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 