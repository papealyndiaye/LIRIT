import { useParams, Link } from "react-router-dom";

const fakeData = {
  "vision-2": {
    titre: "3D modeling you can feel",
    date: "April 22, 2025",
    auteur: "Adam Conner-Simons",
    image: "https://images.unsplash.com/photo-1559027615-5caa1d5d2a9b",
    contenu: "This is the full content of the 3D modeling article...",
  },
  "ai-1": {
    titre: "AI for protein-binding prediction",
    date: "April 18, 2025",
    auteur: "MIT AI Team",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab",
    contenu: "Full article on drug discovery and AI innovation...",
  }
};

export default function AxeDetail() {
  const { id } = useParams();
  const article = fakeData[id];

  if (!article) return <p className="p-8">Article introuvable.</p>;

  return (
    <div className="px-8 py-12">
      <div className="flex justify-between">
        <Link to="/axes" className="text-blue-600 text-sm">← Retour aux Axes</Link>
        <Link to="/" className="text-blue-600 text-sm">Accueil</Link>
      </div>

      <h1 className="text-4xl font-bold mt-4">{article.titre}</h1>
      <p className="text-gray-500 mb-1">{article.date}</p>
      <p className="text-sm mb-6">Écrit par <strong>{article.auteur}</strong></p>
      <img src={article.image} alt={article.titre} className="w-full max-w-4xl rounded-xl shadow-md mb-6" />
      <p className="text-lg leading-relaxed max-w-3xl">{article.contenu}</p>
    </div>
  );
}
