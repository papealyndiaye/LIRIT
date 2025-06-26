import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Images du web pour chaque axe
const axeImages = [
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // Axe 1 RIISC
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Axe 3 RIISC
    'https://images.unsplash.com/photo-1511174511562-5f97f4f4eab6?auto=format&fit=crop&w=400&q=80', // Axe 1 ILIAD
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // Axe 2 ILIAD
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // Axe 3 ILIAD
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Axe 4 ILIAD
];

// Tableau des axes avec couleurs
const equipes = [
    {
        nom: 'Équipe RIISC',
        stats: "3 Axes de recherche",
        color: "bg-teal-900",
        axes: [
            {
                titre: 'Axe 1 : Traitement du signal',
                img: axeImages[0],
                thematiques: ['Épilepsie', 'Maladies cardio vasculaire'],
            },
            {
                titre: 'Axe 2 : Sécurité',
                img: axeImages[1],
                thematiques: [
                    'Stéganographie / Stéganalyse',
                    'Cryptographie / Cryptanalyse',
                    'Sécurité matérielle',
                    'Digital forensic',
                    'Protocoles réseaux sécurisés',
                    'Protection des infrastructures critiques',
                ],
            },
            {
                titre: 'Axe 3 : Réseaux et Systèmes',
                img: axeImages[2],
                thematiques: [
                    'Communication numérique',
                    'Réseaux de communication sans fil',
                    'Stockage des données',
                    'Internet of Things (IoT)',
                ],
            },
        ],
    },
    {
        nom: 'Équipe ILIAD',
        stats: "4 Axes de recherche",
        color: "bg-indigo-900",
        axes: [
            {
                titre: 'Axe 1 : Imagerie Médicale',
                img: axeImages[3],
                thematiques: [
                    'Cancer du sein',
                    'Cancer de la prostate',
                    'Détection de lésions dues au tuberculose',
                    'Détection des signaux particuliers des ECG',
                    'Détection des types d’AVC',
                ],
            },
            {
                titre: 'Axe 2 : Intelligence Artificielle',
                img: axeImages[4],
                thematiques: [
                    'Data Mining',
                    'Machine Learning',
                    'Process Mining',
                    'Deep Learning',
                    'Modélisation et simulation des Systèmes complexes',
                    'Système multi-agents (SMA)',
                    'Traitement Automatique du Langage Naturel (TALN)',
                    'Business Intelligence (BI)',
                    'Systèmes de gestion de données',
                    'Données massives et calcul distribué',
                    'Modèles de fondation (LLM, LNN, etc.)',
                    'Prompt engineering',
                    'Qualité de données et gouvernance',
                    'Systèmes de recherche et d’extraction d’informations',
                    'Anonymisation des données',
                ],
            },
            {
                titre: 'Axe 3 : Ingénierie logicielle (IL)',
                img: axeImages[5],
                thematiques: [
                    'Ingénierie dirigée par les modèles',
                    'Ingénierie des processus de développement',
                    'Lignes de produits logicielles',
                    'IL4D',
                    'Process mining',
                    'Interface Homme-Machine',
                ],
            },
            {
                titre: 'Axe 4 : Bio Informatique',
                img: axeImages[6],
                thematiques: ['Séquençage haut débit (NGS)', 'Génomique'],
            },
        ],
    },
];

export default function Blog() {
    const [currentTeam, setCurrentTeam] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showAll, setShowAll] = useState({}); // <-- Ajout

    const navigateTeams = (newDirection) => {
        setDirection(newDirection);
        setCurrentTeam((prev) =>
            Math.max(0, Math.min(equipes.length - 1, prev + newDirection))
        );
        setShowAll({}); // Réinitialise lors du changement d'équipe
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-transparent">
            <div className="h-full w-full relative">
                <AnimatePresence custom={direction}>
                    <motion.div
                        key={currentTeam}
                        custom={direction}
                        initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute inset-0 ${equipes[currentTeam].color} flex flex-col justify-center bg-transparent`}
                    >
                        <div className="px-12 pt-12 pb-6">
                            <h1 className="text-4xl font-bold text-black mb-2 text-center">
                                {equipes[currentTeam].nom}
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 text-center">
                                {equipes[currentTeam].stats}
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {equipes[currentTeam].axes.map((axe, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{
                                        scale: 1.04,
                                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
                                        zIndex: 10,
                                    }}
                                    className="bg-blue-200 rounded-xl overflow-hidden shadow-lg h-72 flex flex-col"
                                >
                                    {/* IMAGE : taille toujours fixe */}
                                    <div className="w-full" style={{ height: "112px", minHeight: "112px", maxHeight: "112px" }}>
                                        <img
                                            src={axe.img}
                                            alt={axe.titre}
                                            className="w-full h-full object-cover"
                                            style={{ minHeight: "112px", maxHeight: "112px" }}
                                        />
                                    </div>
                                    {/* CONTENU */}
                                    <div className="p-4 flex flex-col flex-1 min-h-0">
                                        <p className="text-black font-bold text-base italic mb-2">
                                            {axe.titre}
                                        </p>
                                        {axe.thematiques && (
                                            <ul className="text-gray-700 text-xs italic list-disc list-inside space-y-1 overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-white scrollbar-track-blue-800">
                                                {axe.thematiques.map((th, thIdx) => (
                                                    <li key={thIdx}>
                                                        <span className="hover:underline italic">{th}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <button
                    onClick={() => navigateTeams(-1)}
                    disabled={currentTeam === 0}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-50 text-white p-3 rounded-full disabled:opacity-30"
                >
                    ←
                </button>
                <button
                    onClick={() => navigateTeams(1)}
                    disabled={currentTeam === equipes.length - 1}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-50 text-white p-3 rounded-full disabled:opacity-30"
                >
                    →
                </button>

                {/* Indicateurs */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
                    {equipes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentTeam ? 1 : -1);
                                setCurrentTeam(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentTeam === index
                                    ? "bg-white"
                                    : "bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}