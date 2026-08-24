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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/15 border border-gold-accent/30 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Industry Verticals
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Boutique PR Tailored for Your Domain
            </h2>
          </div>
          <p className="text-zinc-300 max-w-md text-sm sm:text-base">
            We don't do generic PR. Each vertical has dedicated senior narrative architects with decades of domain journalism contacts.
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {VERTICALS.map((v) => {
            const Icon = icons[v.id];
            const isSelected = v.id === selectedId;
            return (
              <button
                key={v.id}
                onClick={() => handleTabClick(v.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`flex items-center gap-3 p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-gold-accent/25 to-amber-500/15 border-2 border-gold-accent shadow-xl shadow-gold-accent/15 text-white'
                    : 'glass-card hover:border-gold-accent/40 text-zinc-200 hover:text-white'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? 'bg-gold-accent text-black font-bold' : 'bg-white/10 text-gold-accent'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase font-mono tracking-wider text-gold-accent font-bold truncate">{v.badge}</div>
                  <div className="font-display font-bold text-sm sm:text-base truncate text-white">{v.title.split(' ')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Showcase Banner */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-gold-accent/40 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm pointer-events-none"
            style={{ backgroundImage: `url(${currentVertical.featuredImage})` }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-gold-accent/20 text-gold-accent border border-gold-accent/40 font-bold">
                {currentVertical.badge}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-tight">
                {currentVertical.headline}
              </h3>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                {currentVertical.description}
              </p>

              {/* Client Roster Pills */}
              <div className="pt-4">
                <div className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold mb-3">
                  Representative Clients & Placements:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentVertical.clientNames.map((client, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-zinc-100 hover:border-gold-accent hover:text-gold-accent transition-colors"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - PROMINENT SOLID GOLD */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    soundFx.playSuccess();
                    onOpenProposal();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="btn-gold-solid px-8 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Launch {currentVertical.title.split('&')[0]} Campaign</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/15 space-y-6 bg-black/50">
                <div className="text-xs uppercase font-mono tracking-widest text-gold-accent flex items-center gap-2 font-bold">
                  <Star className="w-4 h-4 fill-gold-accent" />
                  Demonstrated Track Record
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {currentVertical.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-zinc-300 font-semibold">{m.label}</span>
                      <span className="font-display text-2xl font-extrabold text-gradient-gold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-zinc-300 italic">
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
