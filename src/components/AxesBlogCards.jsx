import React, { useState } from "react";

// Place axeImages AVANT equipes
const axeImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Axe 1 RIISC
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Axe 2 RIISC
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Axe 3 RIISC
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Axe 1 ILIAD
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", // Axe 2 ILIAD
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Axe 3 ILIAD
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Axe 4 ILIAD
];

const equipes = [
  {
    nom: "Équipe RIISC",
    axes: [
      {
        titre: "Axe 1 : Traitement du signal",
        img: axeImages[0],
        thematiques: [
          "Épilepsie",
          "Maladies cardio vasculaire",
        ],
      },
      {
        titre: "Axe 2 : Sécurité",
        img: axeImages[1],
        thematiques: [
          "Stéganographie / Stéganalyse",
          "Cryptographie / Cryptanalyse",
          "Sécurité matérielle",
          "Digital forensic",
          "Protocoles réseaux sécurisés",
          "Protection des infrastructures critiques",
        ],
      },
      {
        titre: "Axe 3 : Réseaux et Systèmes",
        img: axeImages[2],
        thematiques: [
          "Communication numérique",
          "Réseaux de communication sans fil",
          "Stockage des données",
          "Internet of Things (IoT)",
        ],
      },
    ],
  },
  {
    nom: "Équipe ILIAD",
    axes: [
      {
        titre: "Axe 1 : Imagerie Médicale",
        img: axeImages[3],
        thematiques: [
          "Cancer du sein",
          "Cancer de la prostate",
          "Détection de lésions dues au tuberculose",
          "Détection des signaux particuliers des ECG",
          "Détection des types d’AVC",
        ],
      },
      {
        titre: "Axe 2 : Intelligence Artificielle",
        img: axeImages[4],
        thematiques: [
          "Data Mining",
          "Machine Learning",
          "Process Mining",
          "Deep Learning",
          "Modélisation et simulation des Systèmes complexes",
          "Système multi-agents (SMA)",
          "Traitement Automatique du Langage Naturel (TALN)",
          "Business Intelligence (BI)",
          "Systèmes de gestion de données",
          "Données massives et calcul distribué",
          "Modèles de fondation (LLM, LNN, etc.)",
          "Prompt engineering",
          "Qualité de données et gouvernance",
          "Systèmes de recherche et d’extraction d’informations",
          "Anonymisation des données",
        ],
      },
      {
        titre: "Axe 3 : Ingénierie logicielle (IL)",
        img: axeImages[5],
        thematiques: [
          "Ingénierie dirigée par les modèles",
          "Ingénierie des processus de développement",
          "Lignes de produits logicielles",
          "IL4D",
          "Process mining",
          "Interface Homme-Machine",
        ],
      },
      {
        titre: "Axe 4 : Bio Informatique",
        img: axeImages[6],
        thematiques: [
          "Séquençage haut débit (NGS)",
          "Génomique",
        ],
      },
    ],
  },
];

const AxesBlogCards = () => {
  const [showAll, setShowAll] = useState({});

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Nos axes de recherche
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Découvrez les axes et thématiques portés par nos équipes.
          </p>
        </div>
        {equipes.map((equipe, equipeIdx) => (
          <div key={equipe.nom} className="mt-10">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6">{equipe.nom}</h3>
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {equipe.axes.map((axe, idx) => {
                const key = `${equipeIdx}-${idx}`;
                const isTruncated = axe.thematiques.length > 3 && !showAll[key];
                return (
                  <article
                    key={axe.titre}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="group relative w-full">
                      <img
                        src={axe.img}
                        alt={axe.titre}
                        className="w-full h-48 object-cover rounded-lg mt-4"
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '12rem',
                          background: '#eee',
                        }}
                      />
                      <h4 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        {axe.titre}
                      </h4>
                      <ul className="mt-2 text-sm text-gray-600 italic list-disc list-inside">
                        {(isTruncated ? axe.thematiques.slice(0, 3) : axe.thematiques).map((th, thIdx) => (
                          <li key={thIdx}>{th}</li>
                        ))}
                      </ul>
                      {isTruncated && (
                        <button
                          onClick={() => setShowAll(s => ({ ...s, [key]: true }))}
                          className="mt-2 text-xs italic text-indigo-600 hover:text-indigo-500"
                        >
                          Voir plus
                        </button>
                      )}
                      {showAll[key] && axe.thematiques.length > 3 && (
                        <button
                          onClick={() => setShowAll(s => ({ ...s, [key]: false }))}
                          className="mt-2 text-xs italic text-indigo-400 hover:text-indigo-700"
                        >
                          Retour
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AxesBlogCards;