export interface Brand {
  id: string;
  name: string;
  category: "Mattresses" | "Curtains & Furnishings" | "Wallpapers" | "Blinds" | "Hardware";
  description: string;
  origin: string;
  tag: string;
  logoText: string;
  featuredProduct: string;
  image: string;
}

export const BRANDS_DATA: Brand[] = [
  // Mattresses
  {
    id: "springfit",
    name: "Springfit",
    category: "Mattresses",
    description: "India's premier manufacturer of high-end orthopedic mattresses, pocket spring systems, and luxury 5-star hotel sleep collections.",
    origin: "India / Global Standards",
    tag: "Luxury Sleep Partner",
    logoText: "SPRINGFIT",
    featuredProduct: "CertiPUR-US Certified Orthopedic & Pocket Spring Mattresses",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sleepwell",
    name: "Sleepwell",
    category: "Mattresses",
    description: "A household name in sleep innovation, offering posture-supporting memory foams, Neem Fresche protection, and ergonomic mattresses.",
    origin: "India",
    tag: "Trusted Sleep Pioneer",
    logoText: "SLEEPWELL",
    featuredProduct: "Pro Fitrest & My Mattress Collections",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "coirfit",
    name: "Coirfit",
    category: "Mattresses",
    description: "Eco-friendly, rubberised coir and orthopedic foam mattresses engineered for natural posture alignment and thermal breathability.",
    origin: "India",
    tag: "Eco-Ergonomic Mattresses",
    logoText: "COIRFIT",
    featuredProduct: "I-Insert Organic Coir & Spine-Relax Series",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "safari",
    name: "Safari",
    category: "Mattresses",
    description: "Heavy-duty high-density foam and spring mattresses built for resilient, long-lasting comfort across residential and guest suites.",
    origin: "India",
    tag: "Durable Comfort",
    logoText: "SAFARI",
    featuredProduct: "Resilient High-Density Foam & Hotel Series",
    image: "https://images.unsplash.com/photo-1582582621959-48d273528920?q=80&w=800&auto=format&fit=crop"
  },

  // Curtains & Furnishings
  {
    id: "ddecor",
    name: "D'Decor",
    category: "Curtains & Furnishings",
    description: "The world's largest producer of soft furnishing fabrics, renowned for European couture prints, velvet upholstery, and sheer curtains.",
    origin: "International Standard",
    tag: "Couture Home Fabrics",
    logoText: "D'DECOR",
    featuredProduct: "Fire-Retardant & Blackout Designer Drapery",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fabri-care",
    name: "Fabri Care",
    category: "Curtains & Furnishings",
    description: "High-performance upholstery textiles, spill-proof couch fabrics, and textured linen drapes designed for modern family living.",
    origin: "India / Europe Imports",
    tag: "Performance Textiles",
    logoText: "FABRI CARE",
    featuredProduct: "Stain-Shield Velvet & Chenille Upholstery",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "harit",
    name: "Harit",
    category: "Curtains & Furnishings",
    description: "Artisanal handloom textiles, embroidered sheer panels, and opulent silk curtains reflecting traditional motifs with contemporary elegance.",
    origin: "India",
    tag: "Heritage Furnishings",
    logoText: "HARIT",
    featuredProduct: "Hand-Embroidered Silk & Linen Sheers",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
  },

  // Wallpapers
  {
    id: "fine-decor",
    name: "Fine Decor",
    category: "Wallpapers",
    description: "Premium European and Asian imported wall coverings, tactile vinyl rolls, metallic damasks, and 3D architectural wall textures.",
    origin: "UK / International",
    tag: "Luxury Wall Art",
    logoText: "FINE DECOR",
    featuredProduct: "Textured Metallic & Embossed Vinyl Wallpapers",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },

  // Blinds
  {
    id: "mac-blinds",
    name: "MAC Blinds",
    category: "Blinds",
    description: "Engineered architectural window blinds, motorized roller shades, zebra blinds, and automated skylight shading systems.",
    origin: "India / Global Tech",
    tag: "Architectural Window Systems",
    logoText: "MAC BLINDS",
    featuredProduct: "Smart Motorized Roller & Skylight Shading",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "johnson-blinds",
    name: "Johnson Blinds",
    category: "Blinds",
    description: "Precision-cut wooden venetian blinds, aluminum louvers, and vertical track blinds for luxury executive offices and modern homes.",
    origin: "India",
    tag: "Precision Venetian Blinds",
    logoText: "JOHNSON BLINDS",
    featuredProduct: "Real Teak Wood Venetian & Metallic Slats",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sonata-blinds",
    name: "Sonata Designer Blinds",
    category: "Blinds",
    description: "Custom decorative Roman blinds, honeycomb insulation cells, and designer fabric window coverings tailored for refined spaces.",
    origin: "India",
    tag: "Designer Window Dressings",
    logoText: "SONATA BLINDS",
    featuredProduct: "Cellular Honeycomb & Roman Fabric Shades",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
  }
];
