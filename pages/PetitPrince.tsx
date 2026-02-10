
import React from 'react';

const PetitPrince: React.FC = () => {
  const baseUrl = "https://stephane-rouilly.pages-perso.free.fr/";
  const images = [
    "bulfran/petit%20prince%20-%20album.jpg",
    "bulfran/petit%20prince%20-%20badge%20ajoure.jpg",
    "bulfran/petit%20prince%20-%20badges.jpg",
    "bulfran/petit%20prince%20-%20casquette.jpg",
    "bulfran/petit%20prince%20-%20invisible.jpg",
    "bulfran/petit%20prince%20-%20livres.jpg",
    "bulfran/petit%20prince%20-%20medaillon.jpg",
    "bulfran/petit%20prince%20-%20planete.jpg"
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Le Petit Prince</h1>
      
      <div className="space-y-6 text-gray-800 text-lg leading-relaxed mb-12 text-justify">
        <p>
          Sous la licence officielle Le Petit Prince, la société BULFRAN propose divers produits : magnets, livrets magnétiques, suspensions, décoration murale, règles découpées, gommes, casquettes.
        </p>
        <p>
          Le livret magnétique Le Petit Prince comporte les meilleures citations du livre éponyme et des aquarelles d’Antoine de Saint-Exupéry. Ce best-seller est proposé en français, anglais, espagnol et mandarin.
        </p>
        <p className="font-semibold">
          Envoi du catalogue général sur demande.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((imgUrl, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img 
              src={`${baseUrl}${imgUrl}`} 
              alt={`Le Petit Prince ${index + 1}`} 
              className="w-[60%] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetitPrince;
