
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 h-16 flex items-center justify-center mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Link 
          to="/mentions-legales" 
          className="text-sm text-gray-700 hover:text-blue-600 transition-colors underline decoration-gray-400"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
