import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { buildWhatsAppEnquiryUrl } from '@/utils/whatsapp';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialCategory = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: initialCategory || 'General Interior Consultation',
    preferredDate: '',
    preferredTime: 'Morning (11:00 AM - 2:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = [
      'Hello Galaxy Living Studio, I would like to book a consultation.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Category: ${formData.category}`,
      `Preferred date: ${formData.preferredDate || 'Not specified'}`,
      `Preferred time: ${formData.preferredTime}`,
      `Requirements: ${formData.message || 'Not provided'}`,
    ].join('\n');
    window.open(buildWhatsAppEnquiryUrl(message), '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      // Could reset or leave submitted state
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-luxury-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-luxury-white text-luxury-black shadow-elevated border border-luxury-black/10 overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="bg-luxury-black text-luxury-white p-6 sm:p-8 flex items-start justify-between border-b border-luxury-gold/20">
            <div>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-luxury-gold flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Galaxy Living Experience Centre
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-luxury-white mt-1">
                Schedule a Consultation
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-luxury-gray/70 hover:text-white p-2 transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-luxury-bronze/10 text-luxury-bronze rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl text-luxury-black">
                  Consultation Request Received
                </h4>
                <p className="text-sm font-sans text-luxury-charcoal/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our senior interior specialist will call you at <span className="font-semibold">{formData.phone}</span> shortly to confirm your visit to our Ambedkar Road showroom.
                </p>
                <div className="pt-6">
                  <LuxuryButton onClick={onClose} variant="primary" size="md">
                    Close Window
                  </LuxuryButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs font-sans text-luxury-charcoal/70 mb-4">
                  Select your area of interest and preferred time to meet our design specialists at 340, Ambedkar Road, Ghaziabad.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Primary Solution / Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    >
                      <option value="General Interior Consultation">General Interior Consultation</option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      <option value="Residential Turnkey Interiors">Residential Turnkey Interiors</option>
                      <option value="Commercial Office Solutions">Commercial Office Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                      Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors"
                    >
                      <option value="Morning (11:00 AM - 2:00 PM)">Morning (11:00 AM - 2:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-luxury-black font-medium mb-1">
                    Project Notes / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your space, dimensions, or specific brand preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-luxury-ivory border border-luxury-black/10 focus:border-luxury-bronze focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-luxury-black/5">
                  <div className="flex items-center gap-2 text-[10px] text-luxury-charcoal/60">
                    <MapPin className="w-3.5 h-3.5 text-luxury-bronze" />
                    <span>340 Ambedkar Road, Opp. Nexa Showroom</span>
                  </div>
                  <LuxuryButton type="submit" variant="bronze" size="md" icon={<Send className="w-3.5 h-3.5" />}>
                    Confirm Request
                  </LuxuryButton>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
