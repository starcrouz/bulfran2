
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto py-12 text-sm">
      <h1 className="text-base font-bold mb-8">Mentions légales</h1>
      
      <div className="space-y-8 text-gray-900 leading-relaxed">
        <section>
          <h2 className="font-bold mb-4">Informations sur le propriétaire du site</h2>
          <p className="mb-4">
            Le présent site www.bulfran.fr est la propriété de la société BULFRAN, EURL, inscrite au registre du commerce et des sociétés de Paris sous le numéro 484 765 284. N° de TVA intracommunautaire : FR 8448476528400019
          </p>
          <p className="mb-4">
            Adresse du siège social : BULFRAN, EURL 180, avenue de Choisy 75013 Paris<br />
            Tél. : +33 9 50 29 38 06 (prix d'une communication locale en France métropolitaine)
          </p>
          <p className="mb-4">
            E-mail : contact(at)bulfran.fr La société BULFRAN est dirigée par Elena Satchkova, gérante et éditeur du site web www.bulfran.fr.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-4">Informations sur l'hébergeur</h2>
          <p className="mb-4">
            Le présent site est hébergé par : IONOS, SARL
          </p>
          <p className="mb-4">
            7, place de la Gare, BP 70109, 57200 Sarreguemines Cedex, 431 303 775 RCS Sarreguemines, tél. : 0970 808 911, info@IONOS.fr
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-4">Politique de confidentialité</h2>
          <p className="mb-4">
            Les informations enregistrées sont réservées au seul contact avec les personnes qui cherchent à joindre la société. Elles ne sont pas communiquées aux autres destinataires.
          </p>
          <p className="mb-4">
            Conformément aux articles 39 et suivants de la loi n° 78-17 du 6 janvier 1978 modifiée en 2004 relative à l'informatique, aux fichiers et aux libertés, toute personne peut obtenir communication et, le cas échéant, rectification ou suppression des informations la concernant, en adressant un courrier à :
          </p>
          <p className="mb-4 font-mono">
            BULFRAN, SARL<br />
            180, avenue de Choisy<br />
            75013 Paris
          </p>
          <p className="mb-4">
            En vous garantissant la plus grande confidentialité, BULFRAN s'engage à ne pas divulguer ou commercialiser à des tiers quelque information que ce soit vous concernant. Le traitement des informations nominatives et/ou personnelles par BULFRAN sur le site www.bulfran.fr a fait l'objet d'une déclaration à la Commission nationale informatique et liberté (CNIL) sous le numéro 8qy1567882H.
          </p>
          <p className="mb-4">
            BULFRAN s'engage à respecter la confidentialité des données personnelles et met tout en œuvre pour les protéger contre toute forme de perte, dommage ou altération, destruction, détournement, divulgation non autorisée. Cependant, des risques existent liés à l'utilisation des nouvelles technologies par des hackers.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-4">Lien avec des sites tiers</h2>
          <p className="mb-4">
            Les sites tiers reliés directement ou indirectement au site www.bulfran.fr ne sont pas sous la responsabilité de BULFRAN, à l'exception du lien vers le site www.blancetdecore.fr qui est, lui aussi, propriété de BULFRAN.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-4">Le site et les données</h2>
          <p className="mb-4">
            Les informations émanant directement de BULFRAN sont réputées exactes à la date de dernière modification, mais ne sauraient être exemptes d'erreurs typographiques ou d'omissions. Aidez-nous à corriger le contenu du site, svp.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
