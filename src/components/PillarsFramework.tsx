import React, { useState } from 'react';
import { Compass, Zap, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const PillarsFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: "01",
      title: "Strategy",
      subtitle: "Narrative Engineering & Market Positioning",
      icon: Compass,
      description: "We don't rely on guesswork. We deconstruct your product, technology, or creative journey to craft an unassailable media angle that aligns with real-time editorial news cycles.",
      deliverables: [
        "Proprietary Angle & Hook Architecture",
        "Target Journalist & Editor Mapping",
        "Spokesperson Media Prep & Soundbite Coaching",
        "Competitive Share-of-Voice Landscape Audit"
      ],
      tag: "The Blueprint",
      stat: "100%",
      statLabel: "Custom Tailored Strategy"
    },
    {
      step: "02",
      title: "Execution",
      subtitle: "Relentless Tier-1 Pitching & Embargo Management",
      icon: Zap,
      description: "Our senior partners directly pitch editors at TechCrunch, Forbes, WSJ, and national broadcast networks with personalized, high-context angles that demand fast responses.",
      deliverables: [
        "Direct 1-on-1 Pitching to Senior Editors",
        "Exclusive Pre-briefings & Embargo Lifting",
        "Podcast, TV & Broadcast Coordination",
        "Executive Byline Placement & Thought Leadership"
      ],
      tag: "The Velocity",
      stat: "14 Days",
      statLabel: "Average First Tier-1 Hit"
    },
    {
      step: "03",
      title: "Results",
      subtitle: "Exponential Authority, Valuation & Backlink Power",
      icon: Trophy,
      description: "Press coverage is just the beginning. We help you leverage your media hits across investor decks, customer acquisition funnels, recruitment, and brand prestige.",
      deliverables: [
        "Verified Earned Media Value (EMV) Reporting",
        "SEO Backlink Authority & Search Dominance",
        "Investor & Customer Trust Amplification",
        "Long-term Sustained Media Momentum"
      ],
      tag: "The Impact",
      stat: "98.4%",
      statLabel: "Placement Success Rate"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#07070A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
            The RTB Methodology
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Strategy. Execution. Results.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Our three-stage framework turns complex innovations into irresistible, front-page media narratives.
          </p>
        </div>

        {/* Interactive 3-Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <div
                key={pillar.step}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'glass-card-gold shadow-2xl shadow-gold-accent/10 border-gold-accent/40 scale-[1.02]'
                    : 'glass-card hover:border-white/20'
                }`}
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-bold text-gradient-gold">
                    {pillar.step}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {pillar.tag}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <h4 className="text-xs uppercase tracking-wider text-gold-accent/90 font-mono mb-4">
                  {pillar.subtitle}
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-6 border-t border-white/10">
                  {pillar.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">{pillar.statLabel}</span>
                  <span className="font-display font-bold text-lg text-white">{pillar.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
