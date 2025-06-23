import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/lirit_backend/auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.status === 'success') {
      setMessage('Connexion réussie !');
      localStorage.setItem('user', JSON.stringify(data.user));
    } else {
      setMessage('Identifiants incorrects.');
    }
  };

  return (
    <div className="min-h-screen bg-lirit text-white flex items-center justify-center">
      <form className="bg-white text-black p-8 rounded shadow w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Connexion membre</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-lirit text-white px-4 py-2 w-full rounded">
          Se connecter
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
