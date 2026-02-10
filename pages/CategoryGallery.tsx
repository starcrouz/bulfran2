
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGallery: React.FC = () => {
  const themes = [
    'Ville', 'Art', 'Châteaux', 'Mer', 'Montagne', 'Grottes',
    'Gaulois et romains', 'Articles religieux', 'Guerre et paix',
    'Instruments musicaux', 'Animaux', 'Tapis oriental'
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">
        Édition de souvenirs
      </h1>
      
      <div className="space-y-8 text-gray-800 text-lg leading-relaxed text-justify md:text-left">
        <div>
          <p className="font-bold mb-4">BULFRAN propose divers types de souvenirs :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Magnets et livrets magnétiques (c’est le cœur de notre métier)</li>
            <li>Porte-clés - Suspensions</li>
            <li>Décorations murales</li>
            <li>Règles et gommes</li>
            <li>Carnets</li>
            <li>Marque-page</li>
            <li>Portemonnaie et portefeuilles</li>
            <li>Trousses d’écolier et trousses de maquillage</li>
            <li>Sacs</li>
            <li>Pin’s, coupe-ongle, décapsuleurs, miroirs, etc</li>
          </ul>
          <p className="mt-4">Nous avons créé les designs de la plus grande partie de nos articles.</p>
        </div>

        <p>
          Des catalogues généraux correspondants aux thèmes ci-dessous sont disponibles sur demande.
        </p>

        <div>
          <p className="font-bold mb-4">Quelques exemples de produits par thème :</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
            {themes.map((theme) => (
              <div key={theme} className="flex items-center">
                <span className="w-48">{theme}</span>
                <span>-</span>
                <Link 
                  to={`/souvenirs/${theme.toLowerCase().replace(/\s+/g, '-')}`}
                  className="ml-2 text-blue-700 hover:underline font-medium"
                >
                  cliquer ici
                </Link>
              </div>
            ))}
          </div>
        </div>

        <p className="pt-4 border-t border-gray-100">
          D’autres exemples sont présentés dans la rubrique <Link to="/exclusivites" className="text-blue-700 hover:underline">Exclusivités</Link>.
        </p>
      </div>
    </div>
  );
};

export default CategoryGallery;
