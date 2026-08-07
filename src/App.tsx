import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConsultationModal } from '@/components/layout/ConsultationModal';
import { useLenis } from '@/hooks/useLenis';

// Pages
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Categories } from '@/pages/Categories';
import { CategoryDetail } from '@/pages/CategoryDetail';
import { Brands } from '@/pages/Brands';
import { InteriorSolutions } from '@/pages/InteriorSolutions';
import { Inspiration } from '@/pages/Inspiration';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  useLenis();

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenConsultation = (categoryName?: string) => {
    if (categoryName) setSelectedCategory(categoryName);
    else setSelectedCategory('');
    setConsultationOpen(true);
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-luxury-white text-luxury-black font-sans selection:bg-luxury-bronze selection:text-white">
          <Navbar onOpenConsultation={() => handleOpenConsultation()} />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenConsultation={() => handleOpenConsultation()} />} />
              <Route path="/about" element={<About onOpenConsultation={() => handleOpenConsultation()} />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:slug" element={<CategoryDetail onOpenConsultation={handleOpenConsultation} />} />
              <Route path="/brands" element={<Brands onOpenConsultation={() => handleOpenConsultation()} />} />
              <Route path="/interior-solutions" element={<InteriorSolutions onOpenConsultation={() => handleOpenConsultation()} />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer onOpenConsultation={() => handleOpenConsultation()} />

          <ConsultationModal
            isOpen={consultationOpen}
            onClose={() => setConsultationOpen(false)}
            initialCategory={selectedCategory}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
