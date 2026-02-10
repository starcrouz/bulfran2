
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const categories = [
    { title: 'Éditions de souvenirs', path: '/souvenirs', img: 'https://stephane-rouilly.pages-perso.free.fr/bulfran/edition%20de%20souvenirs.jpg' },
    { title: 'Le Petit Prince', path: '/petit-prince', img: 'https://stephane-rouilly.pages-perso.free.fr/bulfran/le%20petit%20prince.jpg' },
    { title: 'Céramiques', path: '/ceramiques', img: 'https://stephane-rouilly.pages-perso.free.fr/bulfran/ceramiques.jpg' },
    { title: 'Exclusivités', path: '/exclusivites', img: 'https://stephane-rouilly.pages-perso.free.fr/bulfran/exclusivites.jpg' },
  ];

  return (
    <div className="w-full bg-white pb-12">
      {/* Hero Banner Video - Full Width */}
      <div className="w-full h-[300px] md:h-[500px] mb-12 overflow-hidden flex items-center justify-center bg-black relative">
        <video 
          src="https://stephane-rouilly.pages-perso.free.fr/bulfran/tour-eiffel.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container - Width 80% for approx 10% margins */}
      <div className="w-[80%] mx-auto">
        {/* Intro Text */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Depuis sa création en 2005, BULFRAN distribue en gros, sous sa marque BLANC ET DÉCORÉ, des figurines en faïence fine blanches ou peintes. Lors de différentes manifestations, la société fournit des cadeaux et décorations originaux liés aux thèmes des événements.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            À partir de l'été 2015, BULFRAN diversifie ses activités en devenant éditeur de cadeaux et souvenirs de France. Nous imaginons des objets et créons des designs, puis nous sous-traitons la fabrication des produits de notre marque Éditeur BULFRAN, ainsi que de la marque Le Petit Prince. Découvrez aussi beaucoup d'autres types d'articles proposés en gros.
          </p>
        </div>

        {/* Grid Menu with more elongated images (aspect-video / 16:9) */}
        {/* Constrained width to reduce frame size as requested */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.title} 
              to={cat.path}
              className="group flex flex-col transition-transform hover:scale-[1.01]"
            >
              <div className="aspect-video overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#e2e2e2] py-6 text-center shadow-inner">
                <span className="text-2xl font-bold text-black font-sans tracking-tight">{cat.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
