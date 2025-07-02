import React, { useRef, useState, useEffect } from 'react';
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
  const axesRef = useRef(null);

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

  // Composant pour animer les statistiques
  function StatistiqueAnimee({ valeurFinale, duration = 2000, ...props }) {
    const [valeur, setValeur] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = valeurFinale / (duration / 16); // 16ms ≈ 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= valeurFinale) {
          setValeur(valeurFinale);
          clearInterval(timer);
        } else {
          setValeur(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [valeurFinale, duration]);

    // Affichage avec le + si besoin
    return (
      <div {...props}>{valeur.toLocaleString()}+</div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent font-sans relative">
      {/* Première section avec vidéo de fond */}
      <div className="relative overflow-hidden" style={{ minHeight: 500 }}>
        {/* Vidéo de fond visible uniquement ici */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500"
          style={{ minHeight: '100%', maxHeight: 'none' }}
        >
          <source src="/bg3.mp4" type="video/mp4" />
        </video>
        {/* Header et Hero Section */}
        <header className="bg-transparent shadow-none relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="" alt="" className="h-8" />
            </a>
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-sm font-semibold items-center text-white">
              <a href="/" className="hover:text-indigo-200 hover:underline underline-offset-4">Accueil</a>
              {/* Menu Recherche */}
              <div className="relative">
                <button
                  onClick={() => setOpenRecherche(v => !v)}
                  className="hover:text-indigo-200 hover:underline underline-offset-4 flex items-center gap-1"
                  type="button"
                >
                  Recherche
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openRecherche && (
                  <div className="absolute left-0 mt-2 w-48 rounded bg-white text-gray-900 shadow-lg z-20">
                    <a href="/axes" className="block px-4 py-2 hover:bg-gray-100">Axes de recherche</a>
                    <a href="#equipes" onClick={e => {e.preventDefault(); scrollToEquipes(e); setMenuOpen(false); setOpenRecherche(false);}} className="block px-4 py-2 text-black hover:bg-gray-100">Équipes (ILIAD & RIISC)</a>
                  </div>
                )}
              </div>
              <a href="/espace-membre" className="hover:text-indigo-200 hover:underline underline-offset-4">Espace membre</a>
              {/* Menu Ressources */}
              <div className="relative">
                <button
                  onClick={() => setOpenRessources(v => !v)}
                  className="hover:text-indigo-200 hover:underline underline-offset-4 flex items-center gap-1"
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
              <a href="#contact" onClick={scrollToContact} className="hover:text-indigo-200 hover:underline underline-offset-4">A propos</a>
            </nav>
            {/* Burger */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-colors"></span>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-colors"></span>
              <span className="block w-6 h-0.5 bg-white transition-colors"></span>
            </button>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden bg-white bg-opacity-10 px-6 pb-4 flex flex-col gap-2 text-white">
              <a href="/" className="hover:text-indigo-200 hover:underline underline-offset-4">Accueil</a>
              <a href="/axes" className="hover:text-indigo-200 hover:underline underline-offset-4">Axes de recherche</a>
              <a href="#equipes" onClick={scrollToEquipes} className="hover:text-indigo-200 hover:underline underline-offset-4">Équipes</a>
              <a href="/espace-membre" className="hover:text-indigo-200 hover:underline underline-offset-4">Espace membre</a>
              <a href="/projets-publications" className="hover:text-indigo-200 hover:underline underline-offset-4">Projets & Publications</a>
              <a href="#blog" onClick={e => {
                e.preventDefault();
                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false);
              }} className="hover:text-indigo-200 hover:underline underline-offset-4">Blog scientifique</a>
              <a href="#contact" onClick={scrollToContact} className="hover:text-indigo-200 hover:underline underline-offset-4">Contact</a>
            </nav>
          )}
        </header>
        <section
          ref={axesRef}
          className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full-7xl mx-auto width:'100vw' px-6 py-20 overflow-hidden z-10"
          style={{ minHeight: 500 }}
        >
          {/* Texte à gauche avec animation */}
          <div className="w-full md:w-1/2 z-10 animate-fade-in-left flex flex-col justify-start mt-0 md:mt-[-40px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white">
              Laboratoire Interdisciplinaire de Recherche 
              en Informatique et Télécommunications 
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white">
              regroupe des équipes dynamiques, des projets innovants et une communauté engagée pour faire avancer la recherche et l'innovation.
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
      </div>

      {/* Le reste de la page n'a plus la vidéo de fond */}
      {/* Section Galerie & Médias */}
      <section className="bg-transparent py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up text-black">
            Principaux axes de recherche
          </h2>
          <p className="text-center text-indigo-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <a href="#" className="hover:underline flex items-center justify-center gap-1 text-black">
              Learn more about us <span aria-hidden>›</span>
            </a>
          </p>
          {/* Carousel d'images style GitHub */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 animate-carousel"
              style={{
                width: 'max-content',
                animation: 'carousel 25s linear infinite',
              }}
            >
              {[
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`carousel-${i}`}
                  className="rounded-xl object-cover h-56 w-96"
                />
              ))}
              {/* On duplique les images pour la boucle infinie */}
              {[
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
              ].map((src, i) => (
                <img
                  key={`dup-${i}`}
                  src={src}
                  alt={`carousel-dup-${i}`}
                  className="rounded-xl object-cover h-56 w-96"
                />
              ))}
            </div>
            <style>
              {`
                @keyframes carousel {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>
          {/* Statistiques */}

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center mt-8 items-center h-full flex justify-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={26} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Thèses Soutenues</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={32} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Doctorants</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '1.6s', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={20} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Projet</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '1.8', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={150} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Nombres de visite</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '1.5', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={11} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Partenaires</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '1.2', animationFillMode: 'both' }}>
              <StatistiqueAnimee valeurFinale={13} className="text-2xl md:text-3xl font-bold text-black" />
              <div className="font-bold text-black">Membres</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog */}
      <section className="bg-white bg-opacity-90 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Blog />
        </div>
      </section>

      {/* Section Projets & Publications */}
      <div id="projets-publications">
        <ProjetsPublications />
      </div>

      {/* Section Equipes */}
      <section ref={equipesRef} id="equipes">
        <EquipeList />
      </section>

            {/* Portraits de la semaine - Carousel infini */}
      <section className="w-full bg-[#232e6a] py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Bloc titre à gauche */}
          <div className="md:w-1/3 w-full flex flex-col items-center md:items-start px-6 py-8">
            <h2 className="text-4xl font-bold text-white mb-4">Portraits de la semaine</h2>
            <p className="text-white text-lg mb-6">
              Au quotidien, par leur engagement, ils font l’Ecole Supérieure Polytechnique.
            </p>
            <div className="bg-black p-4 rounded">
              <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 24L28 16L4 8L8 16L4 24Z" />
              </svg>
            </div>
          </div>
          {/* Carousel */}
          <div className="md:w-2/3 w-full overflow-hidden relative">
            <div
              className="flex gap-8 animate-portrait-carousel"
              style={{
                width: 'max-content',
                animation: 'portrait-carousel 30s linear infinite',
              }}
            >
              {[
                {
                  img: "/images/mandicou.jpg",
                  nom: "Dr Mandicou BA",
                  titre: "Enseignant-Chercheur",
                },
                {
                  img: "/images/faye.jpg",
                  nom: "Mme FAYE née Louise DIOUF",
                  titre: "secrétaire du Chef de Département de Gestion",
                },
                {
                  img: "/images/ndiaye.jpg",
                  nom: "Ndeye Diodio NDIAYE",
                  titre: "cofondatrice et CEO de BUILD TECH",
                },
                // Ajoute d'autres portraits ici si besoin
              ].concat([
                // Duplique pour boucle infinie
                {
                  img: "/images/mandicou.jpg",
                  nom: "Dr Mandicou BA",
                  titre: "Enseignant-Chercheur",
                },
                {
                  img: "/images/faye.jpg",
                  nom: "Mme FAYE née Louise DIOUF",
                  titre: "secrétaire du Chef de Département de Gestion",
                },
                {
                  img: "/images/ndiaye.jpg",
                  nom: "Ndeye Diodio NDIAYE",
                  titre: "cofondatrice et CEO de BUILD TECH",
                },
              ]).map((p, i) => (
                <div key={i} className="relative w-72 h-[400px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-lg flex flex-col justify-end">
                  <img
                    src={p.img}
                    alt={p.nom}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center top", opacity: 0.95 }}
                  />
                  <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white font-semibold text-lg">{p.nom}</div>
                    <div className="h-1 w-12 bg-red-500 my-2"></div>
                    <div className="text-white font-bold text-2xl">{p.titre}</div>
                  </div>
                </div>
              ))}
            </div>
            <style>
              {`
                @keyframes portrait-carousel {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section ref={contactRef} id="contact" className="bg-white bg-opacity-90 mt-12">
        <footer className="text-gray-900 rounded-t-xl">
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
