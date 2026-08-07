import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle2, Calendar } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { COMPANY_DATA } from '@/data/company';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <Helmet>
        <title>About Us — Galaxy Living Studio | Luxury Interior Heritage</title>
        <meta
          name="description"
          content="Learn about Galaxy Living Studio, Ghaziabad's premier destination for luxury mattresses, designer home furnishings, customized furniture, and complete interior solutions."
        />
      </Helmet>

      <div className="pt-28 pb-16 bg-luxury-white">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-bronze font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Our Story & Heritage
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl text-luxury-black font-light leading-[1.1]">
                Where Better Sleep Meets Beautiful Living
              </h1>

              <p className="font-sans text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed">
                {COMPANY_DATA.welcomeMessage}
              </p>

              <div className="bg-luxury-ivory p-6 border-l-2 border-luxury-bronze my-6">
                <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-bronze font-bold block mb-1">
                  Our Mission
                </span>
                <p className="font-serif text-xl text-luxury-black font-light italic">
                  "{COMPANY_DATA.mission}"
                </p>
              </div>

              <div className="pt-4">
                <LuxuryButton onClick={onOpenConsultation} variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
                  Book Showroom Consultation
                </LuxuryButton>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] overflow-hidden bg-luxury-ivory border border-luxury-black/10 shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Galaxy Living Studio Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-luxury-black text-luxury-white p-6 border border-luxury-gold/30 max-w-xs hidden sm:block">
                <div className="font-serif text-3xl text-luxury-gold">10,000+</div>
                <div className="text-[10px] font-sans uppercase tracking-widest text-luxury-gray/70">
                  Sq. Ft. Experience Centre on Ambedkar Road, Ghaziabad
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Centre Spotlight */}
        <section className="py-20 bg-luxury-black text-luxury-white my-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SectionTitle
              darkBg
              subtitle="10,000 Sq. Ft. Flagship Showroom"
              title="Designed for Tactile Exploration & Inspiration"
              description="Our spacious experience showroom has been thoughtfully curated so you can feel organic latex layers, test motorized drapery tracks, and inspect material swatches with expert guidance."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-white/10 bg-luxury-darkGray/40">
                <div className="font-serif text-3xl text-luxury-gold mb-2">Sleep Sanctuary</div>
                <p className="text-xs text-luxury-gray/70 font-light leading-relaxed">
                  Dedicated mattress testing zone featuring Springfit, Sleepwell, and Coirfit ergonomic posture models.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-luxury-darkGray/40">
                <div className="font-serif text-3xl text-luxury-gold mb-2">Textile Library</div>
                <p className="text-xs text-luxury-gray/70 font-light leading-relaxed">
                  Over 5,000 drapery, curtain, and velvet sofa upholstery swatches from D'Decor, Fabri Care, and Harit.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-luxury-darkGray/40">
                <div className="font-serif text-3xl text-luxury-gold mb-2">3D Studio & Workshop</div>
                <p className="text-xs text-luxury-gray/70 font-light leading-relaxed">
                  In-house design workstation for CAD floorplans, 3D renders, and custom carpentry specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Commitment"
            title="Built on Trust, Authenticity & Craftsmanship"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_DATA.whyChooseUs.map((pillar, i) => (
              <div key={i} className="p-8 bg-luxury-ivory/60 border border-luxury-black/5">
                <CheckCircle2 className="w-6 h-6 text-luxury-bronze mb-4" />
                <h3 className="font-serif text-2xl text-luxury-black mb-2">{pillar.title}</h3>
                <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
