"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CreativeDashboard() {
  // Données fictives pour les statistiques
  const [accountData] = useState({
    username: 'votre_compte',
    profile: '/profile-placeholder.jpg',
    followers: 5482,
    following: 722,
    posts: 152,
    engagement: 3.2,
    growth: 12.4,
    impressions: 18200,
    reachRate: 68,
    bestTime: '19:00'
  });

  // Données de posts récents
  const [recentPosts] = useState([
    { id: 1, image: '/img/post1.jpg', likes: 432, comments: 56, date: '2 jours' },
    { id: 2, image: '/img/post2.jpg', likes: 387, comments: 42, date: '4 jours' },
    { id: 3, image: '/img/post3.jpg', likes: 521, comments: 78, date: '1 semaine' },
    { id: 4, image: '/img/post4.jpg', likes: 298, comments: 28, date: '1 semaine' }
  ]);

  // Données de tendances des followers
  const [followerTrend] = useState([
    { day: 'Lun', value: 78 },
    { day: 'Mar', value: 62 },
    { day: 'Mer', value: 85 },
    { day: 'Jeu', value: 90 },
    { day: 'Ven', value: 110 },
    { day: 'Sam', value: 132 },
    { day: 'Dim', value: 145 }
  ]);

  // Distribution des followers
  const [followerDemographics] = useState([
    { name: '18-24', percentage: 35 },
    { name: '25-34', percentage: 40 },
    { name: '35-44', percentage: 15 },
    { name: '45+', percentage: 10 }
  ]);

  // Palette de couleurs
  const colors = {
    primary: '#4F46E5',    // Indigo 600
    secondary: '#7C3AED',  // Violet 600
    accent: '#F43F5E',     // Rose 500
    success: '#10B981',    // Emerald 500
    warning: '#F59E0B',    // Amber 500
    info: '#3B82F6',       // Blue 500
    background: '#F9FAFB'  // Gray 50
  };

  return (
    <div className="space-y-8">
      {/* En-tête du dashboard */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white shadow-lg">
        <div className="absolute right-0 top-0 opacity-20">
          <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M47.7,-61.9C59.9,-47.8,67.2,-30.9,70.8,-13.2C74.4,4.6,74.2,23.2,65.7,35.9C57.2,48.6,40.3,55.3,23.5,62.3C6.6,69.3,-10.2,76.6,-26.3,74.1C-42.5,71.7,-57.9,59.5,-66.3,43.8C-74.6,28.1,-75.8,8.9,-72.8,-9.2C-69.8,-27.3,-62.5,-44.3,-49.9,-58C-37.3,-71.7,-19.3,-82.1,-0.4,-81.5C18.4,-81,36.8,-69.5,47.7,-61.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="relative flex items-center space-x-6">
          <div className="h-20 w-20 rounded-full bg-white/30 flex items-center justify-center overflow-hidden">
            <span className="text-4xl font-bold">
              {accountData.username.charAt(0).toUpperCase()}
            </span>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold">Bienvenue, @{accountData.username}</h1>
            <p className="mt-1 text-white/80">
              Votre présence Instagram continue de croître ! {accountData.growth > 0 ? '🚀' : ''}
            </p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/70">Abonnés</div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">{accountData.followers.toLocaleString()}</span>
              <span className="ml-2 text-sm font-medium text-green-300">+{accountData.growth}%</span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/70">Engagement</div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">{accountData.engagement}%</span>
              <span className="ml-2 text-sm font-medium text-white/60">des abonnés</span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/70">Publications</div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">{accountData.posts}</span>
              <span className="ml-2 text-sm font-medium text-white/60">au total</span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/70">Impressions</div>
            <div className="mt-2 flex items-baseline">
              <span className="text-2xl font-bold">{(accountData.impressions/1000).toFixed(1)}k</span>
              <span className="ml-2 text-sm font-medium text-white/60">cette semaine</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section principale du dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Graphique de croissance */}
        <div className="lg:col-span-2 rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Croissance d'abonnés</h2>
            <div className="inline-flex rounded-md shadow-sm">
              <button className="rounded-l-md px-3 py-1 text-sm bg-indigo-100 text-indigo-700 font-medium">Semaine</button>
              <button className="px-3 py-1 text-sm text-gray-500">Mois</button>
              <button className="rounded-r-md px-3 py-1 text-sm text-gray-500">Année</button>
            </div>
          </div>
          
          <div className="h-72 flex items-end space-x-1">
            {followerTrend.map((day, index) => (
              <div key={day.day} className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-t-lg relative" style={{
                  height: `${day.value * 0.5}px`,
                  background: `linear-gradient(to top, ${colors.primary}, ${colors.secondary})`
                }}>
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    +{day.value}
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">{day.day}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              +{followerTrend.reduce((sum, day) => sum + day.value, 0)} nouveaux abonnés cette semaine
            </div>
          </div>
        </div>
        
        {/* Performances des posts récents */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Meilleures publications</h2>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={post.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <div className="h-14 w-14 flex-shrink-0 bg-gray-200 rounded-md flex items-center justify-center">
                  {/* Placeholder pour l'image */}
                  <span className="text-2xl">📷</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    Post #{post.id}
                  </p>
                  <p className="text-xs text-gray-500">
                    Il y a {post.date}
                  </p>
                </div>
                <div className="flex space-x-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.comments}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/dashboard/posts" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Voir tous les posts →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Statistiques avancées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-indigo-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Taux de portée</h3>
              <div className="mt-1 text-xl font-semibold text-gray-900">{accountData.reachRate}%</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            Pourcentage d'abonnés qui voient vos posts
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-purple-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Meilleur moment</h3>
              <div className="mt-1 text-xl font-semibold text-gray-900">{accountData.bestTime}</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            Heure optimale pour publier selon vos données
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-pink-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-pink-100 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Taux d'engagement</h3>
              <div className="mt-1 text-xl font-semibold text-gray-900">{accountData.engagement}%</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            Interactions avec vos contenus (likes, commentaires)
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-md border-t-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Ratio Following</h3>
              <div className="mt-1 text-xl font-semibold text-gray-900">
                1:{(accountData.followers / accountData.following).toFixed(1)}
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            Rapport entre abonnés et abonnements
          </div>
        </div>
      </div>
      
      {/* Démographie des abonnés */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Démographie des abonnés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Répartition par âge</h3>
            <div className="space-y-4">
              {followerDemographics.map((demographic) => (
                <div key={demographic.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{demographic.name}</span>
                    <span className="text-sm font-medium text-gray-700">{demographic.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${demographic.percentage}%`,
                        background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Répartition par emplacement</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="mt-2 text-sm text-gray-600">Carte interactive des abonnés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/dashboard/hashtags" className="group relative rounded-xl bg-white p-6 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Générateur de hashtags</h3>
          <p className="text-sm text-gray-600">Trouvez les hashtags les plus pertinents pour vos prochains posts.</p>
          <div className="absolute top-6 right-6 text-indigo-400 group-hover:text-indigo-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
        
        <Link href="/dashboard/schedule" className="group relative rounded-xl bg-white p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Planificateur de posts</h3>
          <p className="text-sm text-gray-600">Programmez vos publications à l'avance pour maximiser votre impact.</p>
          <div className="absolute top-6 right-6 text-purple-400 group-hover:text-purple-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
        
        <Link href="/dashboard/followers" className="group relative rounded-xl bg-white p-6 shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Analyse des abonnés</h3>
          <p className="text-sm text-gray-600">Identifiez les comptes inactifs et les fans les plus fidèles.</p>
          <div className="absolute top-6 right-6 text-pink-400 group-hover:text-pink-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
} 