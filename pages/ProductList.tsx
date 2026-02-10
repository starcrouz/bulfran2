
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { PLACEHOLDER_IMG } from '../constants';

interface ProductListProps {
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({ title }) => {
  const { categoryId } = useParams();
  const location = useLocation();
  
  // Format title if it's a specific category
  const displayTitle = categoryId 
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace(/-/g, ' ') 
    : title;

  // Generate some placeholder "products" (images only as requested)
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    img: PLACEHOLDER_IMG(600, 600, `${displayTitle}-${i}`)
  }));

  return (
    <div className="w-[80%] mx-auto py-12">
      <nav className="text-sm mb-8 text-gray-500 uppercase font-bold">
        <a href="/" className="hover:text-blue-800">Accueil</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{displayTitle}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-12 uppercase">{displayTitle}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="aspect-square bg-gray-100 overflow-hidden border border-gray-200">
            <img 
              src={item.img} 
              alt={`${displayTitle} item ${item.id}`} 
              className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="text-center py-24 text-gray-400">
          Aucun article dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
};

export default ProductList;
