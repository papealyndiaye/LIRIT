import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teams = [
	{
		id: "iliad",
		name: "Équipe ILIAD",
		stats: "4 Axes de recherche",
		color: "bg-indigo-900",
		cards: [
			{
				id: 1,
				title: "Axe 1 : Imagerie Médicale",
				image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4eab6",
				topics: [
					"Cancer du sein",
					"Cancer de la prostate",
					"Détection de lésions dues au tuberculose",
					"Détection des signaux particuliers des ECG",
					"Détection des types d’AVC",
				],
			},
			{
				id: 2,
				title: "Axe 2 : Intelligence Artificielle",
				image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
				topics: [
					"Data Mining",
					"Machine Learning",
					"Process Mining",
					"Deep Learning",
					"Modélisation et simulation des Systèmes complexe",
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
				id: 3,
				title: "Axe 3 : Ingénierie logicielle (IL)",
				image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
				topics: [
					"Ingénierie dirigée par les modèles",
					"Ingénierie des processus de développement",
					"Lignes de produits logicielles",
					"IL4D",
					"Process mining",
					"Interface Homme-Machine",
				],
			},
			{
				id: 4,
				title: "Axe 4 : Bio Informatique",
				image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
				topics: ["Séquençage haut débit (NGS)", "Génomique"],
			},
		],
	},
	{
		id: "riisc",
		name: "Équipe RIISC",
		stats: "3 Axes de recherche",
		color: "bg-teal-900",
		cards: [
			{
				id: 1,
				title: "Axe 1 : Traitement du signal",
				image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
				topics: ["épilepsie", "maladies cardio vasculaire"],
			},
			{
				id: 2,
				title: "Axe 2 : Sécurité",
				image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
				topics: [
					"Stéganographie /Stéganalyse",
					"Cryptographie/Cryptanalyse",
					"Sécurité matérielle (attaques par canaux cachés, attaques par injection de fautes)",
					"Digital forensic",
					"Protocoles réseaux sécurisés",
					"Protection des infrastructures critique",
				],
			},
			{
				id: 3,
				title: "Axe 3 : Réseaux et Systèmes",
				image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
				topics: [
					"Communication numérique (codes correcteurs, systèmes MIMO, communication optique, beamforming, communication sans fil, etc.)",
					"Réseaux de communication sans fil (optimisation des protocoles de communication, planification et déploiement radio, Allocation de ressources)",
					"Stockage des données",
					"Internet of Things (IoT)",
				],
			},
		],
	},
];

export default function ResearchTeams() {
	const [currentTeam, setCurrentTeam] = useState(0);
	const [direction, setDirection] = useState(0);

	const navigateTeams = (newDirection) => {
		setDirection(newDirection);
		setCurrentTeam((prev) =>
			Math.max(0, Math.min(teams.length - 1, prev + newDirection))
		);
	};

	return (
		<div className="relative h-screen w-full overflow-hidden bg-black">
			{/* Header avec bouton retour */}
			<div className="absolute top-0 left-0 z-50 p-6">
				<Link
					to="/"
					className="text-white font-medium hover:underline"
				>
					← Back
				</Link>
			</div>

			{/* Contenu principal */}
			<div className="h-full w-full relative">
				<AnimatePresence custom={direction}>
					<motion.div
						key={currentTeam}
						custom={direction}
						initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
						transition={{ duration: 0.2 }} // transition plus rapide
						className={`absolute inset-0 ${teams[currentTeam].color} flex flex-col justify-center`}
					>
						{/* En-tête équipe */}
						<div className="px-12 pt-12 pb-6">
							<h1 className="text-4xl font-bold text-white mb-2">
								{teams[currentTeam].name}
							</h1>
							<p className="text-xl text-gray-300 mb-8">
								{teams[currentTeam].stats}
							</p>
						</div>

						{/* Grille de cartes */}
						<div className="px-12 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
							{teams[currentTeam].cards.map((card) => (
								<motion.div
									key={card.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg h-56 flex flex-col"
								>
									<div className="h-28 overflow-hidden">
										<img
											src={card.image}
											alt={card.title}
											className="w-full h-28 object-cover"
										/>
									</div>
									<div className="p-4 flex-grow flex flex-col">
										<p className="text-white text-sm italic mb-2">
											{card.title}
										</p>
										{card.topics && (
											<ul className="text-white text-xs list-disc list-inside space-y-1">
												{card.topics.slice(0, 2).map((topic, idx) => (
													<li key={idx}>
														<Link
															to={`/axes/${teams[currentTeam].id}/${card.id}/${idx}`}
															className="hover:underline"
														>
															{topic}
														</Link>
													</li>
												))}
												{card.topics.length > 2 && (
													<li>
														<Link
															to={`/axes/${teams[currentTeam].id}/${card.id}`}
															className="hover:underline font-semibold"
														>
															voir plus &rarr;
														</Link>
													</li>
												)}
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
					disabled={currentTeam === teams.length - 1}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-50 text-white p-3 rounded-full disabled:opacity-30"
				>
					→
				</button>

				{/* Indicateurs */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
					{teams.map((_, index) => (
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