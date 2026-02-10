
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-16 uppercase">Contact</h1>
      
      <div className="space-y-12 text-center">
        <div>
          <h2 className="text-xl font-bold text-black mb-2 uppercase">Courrier :</h2>
          <p className="text-lg text-gray-800 font-medium">
            BULFRAN, EURL <br />
            180, AVENUE DE CHOISY 75013 PARIS
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-2 uppercase">Téléphone :</h2>
          <p className="text-lg text-gray-800 font-medium mb-1">
            09 50 29 38 06 <span className="font-normal text-gray-600 text-base">(Prix d'un appel local en France métropolitaine)</span>
          </p>
          <p className="text-lg text-gray-800 font-medium">
            DE L'ÉTRANGER : +33 9 50 29 38 06
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-2 uppercase">E-mail :</h2>
          <p className="text-lg text-gray-800 font-medium uppercase">
            CONTACT(AT)BULFRAN.FR
          </p>
          <p className="text-sm text-gray-500 mt-1 italic">
            REMPLACER (AT) PAR @
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
