"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FollowersAnalysis() {
  // État pour les données d'analyse des followers
  const [followerStats] = useState({
    total: 5482,
    growth: {
      weekly: 702,
      monthly: 1243,
      percentage: 12.4
    },
    engagement: 3.2,
    averageComments: 48,
    averageLikes: 421
  });

  // Données fictives pour les followers
  const [followers] = useState([
    { id: 1, username: 'fashion_lover', name: 'Sophie Martin', avatar: '/img/avatars/1.jpg', following: true, engagement: 'Élevé', posts: 342, followers: 1200 },
    { id: 2, username: 'travel_addict', name: 'Thomas Dubois', avatar: '/img/avatars/2.jpg', following: true, engagement: 'Élevé', posts: 156, followers: 843 },
    { id: 3, username: 'food_is_life', name: 'Emma Petit', avatar: '/img/avatars/3.jpg', following: true, engagement: 'Moyen', posts: 98, followers: 567 },
    { id: 4, username: 'photo_pro', name: 'Lucas Bernard', avatar: '/img/avatars/4.jpg', following: true, engagement: 'Faible', posts: 412, followers: 2300 },
    { id: 5, username: 'fitness_girl', name: 'Julie Leroux', avatar: '/img/avatars/5.jpg', following: false, engagement: 'Moyen', posts: 267, followers: 1458 },
    { id: 6, username: 'tech_geek', name: 'Nicolas Fournier', avatar: '/img/avatars/6.jpg', following: true, engagement: 'Élevé', posts: 189, followers: 967 },
    { id: 7, username: 'beauty_tips', name: 'Caroline Durand', avatar: '/img/avatars/7.jpg', following: true, engagement: 'Faible', posts: 321, followers: 1876 },
    { id: 8, username: 'art_gallery', name: 'Antoine Moreau', avatar: '/img/avatars/8.jpg', following: false, engagement: 'Moyen', posts: 143, followers: 756 }
  ]);

  // État pour le filtre d'engagement
  const [engagementFilter, setEngagementFilter] = useState('all');
  
  // État pour le filtre de suivi
  const [followingFilter, setFollowingFilter] = useState('all');
  
  // État pour la recherche
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtrer les followers
  const filteredFollowers = followers.filter(follower => {
    // Filtre par engagement
    if (engagementFilter !== 'all' && follower.engagement.toLowerCase() !== engagementFilter) {
      return false;
    }
    
    // Filtre par suivi
    if (followingFilter === 'following' && !follower.following) {
      return false;
    }
    if (followingFilter === 'not_following' && follower.following) {
      return false;
    }
    
    // Filtre par recherche
    if (searchQuery && !follower.username.toLowerCase().includes(searchQuery.toLowerCase()) && !follower.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Données pour le graphique de croissance des followers (fictif)
  const growthData = [
    { date: '01/11', followers: 4239 },
    { date: '08/11', followers: 4398 },
    { date: '15/11', followers: 4756 },
    { date: '22/11', followers: 5123 },
    { date: '29/11', followers: 5482 }
  ];
  
  // Données pour la répartition des followers (fiction)
  const followerSegments = [
    { name: 'Très actifs', percentage: 15, color: 'bg-green-500' },
    { name: 'Actifs', percentage: 35, color: 'bg-blue-500' },
    { name: 'Occasionnels', percentage: 30, color: 'bg-yellow-500' },
    { name: 'Inactifs', percentage: 15, color: 'bg-orange-500' },
    { name: 'Faux comptes', percentage: 5, color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Analyse des abonnés</h1>
        <p className="mt-2 text-gray-600">
          Comprenez votre audience Instagram et optimisez votre stratégie de contenu.
        </p>
      </div>
      
      {/* Statistiques des followers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total d'abonnés</h2>
              <p className="mt-1 text-xl font-semibold text-gray-900">{followerStats.total.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            +{followerStats.growth.percentage}% ce mois-ci
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Nouveaux abonnés</h2>
              <p className="mt-1 text-xl font-semibold text-gray-900">+{followerStats.growth.weekly} <span className="text-sm text-gray-500">cette semaine</span></p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            +{followerStats.growth.monthly} ce mois-ci
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-pink-100 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Engagement moyen</h2>
              <p className="mt-1 text-xl font-semibold text-gray-900">{followerStats.engagement}%</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {followerStats.averageLikes} likes, {followerStats.averageComments} commentaires en moyenne
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Taux de conversion</h2>
              <p className="mt-1 text-xl font-semibold text-gray-900">2.4%</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Des vues aux abonnés
          </div>
        </div>
      </div>
      
      {/* Graphiques et analyses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Graphique d'évolution des abonnés */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Évolution des abonnés</h2>
          
          <div className="relative h-64">
            {/* Axe Y */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
              <span>5500</span>
              <span>5000</span>
              <span>4500</span>
              <span>4000</span>
            </div>
            
            {/* Graphique */}
            <div className="absolute left-8 right-0 top-0 bottom-0">
              <div className="w-full h-full flex items-end">
                {growthData.map((data, index) => {
                  const height = ((data.followers - 4000) / 1500) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-4/5 rounded-t-lg bg-gradient-to-t from-indigo-500 to-purple-500"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="mt-2 text-xs text-gray-500">{data.date}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Lignes horizontales */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-t border-gray-200 h-0"></div>
                <div className="border-t border-gray-200 h-0"></div>
                <div className="border-t border-gray-200 h-0"></div>
                <div className="border-t border-gray-200 h-0"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Répartition des abonnés par engagement */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Segmentation des abonnés</h2>
          
          <div className="space-y-4">
            {followerSegments.map((segment) => (
              <div key={segment.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">{segment.name}</span>
                  <span className="text-sm font-medium text-gray-700">{segment.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${segment.color}`} 
                    style={{ width: `${segment.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Recommandations</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Créez du contenu spécifique pour les abonnés très actifs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Engagez-vous avec les abonnés occasionnels pour augmenter leur activité</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Envisagez de nettoyer les comptes inactifs et faux pour améliorer vos statistiques</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Liste des abonnés */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Analyse des abonnés importants</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un abonné..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex">
              <select
                value={engagementFilter}
                onChange={(e) => setEngagementFilter(e.target.value)}
                className="mr-2 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="all">Tous les engagements</option>
                <option value="élevé">Engagement élevé</option>
                <option value="moyen">Engagement moyen</option>
                <option value="faible">Engagement faible</option>
              </select>
              
              <select
                value={followingFilter}
                onChange={(e) => setFollowingFilter(e.target.value)}
                className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="all">Tous les abonnés</option>
                <option value="following">Abonnements réciproques</option>
                <option value="not_following">Non réciproques</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredFollowers.length === 0 ? (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun abonné trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">
              Essayez de modifier vos filtres ou votre recherche.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Abonné
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posts
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Abonnés
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFollowers.map((follower) => (
                  <tr key={follower.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          {follower.avatar.startsWith('/') ? (
                            <span className="text-lg font-medium text-gray-500">
                              {follower.username.charAt(0).toUpperCase()}
                            </span>
                          ) : (
                            <img 
                              src={follower.avatar} 
                              alt={follower.username}
                              className="h-10 w-10 object-cover"
                            />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            @{follower.username}
                          </div>
                          <div className="text-sm text-gray-500">
                            {follower.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        follower.engagement === 'Élevé' 
                          ? 'bg-green-100 text-green-800' 
                          : follower.engagement === 'Moyen'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {follower.engagement}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {follower.posts}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {follower.followers.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {follower.following ? (
                        <span className="text-green-600 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Vous suit
                        </span>
                      ) : (
                        <span className="text-gray-400 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Ne vous suit pas
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        Voir le profil
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Interagir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Actions et recommandations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Nettoyage des abonnés</h3>
          <p className="text-sm text-gray-600 mb-4">
            Identifiez et retirez les faux comptes et les abonnés inactifs pour améliorer votre taux d'engagement.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Analyser les inactifs
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Engagement ciblé</h3>
          <p className="text-sm text-gray-600 mb-4">
            Interagissez avec vos abonnés les plus engagés pour augmenter la fidélité et la portée de vos publications.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Trouver les meilleurs abonnés
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Analyse concurrentielle</h3>
          <p className="text-sm text-gray-600 mb-4">
            Comparez votre audience avec celle de comptes similaires pour identifier de nouvelles opportunités.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Lancer l'analyse
          </button>
        </div>
      </div>
    </div>
  );
}
</rewritten_file>