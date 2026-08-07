export interface InteriorService {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Specialized";
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}

export const INTERIOR_SERVICES: InteriorService[] = [
  {
    id: "residential-interiors",
    title: "Residential Interiors",
    category: "Residential",
    tagline: "Turnkey Luxury Homes, Apartments & Penthouses",
    description: "End-to-end interior design and execution for villas, luxury apartments, and penthouses. We harmonize layout, lighting, furniture, and custom drapery into cohesive living environments.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Master bedroom & living room curation",
      "Bespoke modular kitchen & bar units",
      "Soft furnishings, rug & curtain integration",
      "Lighting design & smart automation control"
    ]
  },
  {
    id: "commercial-interiors",
    title: "Commercial Interiors",
    category: "Commercial",
    tagline: "Executive Corporate Offices & Luxury Showrooms",
    description: "High-impact workspace and retail showroom design that reflects corporate brand identity while optimizing employee ergonomics and acoustic privacy.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Executive suite & board room furnishing",
      "Acoustic wall panelling & commercial flooring",
      "Glass partition walls & security privacy films",
      "Fire-rated heavy traffic wallpaper & lighting"
    ]
  },
  {
    id: "space-planning",
    title: "Space Planning",
    category: "Specialized",
    tagline: "3D Floorplan Optimization & Ergonomic Layouts",
    description: "Scientific evaluation of room dimensions, natural light pathways, and movement flow to maximize usable space and spatial elegance.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Detailed 2D CAD floorplans & clearance maps",
      "Photorealistic 3D virtual walkthrough renders",
      "Circulation path & natural light analysis",
      "Furniture scale & placement mapping"
    ]
  },
  {
    id: "modular-solutions",
    title: "Modular Solutions",
    category: "Specialized",
    tagline: "Precision German & Italian Hardware Integration",
    description: "Precision-engineered modular wardrobes, kitchen cabinetry, and TV wall consoles built with moisture-proof marine ply and soft-close hardware.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Walk-in wardrobe systems with LED sensor lighting",
      "Modular island kitchens with quartz countertops",
      "Hidden pull-out storage & pantry units",
      "Blum & Hettich German soft-close mechanisms"
    ]
  },
  {
    id: "false-ceiling",
    title: "False Ceiling Designs",
    category: "Specialized",
    tagline: "Architectural Ceiling Cove Lighting & Acoustic Panels",
    description: "Custom Gyproc plasterboard false ceiling layouts featuring ambient cove LED lighting, magnetic track lights, and acoustic insulation layers.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Concealed architectural cove lighting troughs",
      "Magnetic low-voltage track light integration",
      "Acoustic plaster ceiling sound dampening",
      "Veneer & wooden louver ceiling inserts"
    ]
  },
  {
    id: "lighting-consultation",
    title: "Decorative Lighting Consultation",
    category: "Specialized",
    tagline: "Atmospheric Ambient, Task & Accent Lighting Plans",
    description: "Expert selection of statement chandeliers, linear pendant lamps, architectural recessed spots, and warm LED color temperature pairing.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Layered lighting plans (Ambient, Task, Accent)",
      "CCT Kelvin temperature matching (2700K - 4000K)",
      "Custom crystal & blown-glass chandelier sourcing",
      "Smart dimmer automation compatibility"
    ]
  },
  {
    id: "soft-furnishings",
    title: "Soft Furnishings & Styling",
    category: "Residential",
    tagline: "Textile Layering, Cushions, Rugs & Drapes",
    description: "The finishing touch that makes a house a home. We layer custom accent cushions, hand-knotted wool rugs, cashmere throws, and tailored curtains.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Custom decorative cushion ensembles",
      "Hand-tufted wool & viscose area rugs",
      "Tailored bed runner & throw blankets",
      "Art & accessories placement styling"
    ]
  },
  {
    id: "furniture-planning",
    title: "Furniture Planning",
    category: "Residential",
    tagline: "Custom Proportional Seating & Bespoke Carpentry",
    description: "Harmonizing sofa depths, dining table dimensions, and bed heights with your room scale for unmatched comfort and visual balance.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Custom sofa frame structural engineering",
      "Ergonomic seat depth & foam density selection",
      "Solid teak, walnut & brass inlay details",
      "Commercial grade Martindale fabric testing"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "In-Studio Consultation",
    description: "Visit our 10,000 sq.ft. experience centre on Ambedkar Road to discuss your vision, inspect live material swatches, and test sleep systems."
  },
  {
    step: "02",
    title: "Site Survey & Measurement",
    description: "Our senior design consultants conduct precise laser measurements of your site, checking spatial dimensions, natural light, and structural layout."
  },
  {
    step: "03",
    title: "Design Concept & 3D Renders",
    description: "We present bespoke material mood boards, custom fabric samples, 2D floorplans, and photorealistic 3D visualization renders."
  },
  {
    step: "04",
    title: "Bespoke Manufacturing",
    description: "Custom furniture, precision drapery stitching, and modular units are crafted at our state-of-the-art workshop with stringent quality control."
  },
  {
    step: "05",
    title: "Master Installation & Styling",
    description: "Our white-glove installation team installs flooring, blinds, ceilings, glass partitions, and furniture with zero mess and immaculate finish."
  }
];
