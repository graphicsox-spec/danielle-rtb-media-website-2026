import React from 'react';
import { TIER1_MEDIA } from '../data/rtbData';

export const MediaMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-[#09090D] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-mono text-zinc-300 font-semibold">
          Consistently Featured In The World’s Most Influential Publications
        </p>
      </div>

      {/* Track: Slower Speed for Full Readability */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 items-center gap-8 animate-marquee-slow">
          {TIER1_MEDIA.concat(TIER1_MEDIA).map((media, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#14141E] border border-white/15 hover:border-gold-accent/50 transition-all cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-gold-accent"></div>
              <span className="font-display font-bold text-base sm:text-lg text-zinc-100 group-hover:text-gold-accent tracking-tight transition-colors">
                {media.name}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-gold-accent border border-gold-accent/30 font-bold">
                {media.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
