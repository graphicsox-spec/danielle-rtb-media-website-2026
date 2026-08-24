import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { AGENCY_INFO } from '../data/rtbData';

interface HeroProps {
  onOpenProposal: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal, onOpenVideo }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#07070A]">
      {/* Background Cinematic Video Loop with subtle opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          src="https://rtb-media.com/wp-content/uploads/2021/08/Video-Home-page.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125 brightness-90 scale-105"
        />
        {/* Soft Vignette and Gradient overlay for perfect typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070A]/85 via-[#07070A]/60 to-[#07070A]"></div>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-gold-accent/10 to-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Balanced, Elegant Eyebrow Badge (No heavy thick borders) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-medium tracking-wide text-zinc-300">
            Boutique PR & Marketing Agency • Hollywood, Los Angeles
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-[11px] font-mono text-gold-accent hidden sm:inline font-semibold">
            98.4% Tier-1 Placement Rate
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          We Turn Visionaries Into{' '}
          <span className="font-serif italic font-normal text-gradient-gold block sm:inline relative">
            Global Headlines.
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-10">
          Raise The Bar Media represents high-growth{' '}
          <span className="text-white font-medium">Technology Startups</span>,{' '}
          <span className="text-white font-medium">Climate & Environmental Pioneers</span>,{' '}
          <span className="text-white font-medium">Visionary Artists</span>, and{' '}
          <span className="text-white font-medium">Elite Athletes</span>. We architect narratives that command authority across TechCrunch, Forbes, WSJ, and CNN.
        </p>

        {/* Dual Clean Luxury Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenProposal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="btn-primary w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider"
          >
            <span>Request Agency Proposal</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenVideo();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-xs tracking-wide"
          >
            <Play className="w-3.5 h-3.5 mr-2 text-gold-accent fill-gold-accent/20" />
            <span>Watch Agency Reel</span>
          </button>
        </div>

        {/* Live Stat Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.placementsSecured}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Tier-1 Press Placements
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {AGENCY_INFO.metrics.earnedMediaValue}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Earned Media Value
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold">
              {AGENCY_INFO.metrics.globalMediaReach}
            </div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Global Audience Reach
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
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
