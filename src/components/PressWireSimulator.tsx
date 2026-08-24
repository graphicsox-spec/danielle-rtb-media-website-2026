import React, { useState, useEffect } from 'react';
import { Radio, Share2, ExternalLink, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PRESS_WIRE_SIMULATION } from '../data/rtbData';

export const PressWireSimulator: React.FC = () => {
  const [wireIndex, setWireIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWireIndex((prev) => (prev + 1) % PRESS_WIRE_SIMULATION.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#060609] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wire Box */}
        <div className="glass-card-gold rounded-2xl p-4 sm:p-6 border border-gold-accent/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Live Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-red-400" />
                RTB PRESS WIRE
              </span>
              <span className="text-[10px] font-mono text-gold-accent">
                LIVE EDITORIAL FEED
              </span>
            </div>
          </div>

          {/* Scrolling Headline */}
          <div className="flex-1 w-full overflow-hidden text-center md:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 transition-all duration-500">
              <span className="text-[11px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-zinc-300 shrink-0">
                {PRESS_WIRE_SIMULATION[wireIndex].outlet}
              </span>
              <p className="text-sm sm:text-base font-medium text-white hover:text-gold-accent transition-colors truncate">
                "{PRESS_WIRE_SIMULATION[wireIndex].headline}"
              </p>
            </div>
          </div>

          {/* Time & Badge */}
          <div className="flex items-center gap-4 shrink-0 text-xs font-mono text-zinc-400">
            <span>{PRESS_WIRE_SIMULATION[wireIndex].timestamp}</span>
            <span className="px-2 py-1 rounded bg-gold-accent/10 text-gold-accent border border-gold-accent/20 text-[10px]">
              {PRESS_WIRE_SIMULATION[wireIndex].category}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
