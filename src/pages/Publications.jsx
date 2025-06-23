import React, { useEffect, useState } from 'react';

export default function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('http://localhost/lirit_backend/get_publications.php')
      .then(res => res.json())
      .then(data => setPublications(data));
  }, []);

  return (
    <div className="min-h-screen bg-lirit text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Publications</h2>
      <ul className="space-y-4">
        {publications.map(pub => (
          <li key={pub.id} className="bg-white text-black p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{pub.titre}</h3>
            <p className="text-gray-700">{pub.resume}</p>
            <p className="text-sm mt-2">Publié le : {pub.date_publication}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
