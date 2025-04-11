import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <div className="bg-blue-700 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              À propos de Bestgram
            </h1>
            <p className="max-w-3xl mt-6 mx-auto text-xl text-blue-100">
              Découvrez notre mission et l'équipe qui rend tout cela possible.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Notre mission
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            Bestgram a été créé avec un objectif simple : aider les créateurs de contenu, les influenceurs et les entreprises à maximiser leur présence sur Instagram sans passer des heures à gérer manuellement leur compte.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Nous croyons que chacun devrait pouvoir se concentrer sur la création de contenu de qualité, pendant que nous nous occupons de l'analytique, de l'optimisation et de la croissance.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre équipe
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Une équipe passionnée d'experts en médias sociaux, développeurs et data scientists.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Thomas Dupont</h3>
                <p className="mt-1 text-sm text-blue-600">CEO & Co-fondateur</p>
                <p className="mt-3 text-base text-gray-500">
                  Expert en marketing digital avec plus de 10 ans d'expérience dans les médias sociaux.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Marie Laurent</h3>
                <p className="mt-1 text-sm text-blue-600">CTO & Co-fondatrice</p>
                <p className="mt-3 text-base text-gray-500">
                  Développeuse full-stack et data scientist, spécialisée dans l'analyse des réseaux sociaux.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <svg className="h-24 w-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Alexandre Moreau</h3>
                <p className="mt-1 text-sm text-blue-600">Responsable Produit</p>
                <p className="mt-3 text-base text-gray-500">
                  Passionné par l'expérience utilisateur et le développement de produits innovants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos valeurs
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Simplicité</h3>
            <p className="mt-4 text-base text-gray-500">
              Nous créons des outils puissants mais simples à utiliser pour tous.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Innovation</h3>
            <p className="mt-4 text-base text-gray-500">
              Nous repoussons constamment les limites de ce qui est possible.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Communication</h3>
            <p className="mt-4 text-base text-gray-500">
              Nous croyons en une communication transparente avec nos utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 