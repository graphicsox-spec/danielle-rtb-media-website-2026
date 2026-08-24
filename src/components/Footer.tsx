import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { AGENCY_INFO, VERTICALS } from '../data/rtbData';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onOpenProposal: () => void;
  onSelectCategory: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal, onSelectCategory }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-300 text-xs border-t border-white/15 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pitch Banner with PROMINENT SOLID BUTTON */}
        <div className="glass-card-gold rounded-3xl p-8 sm:p-12 mb-16 border border-gold-accent/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-accent font-bold">
              Ready To Command Global Attention?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-1">
              Let's Raise The Bar For Your Brand.
            </h3>
            <p className="text-zinc-200 text-sm max-w-xl mt-2 font-normal">
              Join 45+ visionary tech startups, sustainability leaders, artists, and elite athletes who rely on RTB Media.
            </p>
          </div>

          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenProposal();
            }}
            className="btn-gold-solid px-9 py-4 rounded-full text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Request Agency Proposal</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Footer Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Office */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-accent/20 border-2 border-gold-accent flex items-center justify-center font-display font-extrabold text-gold-accent text-sm">
                RTB
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                RAISE THE BAR MEDIA
              </span>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed max-w-sm">
              Boutique PR & Marketing Agency headquartered in Hollywood, Los Angeles. Representing transformative founders, climate leaders, artists, and athletes.
            </p>
            <div className="space-y-2 pt-2 text-xs font-medium">
              <div className="flex items-center gap-2 text-zinc-200">
                <MapPin className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <span>{AGENCY_INFO.address.street}, Hollywood, {AGENCY_INFO.address.city}, {AGENCY_INFO.address.state} {AGENCY_INFO.address.zip}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <Phone className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <a href={`tel:${AGENCY_INFO.phone}`} className="hover:text-gold-accent transition-colors font-mono">{AGENCY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <Mail className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-gold-accent transition-colors font-mono">{AGENCY_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Col 2: Verticals */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Specializations
            </div>
            <ul className="space-y-2.5">
              {VERTICALS.map((v) => (
                <li key={v.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(v.id);
                      const el = document.querySelector('#verticals');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-gold-accent transition-colors text-left"
                  >
                    {v.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Boutique Services
            </div>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-gold-accent transition-colors">PR Strategy & Narrative</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Media Relations & Pitching</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Executive Thought Leadership</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Launch & Funding Blitzes</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Crisis Management & Shield</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Hollywood & Event PR</a></li>
            </ul>
          </div>

          {/* Col 4: Outlets & Authority */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Top Placements
            </div>
            <div className="flex flex-wrap gap-2">
              {['TechCrunch', 'Forbes', 'WSJ', 'Bloomberg', 'Wired', 'CNN', 'NYT', 'Fast Company'].map((out) => (
                <span key={out} className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-zinc-100 border border-white/15 font-medium">
                  {out}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} Raise The Bar Media (RTB Media). All Rights Reserved. 7083 Hollywood Blvd, Los Angeles, CA.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-gold-accent transition-colors flex items-center gap-1 font-mono uppercase tracking-widest font-bold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3.5 h-3.5 -rotate-45 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
