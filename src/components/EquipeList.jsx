import React from "react";

const membres = [
  {
    nom: "Leslie Alexander",
    poste: "Co-Founder / CEO",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    nom: "Jane Cooper",
    poste: "Chief Marketing Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nom: "Wade Warren",
    poste: "CTO",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nom: "Robert Fox",
    poste: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    nom: "Kristin Watson",
    poste: "HR Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    nom: "Annette Black",
    poste: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    nom: "Darlene Robertson",
    poste: "Finance Lead",
    img: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    nom: "Cody Fisher",
    poste: "Design Director",
    img: "https://randomuser.me/api/portraits/men/64.jpg"
  }
];

export default function EquipeList() {
  return (
    <div className="bg-white py-16 sm:py-24 w-full">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {membres.map((m) => (
            <li key={m.nom}>
              <div className="flex items-center gap-x-6">
                <img className="size-24 rounded-full" src={m.img} alt={m.nom} />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{m.nom}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{m.poste}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}