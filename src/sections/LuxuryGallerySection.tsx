import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GALLERY_ITEMS, BEFORE_AFTER_PAIRS } from '@/data/inspiration';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { AnimatedImage } from '@/components/ui/AnimatedImage';
import { ArrowUpRight } from 'lucide-react';

export const LuxuryGallerySection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-ivory/50 border-t border-luxury-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <SectionTitle
          subtitle="Editorial Design Inspiration"
          title="Curated Showcase of Interior Craftsmanship"
          description="Explore completed penthouses, master bedroom sleep sanctuaries, and couture drapery installations designed by Galaxy Living Studio."
        />

        {/* Before/After Transformation Slider */}
        <div className="mb-20">
          <BeforeAfterSlider
            beforeImage={BEFORE_AFTER_PAIRS[0].beforeImage}
            afterImage={BEFORE_AFTER_PAIRS[0].afterImage}
            title={BEFORE_AFTER_PAIRS[0].title}
            description={BEFORE_AFTER_PAIRS[0].description}
          />
        </div>

        {/* Gallery Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div key={item.id} className="group bg-luxury-white border border-luxury-black/10 overflow-hidden">
              <AnimatedImage
                src={item.image}
                alt={item.title}
                aspectRatio="aspect-[4/3]"
                overlay
              />
              <div className="p-6">
                <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-bronze font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl text-luxury-black mt-1 mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-luxury-charcoal/70 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/inspiration"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-luxury-black font-semibold border-b border-luxury-black hover:text-luxury-bronze hover:border-luxury-bronze pb-1 transition-all"
          >
            View Complete Inspiration Gallery & Mood Boards <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
