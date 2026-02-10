
import React from 'react';
import { Link } from 'react-router-dom';

const Grottes: React.FC = () => {
  const baseUrl = "https://stephane-rouilly.pages-perso.free.fr/";
  const images = [
    "bulfran/grotte-chauve.jpg"
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <nav className="text-sm mb-8 text-gray-500 font-bold uppercase">
        <Link to="/" className="hover:text-blue-800">Accueil</Link>
        <span className="mx-2">/</span>
        <Link to="/souvenirs" className="hover:text-blue-800">Édition de souvenirs</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Grottes</span>
      </nav>

      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Grottes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((imgUrl, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img 
              src={`${baseUrl}${imgUrl}`} 
              alt={`Grottes ${index + 1}`} 
              className="w-[60%] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grottes;
