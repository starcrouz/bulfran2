
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import CGV from './pages/CGV';
import Commander from './pages/Commander';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CategoryGallery from './pages/CategoryGallery';
import ProductList from './pages/ProductList';
import PetitPrince from './pages/PetitPrince';
import Ceramiques from './pages/Ceramiques';
import Exclusivites from './pages/Exclusivites';
import GauloisRomains from './pages/GauloisRomains';
import Chateaux from './pages/Chateaux';
import Art from './pages/Art';
import Mer from './pages/Mer';
import Montagne from './pages/Montagne';
import GuerrePaix from './pages/GuerrePaix';
import Ville from './pages/Ville';
import Animaux from './pages/Animaux';
import Grottes from './pages/Grottes';
import ArticlesReligieux from './pages/ArticlesReligieux';
import InstrumentsMusique from './pages/InstrumentsMusique';
import TapisOriental from './pages/TapisOriental';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/societe/presentation" element={<Presentation />} />
            <Route path="/societe/cgv" element={<CGV />} />
            <Route path="/commander" element={<Commander />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            
            {/* Souvenirs Categories */}
            <Route path="/souvenirs" element={<CategoryGallery />} />
            {/* Specific category routes must come before the generic one */}
            <Route path="/souvenirs/gaulois-et-romains" element={<GauloisRomains />} />
            <Route path="/souvenirs/châteaux" element={<Chateaux />} />
            <Route path="/souvenirs/art" element={<Art />} />
            <Route path="/souvenirs/mer" element={<Mer />} />
            <Route path="/souvenirs/montagne" element={<Montagne />} />
            <Route path="/souvenirs/guerre-et-paix" element={<GuerrePaix />} />
            <Route path="/souvenirs/ville" element={<Ville />} />
            <Route path="/souvenirs/animaux" element={<Animaux />} />
            <Route path="/souvenirs/grottes" element={<Grottes />} />
            <Route path="/souvenirs/articles-religieux" element={<ArticlesReligieux />} />
            <Route path="/souvenirs/instruments-musicaux" element={<InstrumentsMusique />} />
            <Route path="/souvenirs/tapis-oriental" element={<TapisOriental />} />
            
            <Route path="/souvenirs/:categoryId" element={<ProductList title="Édition de souvenirs" />} />
            
            {/* Main Sections from Home */}
            <Route path="/petit-prince" element={<PetitPrince />} />
            <Route path="/ceramiques" element={<Ceramiques />} />
            <Route path="/exclusivites" element={<Exclusivites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
