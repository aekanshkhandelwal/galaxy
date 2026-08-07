import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/sections/HeroSection';
import { BrandMarquee } from '@/sections/BrandMarquee';
import { FeaturedCategoriesSection } from '@/sections/FeaturedCategoriesSection';
import { InteriorSolutionsSection } from '@/sections/InteriorSolutionsSection';
import { WhyChooseUsSection } from '@/sections/WhyChooseUsSection';
import { FeaturedBrandsSection } from '@/sections/FeaturedBrandsSection';
import { LuxuryGallerySection } from '@/sections/LuxuryGallerySection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ConsultationCTASection } from '@/sections/ConsultationCTASection';

interface HomeProps {
  onOpenConsultation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <Helmet>
        <title>Galaxy Living Studio — Luxury Mattresses, Home Furnishings & Bespoke Interiors</title>
        <meta
          name="description"
          content="Welcome to Galaxy Living Studio, North India's premier experience centre for luxury mattresses, designer home furnishings, customized furniture, and complete interior solutions in Ghaziabad."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Galaxy Living Studio",
            "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
            "@id": "https://www.galaxylivingstudio.com",
            "url": "https://www.galaxylivingstudio.com",
            "telephone": "+91-9217516355",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "340, Ambedkar Road, Opp. Maruti Nexa Showroom",
              "addressLocality": "Ghaziabad",
              "postalCode": "201001",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "10:30",
              "closes": "21:30"
            }
          })}
        </script>
      </Helmet>

      <main className="animate-fadeIn">
        <HeroSection onOpenConsultation={onOpenConsultation} />
        <BrandMarquee />
        <FeaturedCategoriesSection />
        <InteriorSolutionsSection onOpenConsultation={onOpenConsultation} />
        <WhyChooseUsSection />
        <FeaturedBrandsSection />
        <LuxuryGallerySection />
        <TestimonialsSection />
        <ConsultationCTASection onOpenConsultation={onOpenConsultation} />
      </main>
    </>
  );
};
