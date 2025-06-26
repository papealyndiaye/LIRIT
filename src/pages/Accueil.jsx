import React, { useRef, useState } from 'react';
import EquipeList from '../components/EquipeList';
import ProjetsPublications from './ProjetsPublications';
import Blog from './Blog';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import AxesSection from './axes';

export default function Accueil() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRecherche, setOpenRecherche] = useState(false);
  const [openRessources, setOpenRessources] = useState(false);
  const equipesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToEquipes = (e) => {
    e.preventDefault();
    equipesRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

 

  return (
    <div className="min-h-screen bg-transparent font-sans">
      {/* Header */}
      <header className="bg-white-900  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="" alt="" className="h-8" />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold items-center">
            <a href="/" className="hover:text-red-500 hover:underline underline-offset-4">Accueil</a>
            
            {/* Menu Recherche */}
            <div className="relative">
              <button
                onClick={() => setOpenRecherche(v => !v)}
                className="hover:text-red-500 hover:underline underline-offset-4 flex items-center gap-1"
                type="button"
              >
                Recherche
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openRecherche && (
                <div className="absolute left-0 mt-2 w-48 rounded bg-white text-gray-900 shadow-lg z-20">
                  {/* Lien vers la page Axes */}
                  <a href="/axes" className="block px-4 py-2 hover:bg-gray-100">Axes de recherche</a>
                  <a href="#equipes" onClick={e => {e.preventDefault(); scrollToEquipes(e); setMenuOpen(false); setOpenRecherche(false);}} className="block px-4 py-2 hover:bg-gray-100">Équipes (ILIAD & RIISC)</a>
                </div>
              )}
            </div>

            <a href="/espace-membre" className="hover:text-red-500 hover:underline underline-offset-4">Espace membre</a>
            
            {/* Menu Ressources */}
            <div className="relative">
              <button
                onClick={() => setOpenRessources(v => !v)}
                className="hover:text-red-500 hover:underline underline-offset-4 flex items-center gap-1"
                type="button"
              >
                Ressources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openRessources && (
                <div className="absolute left-0 mt-2 w-56 rounded bg-white text-gray-900 shadow-lg z-20">
                  <a href="/projets-publications" className="block px-4 py-2 hover:bg-gray-100">Projets et Publications</a>
                  <a href="#blog" onClick={e => {e.preventDefault(); document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); setOpenRessources(false);}} className="block px-4 py-2 hover:bg-gray-100">Blog scientifique</a>
                </div>
              )}
            </div>

            <a href="#contact" onClick={scrollToContact} className="hover:text-red-500 hover:underline underline-offset-4">A propos</a>
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
            <a href="/" className="hover:text-red-500 hover:underline underline-offset-4">Accueil</a>
            {/* Lien direct vers la page Axes */}
            <a href="/axes" className="hover:text-red-500 hover:underline underline-offset-4">Axes de recherche</a>
            <a href="#equipes" onClick={scrollToEquipes} className="hover:text-red-500 hover:underline underline-offset-4">Équipes</a>
            <a href="/espace-membre" className="hover:text-red-500 hover:underline underline-offset-4">Espace membre</a>
            <a href="/projets-publications" className="hover:text-red-500 hover:underline underline-offset-4">Projets & Publications</a>
            <a href="#blog" onClick={e => {
              e.preventDefault();
              document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
              setMenuOpen(false);
            }} className="hover:text-red-500 hover:underline underline-offset-4">Blog scientifique</a>
            <a href="#contact" onClick={scrollToContact} className="hover:text-red-500 hover:underline underline-offset-4">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section style "We're changing the way people connect" */}
      <section
        className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full-7xl mx-auto width:'100vw' px-6 py-20 overflow-hidden"
        style={{ minHeight: 500 }}
      >
        {/* Vidéo de fond */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: 500, maxHeight: 700 }}
        >
          <source src="/bg1.mp4" type="video/mp4" />
        </video>

        {/* Texte à gauche avec animation */}
        <div className="w-full md:w-1/2 z-10 animate-fade-in-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Le Laboratoire Interdisciplinaire de Recherche  
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white">
            en Informatique et Télécommunications (LIRIT) regroupe des équipes dynamiques, des projets innovants et une communauté engagée pour faire avancer la recherche et l'innovation.
          </p>
          <div className="flex gap-4">
            <a
              href="/projets-publications"
              className="inline-block bg-white hover:bg-indigo-200 text-black py-3 px-8 rounded-full text-base transition animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Découvrir nos projets
            </a>
            <a
              href="/axes"
              className="inline-block font-semibold text-indigo-200 hover:underline underline-offset-4 py-3 px-4 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Nos axes de recherche →
            </a>
          </div>
        </div>
        {/* Images à droite avec animation */}
       
      </section>

      {/* Section Galerie & Médias */}
      <section className="bg-white py-16">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up">
      Unwavering in our commitment to trust
    </h2>
    <p className="text-center text-blue-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
      <a href="#" className="hover:underline flex items-center justify-center gap-1">
        Learn more about us <span aria-hidden>›</span>
      </a>
    </p>
    {/* Carousel d'images style GitHub */}
    <div className="relative flex items-center justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
      {/* Flèche gauche */}
      <button
        aria-label="Previous"
        className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Images */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Developers working"
          className="rounded-xl object-cover w-full h-56 transition-transform duration-700 hover:scale-105"
        />
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Woman with laptop"
          className="rounded-xl object-cover w-full h-56 transition-transform duration-700 hover:scale-105"
        />
      </div>
      {/* Flèche droite */}
      <button
        aria-label="Next"
        className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
    {/* Statistiques */}
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center mt-8">
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">73M+</div>
        <div className="text-gray-500 text-sm">Developers</div>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">100M+</div>
        <div className="text-gray-500 text-sm">Public repositories</div>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">1000s</div>
        <div className="text-gray-500 text-sm">Open source projects</div>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">1B+</div>
        <div className="text-gray-500 text-sm">Contributors</div>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">90+</div>
        <div className="text-gray-500 text-sm">Top Forbes companies</div>
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
        <div className="text-2xl md:text-3xl font-bold">4M+</div>
        <div className="text-gray-500 text-sm">Organizations</div>
      </div>
    </div>
  </div>
</section>

      {/* Section Blog */}
      <Blog />

      {/* Section Projets & Publications */}
      <div id="projets-publications">
        <ProjetsPublications />
      </div>

      {/* Section Equipes */}
      <section ref={equipesRef} id="equipes">
        <EquipeList />
      </section>

      {/* Section Contact */}
      <section ref={contactRef} id="contact">
        <footer className="bg-white text-gray-900 rounded-t-xl mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
              {/* Partie gauche : Solution + Réseaux sociaux */}
              <div className="w-full md:w-1/2 md:pr-8 flex flex-col">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-8 w-auto mb-2" />
                <p className="text-sm mb-2">Making the world a better place through constructing elegant hierarchies.</p>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-sm">Solution</h5>
                  <ul className="text-xs space-y-1">
                    <li><a href="/projets-publications" className="hover:underline">Projets & Publications</a></li>
                    <li><a href="/axes" className="hover:underline">Axes de recherche</a></li>
                    <li><a href="#equipes" className="hover:underline">Équipes</a></li>
                    <li><a href="#blog" className="hover:underline">Blog scientifique</a></li>
                  </ul>
                </div>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="hover:text-gray"><i className="fab fa-facebook fa-lg"></i></a>
                  <a href="#" className="hover:text-gray"><i className="fab fa-instagram fa-lg"></i></a>
                  <a href="#" className="hover:text-gray"><i className="fab fa-x-twitter fa-lg"></i></a>
                  <a href="#" className="hover:text-gray"><i className="fab fa-github fa-lg"></i></a>
                  <a href="#" className="hover:text-gray"><i className="fab fa-youtube fa-lg"></i></a>
                </div>
              </div>
              {/* Partie droite : Formulaire */}
              <div className="w-full md:w-1/2 md:pl-8">
                <h4 className="font-semibold text-gray mb-4 text-base">Contactez-nous</h4>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-2" autoComplete="off">
                  <div>
                    <label className="block text-xs font-medium mb-1" htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" htmlFor="prenom">Prénom</label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium mb-1" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition text-sm"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="my-6 border-gray-700" />
            <p className="text-xs text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Votre Société. Tous droits réservés.
            </p>
          </div>
        </footer>
      </section>

     
     
    </div>
  );
}
