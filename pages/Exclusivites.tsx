
import React from 'react';

const Exclusivites: React.FC = () => {
  const baseUrl = "https://stephane-rouilly.pages-perso.free.fr/";
  const images = [
    "bulfran/exclusivite-tissu.jpg",
    "bulfran/exclusivite-bracelet.jpg",
    "bulfran/exclusivite-catacombes.jpg",
    "bulfran/exclusivite-coeur.jpg",
    "bulfran/exclusivite-notre-dame-de-paris.jpg",
    "bulfran/exclusivite-sacre%20coeur.jpg"
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Exclusivités</h1>
      
      <div className="space-y-6 text-gray-800 text-lg leading-relaxed mb-12 text-justify">
        <p>
          Le mot exclusivité résume des services spécifiques pour un client qui est le seul à vendre nos produits.
        </p>

        <p>
          Nous proposons les services suivants :
        </p>
        
        <ul className="space-y-4 list-disc ml-6">
          <li>
            Création de nouveaux modèles (par exemple, on crée des magnets en 3D, des suspensions, des tableaux ou des bougies en fonction des formes des images);
          </li>
          <li>
            Personnalisation de modèles existants (on change le nom et les images sur certains magnets, porte-clés, porte-monnaie, pin’s, tote bag et autres produits dont la forme ne change pas);
          </li>
          <li>
            Recherche de produits. En tant que commerçant en gros, nous avons des connaissances et des savoir-faire dans la prospection, la recherche de produits et, si nécessaire, de leur l’adaptation aux besoins des clients.
          </li>
        </ul>

        <p>
          La plus grande partie de nos clients bénéficie de la création et de la personnalisation gratuite d’articles.
        </p>

        <p>
          Même quand nous ne proposons pas certains produits, si des clients nous en demandent, nous les trouvons pour eux. Ainsi, exceptionnellement, nous avons vendu des poupées, des badges, des protège-livre, des sacs pliants, etc.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((imgUrl, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img 
              src={`${baseUrl}${imgUrl}`} 
              alt={`Exclusivité ${index + 1}`} 
              className="w-[60%] h-auto object-contain shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exclusivites;
