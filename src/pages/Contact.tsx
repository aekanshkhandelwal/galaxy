import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { COMPANY_DATA } from '@/data/company';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { FAQS_DATA } from '@/data/faqs';
import { AccordionItem } from '@/components/ui/Accordion';
import { buildWhatsAppEnquiryUrl } from '@/utils/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'General Inquiry',
    date: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = [
      'Hello Galaxy Living Studio, I have a new enquiry.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Category: ${formData.category}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n');
    window.open(buildWhatsAppEnquiryUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Galaxy Living Studio | Ghaziabad Showroom</title>
        <meta
          name="description"
          content="Visit Galaxy Living Studio at 340, Ambedkar Road, Opp. Maruti Nexa Showroom, Ghaziabad. Call +91-9217516355 or book a showroom consultation online."
        />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            subtitle="Connect & Experience"
            title="Visit Our 10,000 Sq. Ft. Flagship Showroom"
            description="Our senior interior specialists and sleep consultants are ready to welcome you at Ambedkar Road, Ghaziabad."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Showroom Contact Card */}
            <div className="lg:col-span-5 bg-luxury-black text-luxury-white p-8 sm:p-12 border border-luxury-gold/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-gold flex items-center gap-2 font-semibold mb-6">
                  <Sparkles className="w-4 h-4" /> Experience Centre Details
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-white mb-8">
                  GALAXY LIVING STUDIO
                </h2>

                <div className="space-y-6 font-sans text-sm text-luxury-gray/90 font-light">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Showroom Address</h4>
                      <p className="leading-relaxed">{COMPANY_DATA.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Direct Phone</h4>
                      <a href={`tel:${COMPANY_DATA.phone}`} className="hover:text-luxury-gold transition-colors block">
                        {COMPANY_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Email</h4>
                      <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-luxury-gold transition-colors block">
                        {COMPANY_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-luxury-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Business Hours</h4>
                      <p>{COMPANY_DATA.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappPhone}?text=Hello%20Galaxy%20Living,%20I%20want%20to%20visit%20your%20showroom.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-luxury-gold text-luxury-black text-xs font-sans uppercase tracking-[0.2em] font-semibold py-4 hover:bg-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Chat Support
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-luxury-ivory p-8 sm:p-12 border border-luxury-black/10">
              <h3 className="font-serif text-3xl text-luxury-black mb-2">
                Book a Consultation Appointment
              </h3>
              <p className="font-sans text-xs text-luxury-charcoal/70 mb-8">
                Fill out the form below to reserve an exclusive consultation with our lead interior designer.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-luxury-bronze mx-auto" />
                  <h4 className="font-serif text-2xl text-luxury-black">
                    Your Consultation Request is Submitted
                  </h4>
                  <p className="text-xs text-luxury-charcoal/80">
                    We will call you shortly at <span className="font-semibold">{formData.phone}</span> to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-luxury-white border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 92175 16355"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-luxury-white border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-luxury-white border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-semibold mb-1">
                        Product / Solution Area
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-luxury-white border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-semibold mb-1">
                      Project Notes / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about your space or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-white border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <LuxuryButton type="submit" variant="primary" size="lg" icon={<Send className="w-4 h-4" />}>
                      Submit Consultation Request
                    </LuxuryButton>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Showroom map */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl text-luxury-black mb-6">
              Showroom Location Map
            </h3>
            <div className="w-full h-[400px] bg-luxury-ivory border border-luxury-black/10 overflow-hidden shadow-subtle">
              <iframe
                title="Galaxy Living Studio Ghaziabad Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.418%2C28.655%2C77.448%2C28.679&layer=mapnik&marker=28.667%2C77.433"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=28.667&mlon=77.433#map=16/28.667/77.433"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-[11px] font-sans uppercase tracking-widest text-luxury-bronze hover:text-luxury-black transition-colors"
            >
              Open directions in map â†’
            </a>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Frequently Asked Questions"
              title="Everything You Need to Know Before Visiting"
            />
            <div className="space-y-2">
              {FAQS_DATA.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
