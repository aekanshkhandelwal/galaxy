export interface Subcategory {
  name: string;
  description: string;
  image?: string;
  features?: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  subcategories: Subcategory[];
  additionalOfferings?: string[];
  benefits: string[];
  featuredBrands: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "mattresses",
    slug: "mattresses",
    name: "Premium Mattresses",
    tagline: "Ergonomic & Luxury Sleep Systems for Restful Living",
    shortDescription: "Discover the perfect mattress engineered for your body's ergonomic comfort and deeply rejuvenating sleep.",
    fullDescription: "At Galaxy Living Studio, we understand that great health begins with restful sleep. Our curated sleep collection features advanced spinal-alignment technologies, zero-motion transfer spring systems, organic latex layers, and cooling memory foams from world-renowned sleep brands.",
    heroImage: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582582621959-48d273528920?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Orthopedic Mattresses", description: "Targeted spinal support designed in consultation with orthopedic specialists." },
      { name: "Pocket Spring Mattresses", description: "Independent coil motion isolation ensuring undisturbed sleep for couples." },
      { name: "Memory Foam Mattresses", description: "Body-conforming pressure relief for joint & back tension." },
      { name: "Latex Mattresses", description: "100% natural, hypoallergenic, and breathable luxury rubber latex." },
      { name: "Hybrid Mattresses", description: "The optimum synergy of pocket springs and contouring memory foam." },
      { name: "Luxury Hotel Collection Mattresses", description: "Plush multi-layered pillow-top mattresses featured in 5-star suites." },
      { name: "Coir Mattresses", description: "Firm natural coconut coir base providing firm posture support." },
      { name: "Bonnell Spring Mattresses", description: "Durable interconnected spring systems providing resilient bounce." },
      { name: "Foam Mattresses", description: "High-density polyurethane core mattresses for everyday durability." },
      { name: "Children's Mattresses", description: "Non-toxic, hypoallergenic mattresses tailored for growing bodies." },
      { name: "Customized Size Mattresses", description: "Tailor-made dimensions for bespoke bed frames and luxury yachts." }
    ],
    additionalOfferings: [
      "Mattress Protectors (100% Waterproof & Breathable)",
      "Mattress Covers (Anti-microbial Jacquard)",
      "Mattress Toppers (Plush Memory Foam & Microfiber)"
    ],
    benefits: [
      "Spinal Alignment & Pressure Relief",
      "Zero-Motion Transfer Technology",
      "Hypoallergenic & Dust-Mite Resistant",
      "Custom Dimensions Built to Order"
    ],
    featuredBrands: ["Springfit", "Sleepwell", "Coirfit", "Safari"]
  },
  {
    id: "pillows-bedding",
    slug: "pillows-bedding",
    name: "Pillows & Bedding",
    tagline: "Plush Comfort & Fine Linen Accessories",
    shortDescription: "Complete your sleep sanctuary with high thread-count linens, neck-contouring pillows, and soft dohars.",
    fullDescription: "Elevate your nightly routine with our fine bedding accessories. From neck-contouring cervical pillows to breathable Egyptian cotton bedsheets and lightweight silk-feeling dohars, each piece is selected for sensory luxury and durability.",
    heroImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Memory Foam Pillows", description: "Contoured neck support responding to body heat and shape." },
      { name: "Latex Pillows", description: "Resilient natural bounce providing cool, ventilated head support." },
      { name: "Fibre Pillows", description: "Ultra-soft down-alternative microfiber fill for cloud-like plushness." },
      { name: "Orthopedic Pillows", description: "Ergonomic cervical pillows designed to alleviate neck strain." },
      { name: "Bedsheets", description: "300-1000 thread count Egyptian and percale cotton sheet sets." },
      { name: "Comforters", description: "All-weather quilted duvets wrapped in silky sateen weaves." },
      { name: "Blankets", description: "Ultra-warm fleece, wool, and heavy plush winter throw blankets." },
      { name: "Dohars", description: "Lightweight 3-layer traditional summer quilts crafted from pure cotton." }
    ],
    benefits: [
      "Ergonomic Cervical Support",
      "Temperature-Regulating Fabrics",
      "Machine-Washable Durability",
      "Ultra-Plush Touch & Finish"
    ],
    featuredBrands: ["Springfit", "D'Decor", "Fabri Care"]
  },
  {
    id: "curtains",
    slug: "curtains",
    name: "Designer Curtains",
    tagline: "Architectural Drapery & Couture Window Coverings",
    shortDescription: "Enhance your interiors with customized curtains, sheer drapes, motorized tracks, and blackout fabrics.",
    fullDescription: "Window treatments frame your light and define room ambiance. Galaxy Living Studio presents an extensive library of designer drapery fabrics, including Belgian linens, embroidered silks, thermal blackouts, and whisper-quiet motorized curtain tracks.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Sheer Curtains", description: "Diffuses natural sunlight while providing soft day-time privacy." },
      { name: "Blackout Curtains", description: "100% light blockage and thermal insulation for bedrooms and home theaters." },
      { name: "Eyelet Curtains", description: "Modern metal ring headers creating clean, contemporary vertical folds." },
      { name: "Pinch Pleat Curtains", description: "Classic tailored triple pleats for elegant formal living areas." },
      { name: "Ripple Fold Curtains", description: "Continuous S-curve wave draping running seamlessly along sleek tracks." },
      { name: "Motorized Curtain Systems", description: "Smart home integrated automated opening via remote or app." },
      { name: "Customized Curtains", description: "Bespoke heights, custom contrast borders, and hand-embroidered motifs." }
    ],
    additionalOfferings: [
      "In-home measurement & light analysis",
      "Precision custom stitching by master tailors",
      "Heavy-duty ceiling & wall track installation"
    ],
    benefits: [
      "Complete Light Control & Thermal Efficiency",
      "Smart Home Automation Compatible",
      "Made-to-Measure Tailoring",
      "Acoustic Sound Dampening"
    ],
    featuredBrands: ["D'Decor", "Fabri Care", "Harit"]
  },
  {
    id: "blinds",
    slug: "blinds",
    name: "Window Blinds",
    tagline: "Modern Precision Light Control Systems",
    shortDescription: "Sleek roller, zebra, wooden, and motorized blinds engineered for clean architectural lines.",
    fullDescription: "From minimalist office suites to sun-drenched penthouses, our window blinds combine crisp geometric aesthetics with effortless functionality. Explore motorized roller shades, dual-tone zebra blinds, and real wood venetians.",
    heroImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Roller Blinds", description: "Minimalist solar screen and blackout shades for crisp light filtration." },
      { name: "Zebra Blinds", description: "Dual-layer alternating sheer and solid stripes for adjustable opacity." },
      { name: "Roman Blinds", description: "Soft fabric horizontal folds offering timeless interior warmth." },
      { name: "Venetian Blinds", description: "Adjustable aluminum and faux-wood slats for precise angle tilt control." },
      { name: "Vertical Blinds", description: "Ideal for tall sliding glass doors and expansive floor-to-ceiling windows." },
      { name: "Wooden Blinds", description: "Authentic hardwood slats bringing natural organic warmth." },
      { name: "Honeycomb Blinds", description: "Cellular air pockets providing superior heat and cold insulation." },
      { name: "Motorized Blinds", description: "Wireless RF remote and smart app automation systems." },
      { name: "Skylight Blinds", description: "Tensioned roof window blinds designed for overhead sunlight management." }
    ],
    benefits: [
      "UV & Infrared Radiation Reduction",
      "Compact Minimalist Footprint",
      "Motorized & Smart Home Ready",
      "Moisture & Dust Resistant Coatings"
    ],
    featuredBrands: ["MAC Blinds", "Johnson Blinds", "Sonata Designer Blinds"]
  },
  {
    id: "sofa-fabrics-upholstery",
    slug: "sofa-fabrics-upholstery",
    name: "Sofa Fabrics & Upholstery",
    tagline: "Tactile Luxury Textiles & High-Performance Leathers",
    shortDescription: "Reimagine your seating with stain-resistant velvet, rich leatherette, and couture upholstery textiles.",
    fullDescription: "Transform worn or new seating with our master upholstery collection. We house thousands of tactile fabric swatches ranging from Belgian chenilles and bouclé to liquid-repellent performance fabrics and full-grain leatherette.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Designer Sofa Fabrics", description: "Intricate weaves, jacquards, and geometric upholstery patterns." },
      { name: "Imported Upholstery Fabrics", description: "European wool blends, bouclé, and micro-fiber swatches." },
      { name: "Velvet Fabrics", description: "Plush high-pile velvets with rich jewel-tone depth." },
      { name: "Leatherette", description: "Supple, easy-clean synthetic leathers with realistic grain textures." },
      { name: "Performance Fabrics", description: "Stain-shield technology allowing water-only stain cleanup." },
      { name: "Outdoor Fabrics", description: "UV-fade resistant and waterproof textiles for patio lounge chairs." }
    ],
    benefits: [
      "Stain-Shield & Liquid Repellent Options",
      "High Martindale Abrasion Ratings",
      "Custom Re-Upholstery Craftsmanship",
      "Color-Fast & Anti-Fading Protection"
    ],
    featuredBrands: ["D'Decor", "Fabri Care", "Harit"]
  },
  {
    id: "wallpapers",
    slug: "wallpapers",
    name: "Luxury Wallpapers",
    tagline: "Statement Murals & Textured Accent Surfaces",
    shortDescription: "Transform plain walls into works of art with 3D textures, metallic accents, and imported rolls.",
    fullDescription: "Breathe dramatic character into your accent walls. Our collection spans hand-embossed textures, metallic geometric prints, tropical botanical murals, and heavy-duty washable commercial vinyl wallpapers.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Designer Wallpapers", description: "Couture prints curated from top international decor houses." },
      { name: "Luxury Wallpapers", description: "Gold leaf foil, silk thread, and hand-embossed surface finishes." },
      { name: "Textured Wallpapers", description: "Grasscloth, linen texture, and plaster effect tactile surfaces." },
      { name: "Vinyl Wallpapers", description: "Washable, durable coverings ideal for high-traffic hallways." },
      { name: "3D Wallpapers", description: "Optical depth patterns creating spatial intrigue and relief." },
      { name: "Kids Wallpapers", description: "Whimsical, playful, and non-toxic nursery wall coverings." },
      { name: "Commercial Wallpapers", description: "Fire-rated heavy-duty wall coverings for hotel lobbies and offices." },
      { name: "Imported Collections", description: "Exclusive rolls imported directly from European decor studios." }
    ],
    benefits: [
      "Seamless Installation by Wall Specialists",
      "Washable & Scuff-Resistant Finishes",
      "Odourless & Eco-Friendly Adhesives",
      "Instant Spatial Transformation"
    ],
    featuredBrands: ["Fine Decor"]
  },
  {
    id: "flooring",
    slug: "flooring",
    name: "Wooden & SPC Flooring",
    tagline: "Warm Organic Grain & Waterproof Engineered Planks",
    shortDescription: "High-grade laminate, SPC stone plastic composite, and natural hardwood floorboards.",
    fullDescription: "Ground your space with luxury underfoot. Whether you prefer the authentic feel of engineered oak hardwood, the waterproof durability of SPC planks, or high-abrasion AC4 laminate floors, we provide turn-key installation.",
    heroImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Laminate Flooring", description: "High-density fiberboard planks with realistic timber textures." },
      { name: "SPC Flooring", description: "100% waterproof Stone Plastic Composite flooring ideal for kitchens." },
      { name: "Engineered Wooden Flooring", description: "Real hardwood top layer bonded over multi-ply stability cores." },
      { name: "Luxury Vinyl Flooring", description: "Soft, silent luxury vinyl tiles with acoustic underlayment." },
      { name: "Deck Flooring", description: "Weatherproof composite teak wood decking for balconies and pools." }
    ],
    benefits: [
      "100% Waterproof & Termite Proof Options",
      "Click-Lock Precision Jointing",
      "High Scratch & Dent Resistance",
      "Subfloor Preparation & Underlayment Included"
    ],
    featuredBrands: ["Galaxy Premier Flooring"]
  },
  {
    id: "furniture",
    slug: "furniture",
    name: "Luxury Furniture",
    tagline: "Signature Seating, Dining Suites & Master Beds",
    shortDescription: "Curated collection of motorized recliners, solid wood dining tables, plush bedframes, and accent chairs.",
    fullDescription: "Imbue your living and sleeping areas with sculptural elegance. Our ready furniture collection offers motorized leather recliners, marble-topped dining tables, ergonomic lounge chairs, and upholstered platform beds.",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Recliners", description: "Motorized power recliners with USB charging and lumbar support." },
      { name: "Sofas", description: "Modular sectionals, Chesterfield couches, and sleek 3-seater sofas." },
      { name: "Dining Tables", description: "Italian marble and solid teak dining suites accommodating 6-12 guests." },
      { name: "Beds", description: "Upholstered wingback headboards and hydraulic storage bed frames." },
      { name: "Wardrobes", description: "Sliding glass wardrobes and walk-in closet configurations." },
      { name: "Coffee Tables", description: "Nesting glass, brass, and solid wood center tables." },
      { name: "TV Units", description: "Floating media consoles with integrated LED backlighting." },
      { name: "Side Tables", description: "Compact accent nightstands and pedestal end tables." },
      { name: "Accent Chairs", description: "Sculptural armchair statement pieces in rich velvet." }
    ],
    benefits: [
      "Kiln-Dried Solid Hardwood Frames",
      "Ergonomic Posture Engineering",
      "Premium Hardware & Soft-Close Slides",
      "White-Glove Delivery & Assembly"
    ],
    featuredBrands: ["Galaxy Bespoke Collection"]
  },
  {
    id: "customized-furniture",
    slug: "customized-furniture",
    name: "Customized Furniture",
    tagline: "Bespoke Carpentry Tailored to Your Architecture",
    shortDescription: "Custom living room, bedroom, wardrobe, office, and hospitality furniture crafted to exact dimensions.",
    fullDescription: "Off-the-shelf furniture rarely fits unique architectural footprints. Our master carpenters and CNC manufacturing unit fabricate custom wardrobes, media units, headboards, and executive desks designed exclusively for your space.",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c5163?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Living Room Custom Units", description: "Custom partition units, bar counters, and wall-to-wall consoles." },
      { name: "Bedroom Suites", description: "Integrated headboard wall panelling, floating side tables, and bedframes." },
      { name: "Dining Area Credenzas", description: "Bespoke buffets, crockery units, and custom wood dining tops." },
      { name: "Modular Wardrobes", description: "Floor-to-ceiling glass, veneer, or acrylic wardrobe systems." },
      { name: "Custom TV Units", description: "Acoustically treated media walls with hidden wire management." },
      { name: "Office Furniture", description: "Executive desks, conference tables, and ergonomic workstation setups." },
      { name: "Hotels & Hospitality", description: "Bulk bespoke room furniture for boutique hotels and luxury resorts." },
      { name: "Commercial Spaces", description: "Reception counters, retail display fixtures, and lounge seating." }
    ],
    benefits: [
      "3D Render & Material Selection Before Production",
      "Millimeter-Accurate Site Measurement",
      "Premium Hardware (Blum, Hettich)",
      "Termite & Moisture-Proof Marine Plywood Base"
    ],
    featuredBrands: ["Galaxy Workshop"]
  },
  {
    id: "glass-solutions",
    slug: "glass-solutions",
    name: "Glass Solutions & Window Films",
    tagline: "Architectural Glass Partitions & Privacy Glazing",
    shortDescription: "Toughened shower enclosures, decorative mirrors, frosted privacy films, and sun control solutions.",
    fullDescription: "Glass opens up interior volume while maintaining light flow. We specify, supply, and install custom toughened glass partitions, frameless shower cubicles, decorative bronze mirrors, and high-performance solar control films.",
    heroImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
    ],
    subcategories: [
      { name: "Decorative Glass", description: "Fluted, tinted, and back-painted glass panels for wall cladding." },
      { name: "Toughened Glass", description: "Safety tempered glass engineered for heavy structural loads." },
      { name: "Glass Partitions", description: "Sliding aluminum framed glass walls for modern office and home zoning." },
      { name: "Shower Enclosures", description: "Frameless 8mm/10mm glass cubicles with stainless steel fittings." },
      { name: "Glass Railings", description: "Sleek glass balcony and staircase balustrades." },
      { name: "Mirrors", description: "Custom LED backlit, bevelled, and bronze tinted wall mirrors." },
      { name: "Designer Glass Panels", description: "Etched and stained glass artwork panels for main doors." },
      { name: "Glass Window Films", description: "Architectural films enhancing aesthetic and energy efficiency." },
      { name: "Privacy Films", description: "Switchable or frosted vinyl films for conference rooms and bathrooms." },
      { name: "Sun Control Films", description: "Rejects 99% UV radiation and reduces heat load inside sunny rooms." },
      { name: "Safety & Security Films", description: "Heavy-duty shatter-proof film preventing glass fragment dispersion." }
    ],
    benefits: [
      "High Thermal & Acoustic Insulation",
      "Shatter-Resistant Tempered Safety Standards",
      "Custom Tint, Fluting & Beveling Options",
      "Professional Precision Glazing Installation"
    ],
    featuredBrands: ["Saint-Gobain Glass", "Galaxy Glass Craft"]
  }
];
