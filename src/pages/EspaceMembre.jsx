import React, { useState } from 'react';

export default function EspaceMembre() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, ajoute la logique d'authentification (API, etc.)
    if (email === 'membre@lirit.fr' && password === 'motdepasse') {
      setMessage('Connexion réussie !');
    } else {
      setMessage('Identifiants invalides.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lirit text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-lirit/90 p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Espace membre</h2>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 rounded text-black"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2">Mot de passe</label>
        <input
          type="password"
          className="w-full p-2 mb-4 rounded text-black"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-lirit font-bold py-2 rounded hover:bg-gray-200"
        >
          Se connecter
        </button>
        {message && <div className="mt-4 text-center">{message}</div>}
      </form>
    </div>
  );
}