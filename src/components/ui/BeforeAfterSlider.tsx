import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  description: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Original Space",
  afterLabel = "Galaxy Living Transformation",
  title,
  description,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-luxury-ivory p-6 md:p-10 border border-luxury-black/5">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-bronze font-bold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Spatial Reveal
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-luxury-black">{title}</h3>
        </div>
        <p className="text-xs md:text-sm text-luxury-charcoal/70 max-w-md font-light">
          {description}
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full overflow-hidden select-none cursor-ew-resize border border-luxury-black/10"
      >
        {/* After Image (Background full) */}
        <img
          src={afterImage}
          alt="After transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-luxury-black/80 backdrop-blur-md text-luxury-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-semibold">
          {afterLabel}
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before transformation"
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-luxury-white/90 backdrop-blur-md text-luxury-black text-[10px] tracking-widest uppercase px-3 py-1.5 font-semibold border border-luxury-black/10">
            {beforeLabel}
          </div>
        </div>

        {/* Vertical Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-luxury-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-luxury-black text-luxury-gold border-2 border-luxury-white flex items-center justify-center shadow-lg text-xs font-bold">
            ↔
          </div>
        </div>
      </div>
      <p className="text-[11px] text-center text-luxury-charcoal/50 uppercase tracking-widest mt-4">
        Drag slider left or right to compare interior changes
      </p>
    </div>
  );
};
