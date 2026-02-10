
import React from 'react';

const Presentation: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto pt-12 pb-1">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Présentation</h1>
      
      <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
        <p>
          Depuis sa création en 2005, BULFRAN distribue en gros des figurines en faïence fine blanches (en état brut) ou peintes à la main. Sa marque BLANC ET DÉCORÉ, déposée en 2007, propose la plus grande offre en France de ce type de produits - environ 2000 références. Nos clients sont principalement des faïenceries et des décorateurs de faïence, mais aussi des artisans d’art, des boutiques de loisirs créatifs, des centres de loisirs, des décorateurs de vitrines, des associations, des familles, etc.
        </p>

        <p>
          Parallèlement, BULFRAN est un fournisseur de cadeaux, objets de décorations et livres lors de différentes manifestations : salons, expositions, foires, marchés de l’Europe ou de Noël, fêtes, mariages, etc. Parmi les plus marquants : des expositions à Paris (musée du Louvre, musée Jacquemart André, musée Maillol), la Foire de Paris, des Marchés de Noël à Paris, le Marché de l’Europe à Saint-Germain-en-Laye, le Salon de la Rose à Orléans, le Salon du tourisme à Tours. Dans tous ces cas, il s’agit d’offres spécifiques liées aux thèmes des évènements.
        </p>

        <p>
          Enfin, depuis l’été 2015, BULFRAN développe une nouvelle activité sous la marque Édition BULFRAN. La société se spécialise dans la conception, la création et l’édition de cadeaux et souvenirs de France (la plupart créés sur mesure ou personnalisés). Une grande partie d'entre eux est fabriquée en France ou dans l’Union européenne. Mais pour répondre aux besoins spécifiques de ses gros clients, à partir de 2019, la société importe activement des articles de divers pays (Russie, Proche Orient).
        </p>

        <div className="pt-6 border-t border-gray-100">
          <p className="font-semibold italic">
            Les articles magnétiques sont le cœur de notre métier. Néanmoins, la branche des articles tissés se développe très rapidement. La gamme d’autres types de produits s’agrandit constamment. Certains de nos articles sont de vraies nouveautés pour le marché français.
          </p>
        </div>
        
        {/* Added spacing at the end as requested */}
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default Presentation;
