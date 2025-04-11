"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState('');
  const [industry, setIndustry] = useState('mode');
  const [generatedHashtags, setGeneratedHashtags] = useState([]);
  const [loading, setLoading] = useState(false);

  // Données fictives pour le tableau de tendances de hashtags
  const trendingHashtags = [
    { tag: 'fashion', posts: '456M', engagement: 'Élevé', growth: '+12%' },
    { tag: 'style', posts: '287M', engagement: 'Élevé', growth: '+8%' },
    { tag: 'photooftheday', posts: '987M', engagement: 'Moyen', growth: '+3%' },
    { tag: 'instagood', posts: '1.2B', engagement: 'Moyen', growth: '-1%' },
    { tag: 'instadaily', posts: '342M', engagement: 'Moyen', growth: '+5%' }
  ];

  // Industries pour le sélecteur
  const industries = [
    { id: 'mode', name: 'Mode et Beauté' },
    { id: 'food', name: 'Alimentation et Cuisine' },
    { id: 'travel', name: 'Voyage et Aventure' },
    { id: 'fitness', name: 'Fitness et Bien-être' },
    { id: 'tech', name: 'Technologie' },
    { id: 'art', name: 'Art et Design' },
    { id: 'business', name: 'Business et Entrepreneuriat' }
  ];

  // Statistiques fictives pour les hashtags
  const hashtagStats = [
    { name: 'Popularité', value: '68%', description: 'Basé sur le volume de posts récents' },
    { name: 'Engagement', value: '4.2%', description: 'Taux d\'interaction moyen' },
    { name: 'Concurrence', value: 'Moyenne', description: 'Difficulté pour se démarquer' },
    { name: 'Potentiel', value: 'Élevé', description: 'Capacité à atteindre de nouveaux abonnés' }
  ];

  // Simulation de génération de hashtags
  const generateHashtags = () => {
    setLoading(true);
    
    // Simuler un délai de chargement
    setTimeout(() => {
      // Données fictives basées sur le mot-clé et l'industrie
      const hashtagsData = {
        mode: [
          { tag: '#fashion', posts: '456M', engagement: '4.2%', difficulty: 'Élevée' },
          { tag: '#style', posts: '287M', engagement: '3.8%', difficulty: 'Moyenne' },
          { tag: '#ootd', posts: '345M', engagement: '4.5%', difficulty: 'Moyenne' },
          { tag: '#fashionista', posts: '187M', engagement: '3.9%', difficulty: 'Faible' },
          { tag: '#streetstyle', posts: '98M', engagement: '5.1%', difficulty: 'Faible' },
          { tag: '#fashionblogger', posts: '197M', engagement: '4.7%', difficulty: 'Moyenne' },
          { tag: '#stylish', posts: '76M', engagement: '3.2%', difficulty: 'Faible' },
          { tag: '#styleinspo', posts: '45M', engagement: '4.8%', difficulty: 'Faible' },
          { tag: '#fashionable', posts: '67M', engagement: '3.5%', difficulty: 'Faible' },
          { tag: '#lookoftheday', posts: '32M', engagement: '4.3%', difficulty: 'Faible' },
          { tag: '#fashionstyle', posts: '89M', engagement: '3.6%', difficulty: 'Moyenne' },
          { tag: '#fashionaddict', posts: '41M', engagement: '4.1%', difficulty: 'Faible' }
        ],
        food: [
          { tag: '#foodie', posts: '198M', engagement: '4.7%', difficulty: 'Moyenne' },
          { tag: '#foodporn', posts: '265M', engagement: '4.2%', difficulty: 'Élevée' },
          { tag: '#instafood', posts: '232M', engagement: '3.8%', difficulty: 'Élevée' },
          { tag: '#yummy', posts: '178M', engagement: '4.5%', difficulty: 'Moyenne' },
          { tag: '#delicious', posts: '143M', engagement: '3.9%', difficulty: 'Moyenne' },
          { tag: '#homemade', posts: '87M', engagement: '5.2%', difficulty: 'Faible' },
          { tag: '#foodlover', posts: '65M', engagement: '4.8%', difficulty: 'Faible' },
          { tag: '#cooking', posts: '54M', engagement: '4.3%', difficulty: 'Faible' },
          { tag: '#foodphotography', posts: '42M', engagement: '4.1%', difficulty: 'Faible' },
          { tag: '#foodblogger', posts: '38M', engagement: '5.3%', difficulty: 'Faible' },
          { tag: '#healthyfood', posts: '76M', engagement: '4.6%', difficulty: 'Moyenne' },
          { tag: '#lunch', posts: '58M', engagement: '3.7%', difficulty: 'Faible' }
        ],
        travel: [
          { tag: '#travel', posts: '587M', engagement: '4.3%', difficulty: 'Élevée' },
          { tag: '#travelphotography', posts: '178M', engagement: '4.7%', difficulty: 'Moyenne' },
          { tag: '#travelgram', posts: '154M', engagement: '4.1%', difficulty: 'Moyenne' },
          { tag: '#instatravel', posts: '128M', engagement: '3.9%', difficulty: 'Moyenne' },
          { tag: '#wanderlust', posts: '132M', engagement: '4.5%', difficulty: 'Moyenne' },
          { tag: '#adventure', posts: '112M', engagement: '4.8%', difficulty: 'Moyenne' },
          { tag: '#traveltheworld', posts: '56M', engagement: '5.2%', difficulty: 'Faible' },
          { tag: '#travelblogger', posts: '43M', engagement: '5.5%', difficulty: 'Faible' },
          { tag: '#exploremore', posts: '28M', engagement: '4.9%', difficulty: 'Faible' },
          { tag: '#travelholic', posts: '23M', engagement: '5.1%', difficulty: 'Faible' },
          { tag: '#travellife', posts: '32M', engagement: '4.6%', difficulty: 'Faible' },
          { tag: '#beautifuldestinations', posts: '47M', engagement: '4.2%', difficulty: 'Faible' }
        ]
      };
      
      // Par défaut, utiliser les hashtags de mode si l'industrie sélectionnée n'a pas de données
      setGeneratedHashtags(hashtagsData[industry] || hashtagsData.mode);
      setLoading(false);
    }, 1500);
  };

  // Copier les hashtags dans le presse-papier
  const copyHashtags = () => {
    const hashtagsText = generatedHashtags.map(item => item.tag).join(' ');
    navigator.clipboard.writeText(hashtagsText);
    alert('Hashtags copiés dans le presse-papier !');
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Générateur de Hashtags</h1>
        <p className="mt-2 text-gray-600">
          Trouvez les hashtags les plus pertinents pour augmenter la visibilité de vos posts Instagram.
        </p>
      </div>
      
      {/* Formulaire de génération */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
              Mot-clé principal
            </label>
            <input
              type="text"
              id="keyword"
              placeholder="Ex: mode, voyage, fitness..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industrie
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="col-span-1 flex items-end">
            <button
              type="button"
              onClick={generateHashtags}
              disabled={loading}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Génération en cours...
                </>
              ) : (
                'Générer des hashtags'
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Résultats */}
      {generatedHashtags.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Hashtags recommandés</h2>
            <button
              type="button"
              onClick={copyHashtags}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copier tous les hashtags
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generatedHashtags.map((hashtag, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-200">
                <div className="font-medium text-indigo-600">{hashtag.tag}</div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>{hashtag.posts} posts</span>
                  <span>{hashtag.engagement} engagement</span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-gray-500">Difficulté:</span>
                  <span className={`ml-2 text-xs font-medium ${
                    hashtag.difficulty === 'Élevée' ? 'text-red-500' :
                    hashtag.difficulty === 'Moyenne' ? 'text-amber-500' : 'text-green-500'
                  }`}>
                    {hashtag.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-medium text-indigo-700 mb-2">Ensemble de hashtags recommandé</h3>
            <p className="text-gray-600 break-all">
              {generatedHashtags.map(item => item.tag).join(' ')}
            </p>
          </div>
        </div>
      )}
      
      {/* Tendances de hashtags */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Hashtags tendance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hashtag
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posts
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Croissance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trendingHashtags.map((hashtag, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                    #{hashtag.tag}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hashtag.posts}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hashtag.engagement}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    hashtag.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {hashtag.growth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Conseils pour l'utilisation des hashtags */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Conseils pour utiliser les hashtags</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Combien de hashtags utiliser ?</h3>
            <p className="text-gray-600">
              Instagram permet jusqu'à 30 hashtags par post, mais l'idéal est d'utiliser entre 8 et 15 hashtags pertinents pour maximiser la portée sans paraître comme du spam.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Mélanger les types de hashtags</h3>
            <p className="text-gray-600">
              Utilisez un mélange de hashtags populaires, de niche et spécifiques à votre marque pour atteindre différents segments d'audience.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Évitez les hashtags bannis</h3>
            <p className="text-gray-600">
              Certains hashtags peuvent être bannis par Instagram et limiter la visibilité de votre post. Vérifiez toujours avant d'utiliser un nouveau hashtag.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Où placer les hashtags</h3>
            <p className="text-gray-600">
              Vous pouvez placer les hashtags dans la légende ou dans un commentaire juste après la publication. Les deux méthodes sont efficaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 