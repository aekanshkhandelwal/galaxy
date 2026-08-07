export interface GalleryItem {
  id: string;
  title: string;
  category: "Living Room" | "Bedroom" | "Dining" | "Curtains & Drapes" | "Commercial" | "Bespoke Carpentry";
  image: string;
  aspectRatio: "square" | "tall" | "wide";
  description: string;
  materials: string[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  roomType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Minimalist Master Suite in Model Town",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Custom wingback upholstered bed, Springfit Luxury Hotel mattress, and motorized ripple fold blackout drapes.",
    materials: ["Springfit Mattress", "D'Decor Velvet Drapes", "Fluted Wall Panels"]
  },
  {
    id: "gal-2",
    title: "Organic Modern Living Lounge",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Low-profile bouclé curved sectional sofa, solid walnut nesting coffee tables, and sheer floor-to-ceiling drapery.",
    materials: ["Fabri Care Bouclé", "Solid Walnut", "Ambient Cove LEDs"]
  },
  {
    id: "gal-3",
    title: "Penthouse Dining Sanctuary",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "square",
    description: "Italian Statuario marble top dining table paired with brass-framed leatherette dining armchairs.",
    materials: ["Statuario Marble", "Supple Leatherette", "Linear Brass Pendant"]
  },
  {
    id: "gal-4",
    title: "Floor-to-Ceiling Drapery Installation",
    category: "Curtains & Drapes",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Belgian linen sheer drapes combined with automated MAC motorized blackout roller shades.",
    materials: ["Belgian Linen", "MAC Motorized Track", "Blackout Fabric"]
  },
  {
    id: "gal-5",
    title: "Executive Conference Room Glazing",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Toughened double-glazed glass partitions equipped with smart switchable privacy film.",
    materials: ["12mm Toughened Glass", "Switchable Privacy Film", "Acoustic Wall Panels"]
  },
  {
    id: "gal-6",
    title: "Bespoke Modular Walk-In Wardrobe",
    category: "Bespoke Carpentry",
    image: "https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "square",
    description: "Tinted aluminum glass wardrobes with integrated micro-switch vertical LED clothing rods.",
    materials: ["Marine Plywood", "Bronze Tinted Glass", "Blum Soft-Close Slides"]
  }
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "ba-1",
    title: "Master Suite Transformation",
    roomType: "Luxury Bedroom",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=1000&auto=format&fit=crop",
    description: "Converted an outdated, dim room into a serene luxury suite with Springfit pocket spring sleep system and customized motorized blackout curtains."
  },
  {
    id: "ba-2",
    title: "Living Room Architectural Renewal",
    roomType: "Open-Plan Lounge",
    beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    description: "Replaced old sofa & flooring with SPC oak planks, D'Decor velvet upholstery, and warm cove false ceiling lighting."
  }
];

export const MOOD_BOARDS = [
  {
    title: "Warm Minimalist Earth",
    description: "Tactile bouclé, raw oak wood grain, brushed bronze accents, and warm ivory linen curtains.",
    colors: ["#F8F6F2", "#EFEAE3", "#A57C52", "#111111"]
  },
  {
    title: "Charcoal & Muted Gold Luxury",
    description: "Matte black furniture frames, gold foil wallpapers, dark velvet upholstery, and Statuario marble.",
    colors: ["#111111", "#2D2D2D", "#C5A06A", "#F8F6F2"]
  }
];
