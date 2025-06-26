import React, { useState } from "react";

const equipes = [
  {
    nom: "Équipe ILIAD",
    membres: [
      {
        nom: "Leslie Alexander",
        poste: "Co-Founder / CEO",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Leslie dirige l'équipe avec passion et innovation. Elle a plus de 15 ans d'expérience dans le secteur.",
        x: "https://x.com/lesliealexander",
        linkedin: "https://www.linkedin.com/in/lesliealexander"
      },
      {
        nom: "Jane Cooper",
        poste: "Chief Marketing Officer",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Jane est notre experte en marketing, toujours à l'affût des dernières tendances.",
        x: "https://x.com/janecooper",
        linkedin: "https://www.linkedin.com/in/janecooper"
      },
      {
        nom: "Wade Warren",
        poste: "CTO",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Wade assure la direction technique avec une expertise inégalée en développement.",
        x: "https://x.com/wadewarren",
        linkedin: "https://www.linkedin.com/in/wadewarren"
      },
      {
        nom: "Robert Fox",
        poste: "Lead Developer",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Robert est le maître du code, transformant le café en solutions.",
        x: "https://x.com/robertfox",
        linkedin: "https://www.linkedin.com/in/robertfox"
      }
    ]
  },
  {
    nom: "Équipe RIISC",
    membres: [
      {
        nom: "Kristin Watson",
        poste: "HR Manager",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Kristin veille sur notre culture d'entreprise et le bien-être de nos employés.",
        x: "https://x.com/kristinwatson",
        linkedin: "https://www.linkedin.com/in/kristinwatson"
      },
      {
        nom: "Annette Black",
        poste: "Product Manager",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Annette orchestre le développement de produit avec une précision d'horloger.",
        x: "https://x.com/annetteblack",
        linkedin: "https://www.linkedin.com/in/annetteblack"
      },
      {
        nom: "Darlene Robertson",
        poste: "Finance Lead",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Darlene garde un œil attentif sur nos finances, assurant la santé économique de l'entreprise.",
        x: "https://x.com/darlenerobertson",
        linkedin: "https://www.linkedin.com/in/darlenerobertson"
      },
      {
        nom: "Cody Fisher",
        poste: "Design Director",
        img: "https://i1.rgstatic.net/ii/profile.image/851223951446017-1579959013488_Q512/Ibrahima_Fall6.jpg",
        desc: "Cody transforme des idées en designs époustouflants qui captivent nos utilisateurs.",
        x: "https://x.com/codyfisher",
        linkedin: "https://www.linkedin.com/in/codyfisher"
      }
    ]
  }
];

export default function EquipeList() {
  return (
    <div className="bg-white py-16 sm:py-24 w-full shadow-xl rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Le laboratoire réunit des chercheurs, doctorants et techniciens aux profils variés, engagés dans des projets innovants en informatique et télécommunications. Leur complémentarité renforce la dynamique de recherche et le rayonnement du laboratoire.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 justify-items-center"
        >
          {equipes.flatMap((equipe) =>
            equipe.membres.map((m) => (
              <li key={m.nom} className="flex flex-col items-center bg-white rounded-xl p-4 w-40">
                <img
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow mb-2"
                  src={m.img}
                  alt={m.nom}
                />
                <h4 className="text-xs font-bold text-gray-900 mb-1 text-center">{m.nom}</h4>
                <p className="text-xs font-semibold text-indigo-600 mb-1 text-center">{m.poste}</p>
                <div className="flex gap-1">
                  <a
                    href={m.x || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Profil X"
                  >
                    <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="1200" height="1227" rx="240" fill="black"/>
                      <path d="M862 320H1012L662 701L1068 1200H800L570 917L308 1200H158L528 783L140 320H418L626 579L862 320ZM816 1120H892L384 400H308L816 1120Z" fill="white"/>
                    </svg>
                  </a>
                  <a
                    href={m.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Profil LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z" fill="#0A66C2"/>
                    </svg>
                  </a>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}