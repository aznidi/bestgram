import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">Récupération de mot de passe</h2>
      <p className="mt-2 text-sm text-gray-600">
        Entrez votre adresse e-mail ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de passe.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Adresse e-mail
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Envoyer le lien de réinitialisation
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link href="/login" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Retour à la connexion
        </Link>
      </div>
    </div>
  );
} 