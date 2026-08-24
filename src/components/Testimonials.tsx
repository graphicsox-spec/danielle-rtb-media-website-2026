import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/rtbData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Client Endorsements
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Trusted by Visionaries Across Industries
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Hear directly from the founders, creators, and leaders we have championed on the global stage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-gold-accent/40 transition-all duration-500 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-gold-accent">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-accent" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {t.tag}
                  </span>
                </div>

                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-accent to-amber-400 flex items-center justify-center font-bold text-black text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {t.title}, <span className="text-gold-accent/90">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
