import React from 'react';
import { BRANDS_DATA } from '@/data/brands';

export const BrandMarquee: React.FC = () => {
  return (
    <div className="bg-luxury-black text-luxury-white py-6 border-y border-white/10 overflow-hidden relative select-none">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {/* Render twice for continuous infinite scroll ticker */}
        {[...BRANDS_DATA, ...BRANDS_DATA].map((brand, idx) => (
          <div key={`${brand.id}-${idx}`} className="flex items-center gap-8 group">
            <span className="font-serif text-lg md:text-xl tracking-[0.25em] uppercase font-light text-luxury-white/80 group-hover:text-luxury-gold transition-colors">
              {brand.name}
            </span>
            <span className="text-[10px] font-sans tracking-widest text-luxury-bronze uppercase px-2 py-0.5 border border-luxury-bronze/30">
              {brand.category}
            </span>
            <span className="text-luxury-gold/30 font-serif text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
