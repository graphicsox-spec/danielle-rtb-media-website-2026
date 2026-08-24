import React from 'react';
import { Sparkles, Play, ArrowRight, Award, ShieldCheck, Flame, TrendingUp, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { AGENCY_INFO } from '../data/rtbData';

interface HeroProps {
  onOpenProposal: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal, onOpenVideo }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#07070A] bg-noise">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-gold-accent/10 to-sky-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -top-24 left-10 w-96 h-96 bg-gold-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Hollywood Badge & Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-gold-accent/30 shadow-lg shadow-gold-accent/10 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-200">
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
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-accent/30 hidden sm:block" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C50 2 150 2 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-300 leading-relaxed font-light mb-10">
          Raise The Bar Media represents high-growth{' '}
          <span className="text-white font-medium">Technology Startups</span>,{' '}
          <span className="text-white font-medium">Climate & Environmental Pioneers</span>,{' '}
          <span className="text-white font-medium">Visionary Artists</span>, and{' '}
          <span className="text-white font-medium">Elite Athletes</span>. We architect narratives that command global authority across TechCrunch, Forbes, WSJ, and CNN.
        </p>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenProposal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold-accent via-amber-300 to-gold-metallic text-black font-bold text-sm uppercase tracking-wider shadow-xl shadow-gold-accent/25 hover:shadow-gold-accent/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Request Agency Proposal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenVideo();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full sm:w-auto px-7 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-sm tracking-wide border border-white/15 hover:border-gold-accent/40 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center group-hover:bg-gold-accent group-hover:text-black transition-colors">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Agency Reel</span>
          </button>
        </div>

        {/* Live Stat Bar / Trust Indicators */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.placementsSecured}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Tier-1 Press Placements
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {AGENCY_INFO.metrics.earnedMediaValue}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Earned Media Value
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.globalMediaReach}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Global Audience Reach
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center justify-center gap-1">
              {AGENCY_INFO.metrics.avgTimeToFirstTier1}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Avg. Time to 1st Hit
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
