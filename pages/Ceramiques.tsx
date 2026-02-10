
import React from 'react';

const Ceramiques: React.FC = () => {
  const baseUrl = "https://stephane-rouilly.pages-perso.free.fr/";

  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Céramiques</h1>
      
      <div className="space-y-6 text-gray-800 text-lg leading-relaxed mb-12 text-justify">
        <p>
          BULFRAN distribue sous sa marque BLANC ET DÉCORÉ environ 2000 références de figurines de faïence fine en état brut (biscuits céramiques). Il n’y a pas de minimum de commande par référence.
        </p>
        <p>
          Des figurines peintes à la main sont créées seulement sur devis.
        </p>
        <p>
          Pour consulter le catalogue et nos conditions générales de vente de céramiques, visiter notre site : <a href="http://www.blancetdecore.fr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">www.blancetdecore.fr</a>
        </p>
        <p className="font-semibold">
          Pour obtenir les tarifs de gros, nous contacter par mél : <span className="uppercase">contact(at)blancetdecore.fr</span>.
        </p>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <img 
          src={`${baseUrl}bulfran/ceramiques1.jpg`} 
          alt="Céramiques 1" 
          className="max-w-[70%] h-auto shadow-sm"
        />
        <img 
          src={`${baseUrl}bulfran/ceramiques2.jpg`} 
          alt="Céramiques 2" 
          className="max-w-[70%] h-auto shadow-sm"
        />
      </div>
    </div>
  );
};

export default Ceramiques;
