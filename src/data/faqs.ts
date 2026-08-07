export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Mattresses" | "Curtains & Blinds" | "Interiors & Custom";
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Where is Galaxy Living Studio located in Ghaziabad?",
    answer: "Our flagship 10,000 sq.ft. experience centre is located at 340, Ambedkar Road, Opposite Maruti Nexa Showroom, Ghaziabad – 201001. We offer dedicated parking and personalized interior consultations.",
    category: "General"
  },
  {
    question: "Do you offer custom mattress sizes for non-standard bed frames?",
    answer: "Yes, we specialize in custom-tailored mattress dimensions. Whether you have an imported Italian bedframe, vintage antique wood, or custom carpentry, we craft mattresses to exact millimeter specifications.",
    category: "Mattresses"
  },
  {
    question: "Can I test mattresses and touch fabric swatches before placing an order?",
    answer: "Absolutely. Our Ambedkar Road showroom is designed specifically as an experience centre where you can lie down on different mattress firmness tiers and explore thousands of fabric, wallpaper, and flooring swatches.",
    category: "General"
  },
  {
    question: "Do you provide motorized curtain tracks and smart home blinds?",
    answer: "Yes, we integrate motorized curtain tracks and smart window blinds (MAC Blinds, Johnson Blinds) compatible with Alexa, Google Home, Control4, and RF remotes.",
    category: "Curtains & Blinds"
  },
  {
    question: "What brand partnerships do you hold?",
    answer: "We are authorized dealers and display partners for Springfit, Sleepwell, Coirfit, Safari, D'Decor, Fabri Care, Harit, Fine Decor Wallpapers, MAC Blinds, Johnson Blinds, and Sonata Designer Blinds.",
    category: "General"
  },
  {
    question: "How does the interior design & custom furniture process work?",
    answer: "We start with an in-studio consultation, followed by laser site measurement, 2D/3D design plans, material selection, custom workshop manufacturing, and white-glove installation at your home.",
    category: "Interiors & Custom"
  }
];
