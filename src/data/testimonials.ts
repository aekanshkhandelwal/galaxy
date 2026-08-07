export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  projectType: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    quote: "Galaxy Living Studio transformed our penthouse in Raj Nagar into a sanctuary. From testing the Springfit hotel mattress at their Ambedkar Road showroom to the precision stitching of D'Decor curtains, the quality is incomparable.",
    author: "Vikram & Ananya Sharma",
    role: "Homeowners",
    location: "Raj Nagar, Ghaziabad",
    rating: 5,
    projectType: "Full Residence Interior & Furnishing"
  },
  {
    id: "t2",
    quote: "As an architect, finding a single reliable partner for custom modular wardrobes, motorized MAC blinds, and toughened glass partitions was crucial. Galaxy Living Studio executed every detail with surgical precision.",
    author: "Ar. Rajesh Verma",
    role: "Principal Architect",
    location: "Noida Sector 44",
    rating: 5,
    projectType: "Luxury Villa Project"
  },
  {
    id: "t3",
    quote: "The personalized mattress consultation made all the difference for my chronic back pain. Their specialist guided us through orthopedic memory foam options with zero pushy sales talk.",
    author: "Dr. Sunita Kapoor",
    role: "Senior Consultant",
    location: "Indirapuram, Ghaziabad",
    rating: 5,
    projectType: "Custom Sleep System Curation"
  },
  {
    id: "t4",
    quote: "We furnished our 8,000 sq.ft corporate office with their commercial wallpapers, acoustic glass partitions, and executive lounge seating. Delivered on schedule and within budget.",
    author: "Rohan Malhotra",
    role: "Managing Director",
    location: "Ghaziabad Industrial Area",
    rating: 5,
    projectType: "Commercial Office Turnkey"
  }
];
