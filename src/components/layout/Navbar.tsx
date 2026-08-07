import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdown(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Banner - Subtle address & hours */}
      <div className="bg-luxury-black text-luxury-white/80 py-2 px-4 text-[11px] font-sans tracking-widest hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-luxury-gold">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              {COMPANY_DATA.address}
            </span>
            <span className="text-white/40">|</span>
            <span>Mon – Sun: 10:30 AM – 9:30 PM</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_DATA.phone}`} className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              {COMPANY_DATA.phone}
            </a>
            <a 
              href={`https://wa.me/${COMPANY_DATA.whatsappPhone}?text=Hello%20Galaxy%20Living%20Studio,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20collections.`} 
              target="_blank" 
              rel="noreferrer"
              className="text-luxury-gold hover:text-white transition-colors uppercase font-semibold"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 lg:top-[33px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-luxury-white/95 backdrop-blur-md shadow-subtle py-4 border-b border-luxury-black/5'
            : 'bg-gradient-to-b from-luxury-black/70 via-luxury-black/30 to-transparent text-white py-6'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          
          {/* Logo Mark */}
          <Link to="/" className="flex shrink-0 items-center gap-3 group">
            <div className={`w-9 h-9 flex items-center justify-center border transition-all duration-500 ${
              scrolled ? 'border-luxury-bronze bg-luxury-black text-luxury-gold' : 'border-luxury-gold bg-luxury-black/40 text-luxury-gold'
            }`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0 max-w-[220px]">
              <span className={`font-serif text-xl sm:text-2xl tracking-wider uppercase block font-semibold leading-none ${
                scrolled ? 'text-luxury-black' : 'text-white'
              }`}>
                Galaxy Living
              </span>
              <span className={`text-[9px] font-sans tracking-[0.3em] uppercase block mt-1 font-medium ${
                scrolled ? 'text-luxury-bronze' : 'text-luxury-gold'
              }`}>
                Studio • Ghaziabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-motion hidden lg:flex min-w-0 flex-1 items-center justify-center space-x-5 xl:space-x-7 pl-8 text-[11px] xl:text-xs tracking-[0.16em] xl:tracking-[0.2em] font-sans uppercase">
            <Link
              to="/"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/about' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              About Us
            </Link>

            {/* Categories Dropdown Trigger */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setCategoriesDropdown(true)}
              onMouseLeave={() => setCategoriesDropdown(false)}
            >
              <Link
                to="/categories"
                className={`flex items-center gap-1 transition-colors duration-300 hover:text-luxury-bronze ${
                  location.pathname.startsWith('/categories') 
                    ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                    : (scrolled ? 'text-luxury-black' : 'text-white')
                }`}
              >
                Categories
                <ChevronDown className="w-3 h-3" />
              </Link>

              {/* Mega Dropdown Menu */}
              {categoriesDropdown && (
                <div className="absolute top-full -left-12 w-[680px] bg-luxury-black text-luxury-white shadow-elevated border border-white/10 p-8 grid grid-cols-2 gap-6 z-50 animate-fadeIn">
                  <div className="col-span-2 border-b border-white/10 pb-3 mb-2 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-luxury-gold uppercase font-bold">
                      Explore Digital Showroom Catalogue
                    </span>
                    <Link to="/categories" className="text-[10px] text-luxury-gray hover:text-luxury-gold underline">
                      View All 10 Categories →
                    </Link>
                  </div>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories/${cat.slug}`}
                      className="group/item flex items-start space-x-3 p-2 hover:bg-white/5 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-luxury-gold mt-1.5 group-hover/item:scale-150 transition-transform" />
                      <div>
                        <div className="text-xs font-serif tracking-wide text-white group-hover/item:text-luxury-gold font-medium">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-white/50 font-sans tracking-normal line-clamp-1 mt-0.5">
                          {cat.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/brands"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/brands' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              Our Brands
            </Link>

            <Link
              to="/interior-solutions"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/interior-solutions' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              Interiors
            </Link>

            <Link
              to="/inspiration"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/inspiration' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              Inspiration
            </Link>

            <Link
              to="/contact"
              className={`transition-colors duration-300 hover:text-luxury-bronze ${
                location.pathname === '/contact' 
                  ? (scrolled ? 'text-luxury-bronze font-bold border-b border-luxury-bronze pb-1' : 'text-luxury-gold font-bold border-b border-luxury-gold pb-1')
                  : (scrolled ? 'text-luxury-black' : 'text-white')
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex shrink-0 items-center space-x-4 ml-6">
            <LuxuryButton
              onClick={onOpenConsultation}
              variant={scrolled ? 'primary' : 'bronze'}
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Consultation
            </LuxuryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-none focus:outline-none ${
              scrolled ? 'text-luxury-black' : 'text-white'
            }`}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-luxury-black/95 text-luxury-white flex flex-col justify-between p-8 overflow-y-auto animate-fadeIn lg:hidden">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-luxury-gold" />
              <span className="font-serif text-xl uppercase tracking-wider text-white">Galaxy Living Studio</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-8 font-serif text-2xl">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">About Us</Link>
            <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Product Categories</Link>
            <Link to="/brands" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Our Brands</Link>
            <Link to="/interior-solutions" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Interior Solutions</Link>
            <Link to="/inspiration" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Inspiration Gallery</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold">Contact Showroom</Link>
          </nav>

          <div className="border-t border-white/10 pt-6 space-y-4 font-sans text-xs">
            <p className="text-luxury-gold flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {COMPANY_DATA.address}
            </p>
            <p className="text-white/70">Phone: {COMPANY_DATA.phone}</p>
            <LuxuryButton
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              variant="bronze"
              size="md"
              className="w-full"
            >
              Book Showroom Visit
            </LuxuryButton>
          </div>
        </div>
      )}
    </>
  );
};
