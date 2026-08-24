import React, { useState } from 'react';
import { X, Check, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

interface VIPProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const VIPProposalModal: React.FC<VIPProposalModalProps> = ({ isOpen, onClose, initialData }) => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    vertical: initialData?.sector || 'Technology & Startups',
    budget: '$10k - $25k / mo',
    timeline: initialData?.duration || '6 Months',
    message: '',
    deliverables: ['Tier-1 Media Pitching', 'Executive Thought Leadership']
  });

  if (!isOpen) return null;

  const toggleDeliverable = (item: string) => {
    soundFx.playClick();
    if (formData.deliverables.includes(item)) {
      setFormData({
        ...formData,
        deliverables: formData.deliverables.filter(d => d !== item)
      });
    } else {
      setFormData({
        ...formData,
        deliverables: [...formData.deliverables, item]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card-gold rounded-3xl p-6 sm:p-10 border border-gold-accent/50 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-zinc-200 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-gold-accent/20 text-gold-accent text-[11px] font-mono uppercase tracking-widest mb-2 font-bold">
                <Sparkles className="w-3 h-3" />
                VIP Campaign Proposal Request
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Let's Raise The Bar Together
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                Tell us about your brand, stage, and goals. Our senior partners will prepare a tailored 12-month PR roadmap within 48 hours.
              </p>
            </div>

            {/* Form with prominent input borders and contrast */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexandra Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all placeholder-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all placeholder-zinc-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Artist Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all placeholder-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Vertical Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                  Industry Specialization
                </label>
                <select
                  value={formData.vertical}
                  onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all"
                >
                  <option value="Technology & Startups">Technology & Startups (SaaS, AI, FinTech)</option>
                  <option value="Environmental & Sustainable">Environmental & Sustainable (ESG, CleanTech)</option>
                  <option value="Visionary Artists & Creators">Visionary Artists & Creators (NFT, Film, Art)</option>
                  <option value="Elite Athletes & Sports">Elite Athletes & Sports Figures</option>
                </select>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-2">
                  Key Requirements (Select Desired Services)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Tier-1 Media Pitching',
                    'Product / Funding Launch Blitz',
                    'Executive Thought Leadership',
                    'Crisis & Reputation Defense',
                    'Hollywood & Red Carpet Events',
                    'Podcast & Broadcast TV Tours'
                  ].map((item) => {
                    const isChecked = formData.deliverables.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleDeliverable(item)}
                        className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold border flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-gold-accent/25 border-gold-accent text-white shadow-md'
                            : 'bg-[#151522] border-white/15 text-zinc-300 hover:bg-[#1E1E2F]'
                        }`}
                      >
                        <span>{item}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked ? 'bg-gold-accent border-gold-accent text-black font-bold' : 'border-zinc-400 bg-black/40'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gold-accent font-bold mb-1.5">
                  Project Notes & Upcoming Milestones
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any upcoming funding news, product launches, or target deadlines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#12121C] border border-white/25 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 text-white text-sm outline-none transition-all resize-none placeholder-zinc-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-gold-solid w-full py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Submit VIP Proposal Request</span>
              </button>

            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-accent/20 border-2 border-gold-accent mx-auto flex items-center justify-center text-gold-accent">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-serif text-3xl font-normal text-white">
              Proposal Request Received
            </h3>
            <p className="text-zinc-200 text-sm max-w-md mx-auto leading-relaxed font-medium">
              Thank you, <span className="text-white font-bold">{formData.name}</span>. Our partners at 7083 Hollywood Blvd are reviewing your details and will deliver your custom media roadmap to <span className="text-gold-accent font-bold">{formData.email}</span> within 48 hours.
            </p>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="btn-gold-solid px-8 py-3 rounded-full text-xs uppercase tracking-wider cursor-pointer"
            >
              Back to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
