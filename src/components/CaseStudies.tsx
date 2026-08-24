import React, { useState } from 'react';
import { ArrowUpRight, X, Quote, Newspaper, TrendingUp } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { CASE_STUDIES, CaseStudy } from '../data/rtbData';

interface CaseStudiesProps {
  onOpenProposal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenProposal }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const openModal = (c: CaseStudy) => {
    soundFx.playClick();
    setSelectedCase(c);
  };

  const closeModal = () => {
    soundFx.playClick();
    setSelectedCase(null);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#07070A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Verified PR Impact
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Featured Client Case Studies
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base">
            Explore how we engineered media momentum for groundbreaking startups, ESG pioneers, and cultural icons.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              onClick={() => openModal(c)}
              onMouseEnter={() => soundFx.playHover()}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-gold-accent/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Overlay Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={c.featuredImg}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/40 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-gold-accent border border-gold-accent/30 font-semibold">
                    {c.client}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-500/30 font-medium">
                    {c.impactMetric}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300 bg-black/60 px-2 py-0.5 rounded">
                    {c.pressOutlets.slice(0, 3).join(' • ')}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-gold-accent transition-colors leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
                    {c.summary}
                  </p>
                </div>

                {/* Results Row */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                  {c.results.map((r, rIdx) => (
                    <div key={rIdx} className="text-center p-2 rounded-xl bg-white/[0.02]">
                      <div className="font-display font-extrabold text-lg sm:text-xl text-gradient-gold">
                        {r.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium mt-0.5 truncate">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clean Refined Button */}
                <div className="btn-card-action w-full py-2.5 text-xs uppercase tracking-wider">
                  <span>View Complete Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal (Fixed: Masked inside rounded frame with inner scroll) */}
      {selectedCase && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* Outer Rounded Container with OVERFLOW HIDDEN to mask corners */}
          <div className="relative w-full max-w-4xl max-h-[90vh] glass-card-gold rounded-3xl border border-gold-accent/40 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Sticky/Fixed Header with Close Button */}
            <div className="flex items-center justify-between p-6 sm:px-10 border-b border-white/10 bg-[#12121A]/95 shrink-0 z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-gold-accent/20 text-gold-accent border border-gold-accent/30 font-semibold">
                  {selectedCase.client}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Category: {selectedCase.category.toUpperCase()}
                </span>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-full bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner Scrollable Body with Internal Padding */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
              <div>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-tight">
                  {selectedCase.title}
                </h2>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-black/40 border border-white/10">
                {selectedCase.results.map((res, i) => (
                  <div key={i} className="text-center p-3">
                    <div className="text-3xl font-display font-extrabold text-gradient-gold mb-1">
                      {res.stat}
                    </div>
                    <div className="text-xs uppercase font-mono tracking-wider text-zinc-300">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategy Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-5 rounded-2xl bg-[#101018] border border-white/5">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-300">
                    The Market Challenge
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-2xl bg-[#101018] border border-white/5">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gold-accent">
                    The RTB PR Solution
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Verified Press Placements */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-gold-accent" />
                  Key Tier-1 Press Outlets Landed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.pressOutlets.map((outlet, oIdx) => (
                    <span
                      key={oIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-gold-accent/10 border border-gold-accent/20 text-xs font-semibold text-zinc-100"
                    >
                      {outlet}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              {selectedCase.quote && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-gold-accent/10 to-transparent border-l-4 border-gold-accent space-y-2">
                  <Quote className="w-6 h-6 text-gold-accent" />
                  <p className="text-zinc-200 italic text-sm sm:text-base">
                    "{selectedCase.quote.text}"
                  </p>
                  <div className="text-xs text-gold-accent font-semibold pt-1">
                    — {selectedCase.quote.author}, {selectedCase.quote.title}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs text-zinc-400">
                  Ready to secure comparable tier-1 results for your company?
                </span>
                <button
                  onClick={() => {
                    closeModal();
                    onOpenProposal();
                  }}
                  className="btn-primary px-6 py-3 text-xs uppercase tracking-wider"
                >
                  <span>Request Strategy Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
