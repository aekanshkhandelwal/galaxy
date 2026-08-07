import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { INTERIOR_SERVICES, PROCESS_STEPS } from '@/data/interiors';

interface InteriorSolutionsProps {
  onOpenConsultation: () => void;
}

export const InteriorSolutions: React.FC<InteriorSolutionsProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <Helmet>
        <title>Turnkey Interior Solutions — Galaxy Living Studio | Residential & Commercial</title>
        <meta
          name="description"
          content="Galaxy Living Studio provides complete residential and commercial interior solutions: 3D space planning, modular wardrobes, false ceilings, lighting consultation, and glass partitions in Ghaziabad."
        />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb items={[{ label: 'Interior Solutions' }]} />

        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Turnkey Architecture & Interior Execution"
            title="Complete Home & Workspace Design Solutions"
            description="From initial architectural floorplans to custom carpentry, ambient ceiling lighting, and soft furnishing styling — we turn empty rooms into elevated sanctuaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {INTERIOR_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="bg-luxury-white border border-luxury-black/10 p-6 flex flex-col justify-between hover:border-luxury-bronze transition-colors"
              >
                <div>
                  <span className="text-[9px] font-sans uppercase tracking-widest text-luxury-bronze font-bold bg-luxury-ivory px-2 py-0.5 mb-3 inline-block">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-2xl text-luxury-black mb-2">{service.title}</h3>
                  <p className="font-sans text-xs text-luxury-charcoal/80 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-4 border-t border-luxury-black/5">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-sans text-luxury-charcoal/70">
                      <Check className="w-3 h-3 text-luxury-bronze shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="bg-luxury-black text-luxury-white p-8 sm:p-16 border border-luxury-gold/30 my-16">
            <SectionTitle
              darkBg
              subtitle="5-Step Seamless Execution"
              title="How We Execute Your Dream Interior"
              description="Transparent timelines, precise site engineering, and white-glove installation."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="space-y-3 relative z-10">
                  <div className="font-serif text-5xl text-luxury-gold opacity-80 font-light">
                    {step.step}
                  </div>
                  <h4 className="font-serif text-xl text-white font-medium">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-luxury-gray/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center pt-8 border-t border-white/10">
              <LuxuryButton onClick={onOpenConsultation} variant="bronze" size="lg" icon={<Calendar className="w-4 h-4" />}>
                Book Design Consultation
              </LuxuryButton>
            </div>
          </div>

        </section>
      </div>
    </>
  );
};
