import React, { useEffect, useState } from 'react';

export default function ProjetsPublications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/lirit_backend/get_publications.php')
      .then(res => res.json())
      .then(data => setPublications(data))
      .catch(() => setPublications([]));
  }, []);

  return (
    <div className="max-w-xl mx-auto py-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Projets & Publications</h3>
      <ul className="space-y-2">
        {publications.length === 0 && (
          <li className="text-gray-500 text-sm">Aucune publication trouvée.</li>
        )}
        {publications.map((pub, idx) => (
          <li key={idx} className="border rounded p-2 bg-gray-50">
            <div className="font-medium text-gray-800 text-sm">{pub.titre}</div>
            <div className="text-xs text-gray-500">{pub.auteur} &middot; {pub.annee}</div>
            {pub.fichier && (
              <a
                href={pub.fichier}
                className="text-xs text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
