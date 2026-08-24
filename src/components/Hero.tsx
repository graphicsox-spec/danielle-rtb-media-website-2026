import React from 'react';
import { Play, ArrowRight, TrendingUp } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { AGENCY_INFO } from '../data/rtbData';

interface HeroProps {
  onOpenProposal: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal, onOpenVideo }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#07070A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-gold-accent/15 to-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Hollywood Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161622] border border-gold-accent/40 shadow-lg shadow-gold-accent/10 mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-100">
            Boutique PR & Marketing Agency • 7083 Hollywood Blvd, Los Angeles
          </span>
          <span className="text-gold-accent hidden sm:inline">•</span>
          <span className="text-[11px] font-mono text-gold-accent hidden sm:inline font-bold">
            98.4% Tier-1 Placement Rate
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          We Turn Visionaries Into{' '}
          <span className="font-serif italic font-normal text-gradient-gold block sm:inline relative">
            Global Headlines.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-accent/40 hidden sm:block" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C50 2 150 2 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-200 leading-relaxed font-normal mb-10">
          Raise The Bar Media represents high-growth{' '}
          <span className="text-gold-accent font-semibold">Technology Startups</span>,{' '}
          <span className="text-gold-accent font-semibold">Climate & Environmental Pioneers</span>,{' '}
          <span className="text-gold-accent font-semibold">Visionary Artists</span>, and{' '}
          <span className="text-gold-accent font-semibold">Elite Athletes</span>. We architect narratives that command global authority across TechCrunch, Forbes, WSJ, and CNN.
        </p>

        {/* Dual High-Impact Action CTAs with PROMINENT SOLID STYLING */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-14">
          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenProposal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="btn-gold-solid w-full sm:w-auto px-9 py-4 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Request Agency Proposal</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenVideo();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="btn-gold-outline w-full sm:w-auto px-8 py-4 rounded-full text-sm tracking-wide flex items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gold-accent/20 border border-gold-accent flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Agency Reel</span>
          </button>
        </div>

        {/* Live Stat Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/15">
          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.placementsSecured}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-300 font-semibold mt-1">
              Tier-1 Press Placements
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {AGENCY_INFO.metrics.earnedMediaValue}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-300 font-semibold mt-1">
              Earned Media Value
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.globalMediaReach}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-300 font-semibold mt-1">
              Global Audience Reach
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {AGENCY_INFO.metrics.avgTimeToFirstTier1}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-300 font-semibold mt-1">
              Avg. Time to 1st Hit
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
