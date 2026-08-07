import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { COMPANY_DATA } from '@/data/company';

interface ConsultationCTASectionProps {
  onOpenConsultation: () => void;
}

export const ConsultationCTASection: React.FC<ConsultationCTASectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="experience-centre" className="py-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="bg-luxury-black text-luxury-white p-8 sm:p-16 border border-luxury-gold/30 relative overflow-hidden">
          
          {/* Background image tint */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
              alt="Experience centre"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-gold flex items-center gap-2 font-semibold">
                <Sparkles className="w-4 h-4" /> 10,000 Sq. Ft. Flagship Showroom
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.1]">
                Visit Our Experience Centre on Ambedkar Road
              </h2>

              <p className="font-sans text-sm sm:text-base text-luxury-gray/80 font-light max-w-2xl leading-relaxed">
                Step into a world of comfort, style, and innovation. Explore full sleep system displays, touch thousands of fabric & wallpaper swatches, and meet with our senior interior consultants.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-xs font-sans text-luxury-gold">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {COMPANY_DATA.address}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {COMPANY_DATA.phone}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <LuxuryButton
                onClick={onOpenConsultation}
                variant="bronze"
                size="lg"
                className="w-full text-center"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Showroom Visit
              </LuxuryButton>

              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappPhone}?text=Hello%20Galaxy%20Living%20Studio,%20I%20would%20like%20to%20schedule%20a%20showroom%20visit.`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-4 px-6 border border-white/20 hover:border-luxury-gold text-xs font-sans uppercase tracking-[0.2em] text-white hover:text-luxury-gold transition-colors"
              >
                Instant WhatsApp Inquiry
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
