import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { BRANDS_DATA } from '@/data/brands';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-luxury-black text-luxury-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-luxury-gold bg-luxury-black text-luxury-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-wider uppercase block text-white font-semibold">
                  Galaxy Living
                </span>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase block text-luxury-gold">
                  Studio • Ghaziabad
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-luxury-gray/70 font-light leading-relaxed max-w-md">
              {COMPANY_DATA.welcomeMessage}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-luxury-gold hover:text-white border-b border-luxury-gold hover:border-white pb-1 transition-all"
              >
                Schedule Experience Centre Visit <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Digital Showroom Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Catalogue
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-luxury-gray/80">
              {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/categories/${cat.slug}`} className="hover:text-luxury-gold transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/categories" className="text-luxury-gold hover:underline pt-1 block">
                  View All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Interior Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Interior Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-luxury-gray/80">
              <li>
                <Link to="/interior-solutions" className="hover:text-luxury-gold transition-colors">
                  Residential Interiors
                </Link>
              </li>
              <li>
                <Link to="/interior-solutions" className="hover:text-luxury-gold transition-colors">
                  Commercial Interiors
                </Link>
              </li>
              <li>
                <Link to="/interior-solutions" className="hover:text-luxury-gold transition-colors">
                  Space & 3D Planning
                </Link>
              </li>
              <li>
                <Link to="/interior-solutions" className="hover:text-luxury-gold transition-colors">
                  Modular Wardrobes
                </Link>
              </li>
              <li>
                <Link to="/categories/glass-solutions" className="hover:text-luxury-gold transition-colors">
                  Glass Solutions & Films
                </Link>
              </li>
              <li>
                <Link to="/categories/customized-furniture" className="hover:text-luxury-gold transition-colors">
                  Bespoke Carpentry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Experience Centre Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Showroom Info
            </h4>
            <ul className="space-y-3 font-sans text-xs text-luxury-gray/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href={`tel:${COMPANY_DATA.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DATA.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DATA.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.businessHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Partner Ticker / Logos */}
        <div className="py-8 border-b border-white/10">
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-center text-luxury-gold/70 mb-4 font-semibold">
            Authorized Luxury Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            {BRANDS_DATA.map((brand) => (
              <span key={brand.id} className="font-serif text-sm md:text-base tracking-widest text-luxury-gray hover:text-luxury-gold transition-colors uppercase">
                {brand.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-luxury-gray/50 gap-4">
          <p>© {new Date().getFullYear()} Galaxy Living Studio. All rights reserved. Ghaziabad, Uttar Pradesh.</p>
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
