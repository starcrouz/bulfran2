
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="https://stephane-rouilly.pages-perso.free.fr/bulfran/logo.jpg" 
            alt="BULFRAN" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="flex space-x-8">
          {NAV_ITEMS.map((item) => {
            const isSociete = item.label === 'SOCIÉTÉ';
            
            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* 
                  Le titre "SOCIÉTÉ" n'est pas cliquable, seulement ses sous-menus.
                */}
                {isSociete ? (
                  <span className="text-lg font-bold text-gray-900 cursor-default py-4 flex items-center uppercase">
                    {item.label}
                    {item.children && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-lg font-bold hover:text-blue-600 transition-colors py-4 flex items-center uppercase"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-[#f0f0f0] border border-gray-200 shadow-lg min-w-[200px] flex flex-col z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="px-4 py-3 text-lg font-bold text-gray-800 hover:bg-gray-200 hover:text-blue-600 transition-colors border-b border-gray-200 last:border-b-0 uppercase"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
