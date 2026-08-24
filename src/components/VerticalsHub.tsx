import React, { useState } from 'react';
import { Cpu, Leaf, Palette, Trophy, ArrowRight, Star, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { VERTICALS } from '../data/rtbData';

interface VerticalsHubProps {
  activeCategory?: string;
  onSelectCategory?: (id: string) => void;
  onOpenProposal: () => void;
}

export const VerticalsHub: React.FC<VerticalsHubProps> = ({ activeCategory = 'tech', onSelectCategory, onOpenProposal }) => {
  const [selectedId, setSelectedId] = useState<string>(activeCategory);

  const icons = {
    tech: Cpu,
    environmental: Leaf,
    artists: Palette,
    athletes: Trophy
  };

  const handleTabClick = (id: string) => {
    soundFx.playClick();
    setSelectedId(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  const currentVertical = VERTICALS.find(v => v.id === selectedId) || VERTICALS[0];

  return (
    <section id="verticals" className="py-24 bg-[#09090E] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Industry Verticals
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Boutique PR Tailored for Your Domain
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base">
            We don't do generic PR. Each vertical has dedicated senior narrative architects with decades of domain journalism contacts.
          </p>
        </div>

        {/* Vertical Tabs - ALWAYS CLEAR GOLD ICONS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {VERTICALS.map((v) => {
            const Icon = icons[v.id];
            const isSelected = v.id === selectedId;
            return (
              <button
                key={v.id}
                onClick={() => handleTabClick(v.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`flex items-center gap-3 p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181824] border border-gold-accent/50 shadow-lg text-white'
                    : 'glass-card hover:border-white/20 text-zinc-300 hover:text-white'
                }`}
              >
                {/* Icon box is ALWAYS bright gold on subtle bg - NEVER BLACK */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                  isSelected ? 'bg-gold-accent/20 border-gold-accent text-gold-accent' : 'bg-white/5 border-white/10 text-gold-accent'
                }`}>
                  <Icon className="w-5 h-5 text-gold-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-gold-accent/90 truncate">{v.badge}</div>
                  <div className="font-display font-bold text-sm sm:text-base truncate text-white">{v.title.split(' ')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Showcase Banner */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-gold-accent/30 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm pointer-events-none"
            style={{ backgroundImage: `url(${currentVertical.featuredImage})` }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-gold-accent/15 text-gold-accent border border-gold-accent/30">
                {currentVertical.badge}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-tight">
                {currentVertical.headline}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {currentVertical.description}
              </p>

              {/* Client Roster Pills */}
              <div className="pt-2">
                <div className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-3">
                  Representative Clients & Placements:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentVertical.clientNames.map((client, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-200 hover:border-gold-accent/40 hover:text-gold-accent transition-colors"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - CLEAN PRIMARY */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    soundFx.playSuccess();
                    onOpenProposal();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="btn-primary px-7 py-3 text-xs uppercase tracking-wider"
                >
                  <span>Launch {currentVertical.title.split('&')[0]} Campaign</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6 bg-black/40">
                <div className="text-xs uppercase font-mono tracking-widest text-gold-accent flex items-center gap-2 font-semibold">
                  <Star className="w-4 h-4 fill-gold-accent" />
                  Demonstrated Track Record
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {currentVertical.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-zinc-300 font-medium">{m.label}</span>
                      <span className="font-display text-2xl font-extrabold text-gradient-gold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-zinc-400 italic">
                  *Verified press coverage across TechCrunch, Forbes, WSJ, Bloomberg, and global wires.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
