
import React from 'react';
import { Link } from 'react-router-dom';

const Animaux: React.FC = () => {
  const baseUrl = "https://stephane-rouilly.pages-perso.free.fr/";
  const images = [
    "bulfran/animaux-bois.jpg",
    "bulfran/animaux-marquepage.jpg",
    "bulfran/animaux-trousse1.jpg",
    "bulfran/animaux-trousse2.jpg"
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <nav className="text-sm mb-8 text-gray-500 font-bold uppercase">
        <Link to="/" className="hover:text-blue-800">Accueil</Link>
        <span className="mx-2">/</span>
        <Link to="/souvenirs" className="hover:text-blue-800">Édition de souvenirs</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Animaux</span>
      </nav>

      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Animaux</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((imgUrl, index) => {
          // Check if the image is the bookmark to apply specific sizing
          const isMarquePage = imgUrl.includes("marquepage");
          return (
            <div key={index} className="flex items-center justify-center p-4">
              <img 
                src={`${baseUrl}${imgUrl}`} 
                alt={`Animaux ${index + 1}`} 
                className={`${isMarquePage ? 'w-[15%]' : 'w-[60%]'} h-auto object-contain`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Animaux;
