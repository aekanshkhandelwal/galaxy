import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Sliders } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GALLERY_ITEMS, BEFORE_AFTER_PAIRS, MOOD_BOARDS } from '@/data/inspiration';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { AnimatedImage } from '@/components/ui/AnimatedImage';

export const Inspiration: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Bedroom', 'Living Room', 'Dining', 'Curtains & Drapes', 'Commercial', 'Bespoke Carpentry'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Inspiration Gallery — Galaxy Living Studio | Interior Mood Boards</title>
        <meta
          name="description"
          content="Explore high-end editorial photography, before and after interior transformations, and custom color mood boards from Galaxy Living Studio."
        />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb items={[{ label: 'Inspiration' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            subtitle="Editorial Lookbook & Portfolio"
            title="Spatial Transformations & Interior Palette Inspiration"
            description="Browse completed spatial layouts, drapery reveals, and custom material palettes designed by Galaxy Living Studio."
          />

          {/* Interactive Before / After Sliders Section */}
          <div className="mb-20 space-y-12">
            <div className="flex items-center justify-between border-b border-luxury-black/10 pb-4">
              <h2 className="font-serif text-3xl text-luxury-black flex items-center gap-2">
                <Sliders className="w-6 h-6 text-luxury-bronze" /> Room Transformations
              </h2>
              <span className="text-xs font-sans uppercase tracking-widest text-luxury-charcoal/60">
                Drag Slider Below
              </span>
            </div>

            {BEFORE_AFTER_PAIRS.map((pair) => (
              <BeforeAfterSlider
                key={pair.id}
                beforeImage={pair.beforeImage}
                afterImage={pair.afterImage}
                title={pair.title}
                description={pair.description}
              />
            ))}
          </div>

          {/* Mood Boards Section */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl text-luxury-black mb-8 flex items-center gap-2">
              <Layers className="w-6 h-6 text-luxury-bronze" /> Curated Interior Mood Boards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOOD_BOARDS.map((mb, i) => (
                <div key={i} className="bg-luxury-ivory p-8 border border-luxury-black/10">
                  <h3 className="font-serif text-2xl text-luxury-black mb-2">{mb.title}</h3>
                  <p className="font-sans text-xs text-luxury-charcoal/80 font-light mb-6">
                    {mb.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-luxury-charcoal/60">Swatches:</span>
                    {mb.colors.map((c, ci) => (
                      <div
                        key={ci}
                        className="w-8 h-8 rounded-full border border-luxury-black/10 shadow-sm"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-luxury-black/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-sans uppercase tracking-widest transition-all ${
                  activeFilter === cat
                    ? 'bg-luxury-black text-luxury-white font-semibold'
                    : 'bg-luxury-ivory text-luxury-charcoal hover:bg-luxury-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group bg-luxury-white border border-luxury-black/10 overflow-hidden shadow-subtle"
              >
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
                  <h3 className="font-serif text-2xl text-luxury-black mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-luxury-charcoal/80 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.materials.map((m, mi) => (
                      <span key={mi} className="text-[9px] font-sans uppercase tracking-wider bg-luxury-ivory text-luxury-charcoal px-2 py-0.5">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
