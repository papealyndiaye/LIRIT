import React, { useRef, useState } from 'react';
import EquipeList from '../components/EquipeList';

export default function Accueil() {
  const [menuOpen, setMenuOpen] = useState(false);
  const equipesRef = useRef(null);

  const scrollToEquipes = (e) => {
    e.preventDefault();
    equipesRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav.svg" alt="EA" className="h-8" />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="/" className="hover:text-red-500">Accueil</a>
            <a href="/a-propos" className="hover:text-red-500">À propos du LIRIT</a>
            <a href="/axes" className="hover:text-red-500">Axes de recherche</a>
            <a href="#equipes" onClick={scrollToEquipes} className="hover:text-red-500">Équipes</a>
            <a href="/espace-membre" className="hover:text-red-500">Espace membre</a>
            <a href="/projets-publications" className="hover:text-red-500">Projets & Publications</a>
            <a href="/blog" className="hover:text-red-500">Blog scientifique</a>
            <a href="/contact" className="hover:text-red-500">Contact</a>
          </nav>
          {/* Burger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-neutral-900 px-6 pb-4 flex flex-col gap-2">
            <a href="/" className="hover:text-red-500">Accueil</a>
            <a href="/a-propos" className="hover:text-red-500">À propos du LIRIT</a>
            <a href="/axes" className="hover:text-red-500">Axes de recherche</a>
            <a href="#equipes" onClick={scrollToEquipes} className="hover:text-red-500">Équipes</a>
            <a href="/espace-membre" className="hover:text-red-500">Espace membre</a>
            <a href="/projets-publications" className="hover:text-red-500">Projets & Publications</a>
            <a href="/blog" className="hover:text-red-500">Blog scientifique</a>
            <a href="/contact" className="hover:text-red-500">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white flex items-center justify-center min-h-[250px]">
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-featured-image.jpg"
          alt="EA Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto py-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur le portail du LIRIT</h1>
          <p className="mb-6 text-lg md:text-2xl">Explorez nos axes de recherche, nos équipes, nos projets et publications, et bien plus encore.</p>
          <a href="/projets-publications" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition">
            Découvrir nos projets
          </a>
        </div>
      </section>

      {/* Section Equipes */}
      <section ref={equipesRef} id="equipes">
        <EquipeList />
      </section>
    </div>
  );
}