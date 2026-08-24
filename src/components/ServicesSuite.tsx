import React from 'react';
import { Compass, Megaphone, PenTool, Rocket, ShieldAlert, Film, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { SERVICES } from '../data/rtbData';

interface ServicesSuiteProps {
  onOpenProposal: () => void;
}

export const ServicesSuite: React.FC<ServicesSuiteProps> = ({ onOpenProposal }) => {
  const iconMap: Record<string, any> = {
    Compass,
    Megaphone,
    PenTool,
    Rocket,
    ShieldAlert,
    Film
  };

  return (
    <section id="services" className="py-24 bg-[#09090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Spectrum Boutique Capabilities
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Services Designed for Exponential Authority
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            From funding unveilings to global thought leadership and crisis defense, we provide high-velocity PR that moves markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] || Megaphone;
            return (
              <div
                key={s.id}
                onMouseEnter={() => soundFx.playHover()}
                className="group glass-card rounded-3xl p-8 border border-white/10 hover:border-gold-accent/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-accent transition-colors mb-1">
                    {s.title}
                  </h3>
                  <div className="text-xs font-mono text-gold-accent/80 uppercase tracking-wider mb-4">
                    {s.subtitle}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-6 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Key Deliverables:
                    </div>
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => {
                      soundFx.playSuccess();
                      onOpenProposal();
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gold-accent hover:text-black text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-gold-accent"
                  >
                    <span>Inquire About {s.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
