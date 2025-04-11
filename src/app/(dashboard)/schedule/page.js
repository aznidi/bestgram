"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function SchedulePage() {
  // États pour le formulaire
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  // État pour les publications planifiées
  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      image: '/img/post1.jpg',
      caption: 'La vie est faite de petits moments de bonheur ✨ #lifestyle #happy',
      date: '2023-12-10',
      time: '19:30',
      status: 'scheduled'
    },
    {
      id: 2,
      image: '/img/post2.jpg',
      caption: 'Explorer de nouveaux endroits 🌍 #travel #adventure',
      date: '2023-12-15',
      time: '12:00',
      status: 'scheduled'
    },
    {
      id: 3,
      image: '/img/post3.jpg',
      caption: 'Délicieux brunch du dimanche 🍳 #foodie #sundaybrunch',
      date: '2023-12-05',
      time: '10:00',
      status: 'published'
    }
  ]);
  
  // État pour le filtre de statut
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Gestion de l'upload d'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Planifier une nouvelle publication
  const handleSchedulePost = (e) => {
    e.preventDefault();
    
    // Vérifier si tous les champs requis sont remplis
    if (!caption || !date || !time || !previewImage) {
      alert('Veuillez remplir tous les champs obligatoires et sélectionner une image.');
      return;
    }
    
    // Créer une nouvelle publication planifiée
    const newPost = {
      id: Date.now(),
      image: previewImage,
      caption: caption,
      date: date,
      time: time,
      hashtags: hashtags,
      status: 'scheduled'
    };
    
    // Ajouter la nouvelle publication à la liste
    setScheduledPosts([newPost, ...scheduledPosts]);
    
    // Réinitialiser le formulaire
    setCaption('');
    setDate('');
    setTime('');
    setHashtags('');
    setSelectedImage(null);
    setPreviewImage(null);
    
    // Afficher une confirmation
    alert('Publication planifiée avec succès !');
  };
  
  // Supprimer une publication planifiée
  const deleteScheduledPost = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette publication planifiée ?')) {
      setScheduledPosts(scheduledPosts.filter(post => post.id !== id));
    }
  };
  
  // Filtrer les publications selon le statut
  const filteredPosts = statusFilter === 'all' 
    ? scheduledPosts 
    : scheduledPosts.filter(post => post.status === statusFilter);
    
  // Fonction pour formater la date en français
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Planificateur de publications</h1>
        <p className="mt-2 text-gray-600">
          Programmez vos posts Instagram à l'avance pour maintenir une présence constante.
        </p>
      </div>
      
      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de planification */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Nouvelle publication</h2>
            
            <form onSubmit={handleSchedulePost} className="space-y-6">
              {/* Upload d'image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image
                </label>
                <div className="flex items-center justify-center w-full">
                  {previewImage ? (
                    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={previewImage} 
                        alt="Aperçu" 
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedImage(null);
                          setPreviewImage(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Cliquez pour uploader</span> ou glissez et déposez
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG ou JPEG (max. 5MB)
                        </p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>
              </div>
              
              {/* Légende */}
              <div>
                <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
                  Légende
                </label>
                <textarea
                  id="caption"
                  rows={4}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Écrivez une légende pour votre publication..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              {/* Hashtags */}
              <div>
                <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700 mb-2">
                  Hashtags
                </label>
                <textarea
                  id="hashtags"
                  rows={2}
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                  placeholder="#instagram #marketing #socialmedia"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              {/* Date et heure */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Heure
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              {/* Bouton de soumission */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Planifier la publication
                </button>
              </div>
            </form>
          </div>
          
          {/* Conseils pour le planning */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-4">Conseils pour la planification</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Publiez aux heures de pointe (18h-21h) pour maximiser l'engagement</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Maintenir un rythme régulier de 3-4 publications par semaine</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Utilisez 8-15 hashtags pertinents pour augmenter la visibilité</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Varier les types de contenu (photos, carrousels, vidéos courtes)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Publications planifiées */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Publications planifiées</h2>
              <div className="inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={() => setStatusFilter('all')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                    statusFilter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Toutes
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('scheduled')}
                  className={`px-4 py-2 text-sm font-medium ${
                    statusFilter === 'scheduled'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Planifiées
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('published')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                    statusFilter === 'published'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Publiées
                </button>
              </div>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune publication {statusFilter === 'all' ? '' : statusFilter === 'scheduled' ? 'planifiée' : 'publiée'}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {statusFilter === 'all'
                    ? 'Commencez par planifier votre première publication !'
                    : statusFilter === 'scheduled'
                    ? 'Planifiez votre première publication !'
                    : 'Vos publications apparaîtront ici une fois publiées.'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="flex flex-col sm:flex-row bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                    {/* Image du post */}
                    <div className="sm:w-1/3 h-48 sm:h-auto bg-gray-200 flex-shrink-0">
                      {post.image.startsWith('/') ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <span className="text-4xl">📷</span>
                        </div>
                      ) : (
                        <img
                          src={post.image}
                          alt={`Post ${post.id}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    {/* Informations du post */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Statut et horaire */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {post.status === 'published' ? 'Publié' : 'Planifié'}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.date)} à {post.time}
                        </span>
                      </div>
                      
                      {/* Légende */}
                      <p className="text-gray-700 mb-4 flex-grow">
                        {post.caption}
                      </p>
                      
                      {/* Actions */}
                      <div className="flex justify-between items-center mt-auto">
                        <div className="space-x-2">
                          {post.status === 'scheduled' && (
                            <>
                              <button 
                                className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                              >
                                Modifier
                              </button>
                              <button 
                                className="inline-flex items-center px-2 py-1 border border-red-300 text-xs font-medium rounded shadow-sm text-red-700 bg-white hover:bg-red-50"
                                onClick={() => deleteScheduledPost(post.id)}
                              >
                                Supprimer
                              </button>
                            </>
                          )}
                          {post.status === 'published' && (
                            <button 
                              className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Voir les stats
                            </button>
                          )}
                        </div>
                        
                        {post.status === 'scheduled' && (
                          <button 
                            className="inline-flex items-center px-2 py-1 border border-indigo-300 text-xs font-medium rounded shadow-sm text-indigo-700 bg-white hover:bg-indigo-50"
                          >
                            Publier maintenant
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Calendrier des publications (version simplifiée) */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Calendrier de publication</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-gray-700">Le calendrier complet sera disponible dans la prochaine mise à jour.</p>
        </div>
      </div>
    </div>
  );
} 