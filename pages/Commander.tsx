
import React from 'react';

const Commander: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12 uppercase">Commander</h1>
      
      <div className="space-y-10 text-gray-800 text-lg leading-relaxed text-justify md:text-left">
        <section>
          <h2 className="font-bold text-xl mb-3 text-black">Catalogues généraux</h2>
          <p className="mb-2">
            BULFRAN possède des catalogues généraux sur plusieurs thèmes : Le Petit Prince, Art, Châteaux, Mer, Montagne, Animaux, Grottes, Guerre de 1944, Paris, Lyon et d'autres villes.
          </p>
          <p>
            Demander par e-mail ou par téléphone les catalogues généraux correspondant à vos intérêts. Les tarifs sont donnés dans les catalogues.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-3 text-black">Catalogues en exclusivité</h2>
          <p>
            Lors d'un rendez-vous ou par téléphone, parlez-nous de vos besoins et de vos souhaits. Nous vous enverrons un catalogue personnalisé. La personnalisation de certains modèles et la création de nouveaux modèles sur mesure sont gratuites.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-3 text-black">Commander des produits</h2>
          <p className="mb-2">
            Le bon de commande est de rédaction libre. Il doit contenir au moins les références ou les noms des produits, leurs quantités et pour la première commande les coordonnées complètes du client (nom de la société, adresse de facturation, adresse de livraison si différente, SIREN, N° de la TVA intracommunautaire, téléphone et e- mail du responsable).
          </p>
          <p className="mb-2">
            Les commandes sont envoyées par e-mail, par sms ou par téléphone.
          </p>
          <p>
            Nous vous contacterons pour confirmer la commande et vous informer sur le délai de livraison.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-3 text-black">Négocier une remise, un rabais, une ristourne</h2>
          <p>
            Dans tous les cas, posez-nous la question et discutons la ensemble.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-3 text-black">Délais de livraison</h2>
          <p>
            Le délais de livraison varie entre un jour et un mois en fonction de plusieurs critères : marchandises en stock ou en rupture de stock, fabrication sur mesure, moment de l'année, etc. Pour les autres types de produits les délais sont très variables. Nous vous en informerons au cas par cas.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Commander;
