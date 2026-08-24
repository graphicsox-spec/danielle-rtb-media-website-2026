import React from 'react';
import { ShieldCheck, Zap, Users, Sparkles, Check, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/rtbData';

export const WhyRTB: React.FC = () => {
  const comparison = [
    {
      feature: "Senior Partner Involvement",
      rtb: "100% direct founder & partner pitching",
      traditional: "Passed off to junior account associates"
    },
    {
      feature: "Time to First Tier-1 Hit",
      rtb: "Average 14 Days",
      traditional: "60 - 90 Days of ramp-up"
    },
    {
      feature: "Hollywood & Entertainment Rolodex",
      rtb: "HQ at 7083 Hollywood Blvd with instant access",
      traditional: "Disconnected corporate PR teams"
    },
    {
      feature: "Cross-Industry Versatility",
      rtb: "Tech, Climate, Art & Sports under one roof",
      traditional: "Siloed, single-vertical agencies"
    },
    {
      feature: "Placement Track Record",
      rtb: "98.4% verified campaign success rate",
      traditional: "Vague retainer hours with zero accountability"
    }
  ];

  return (
    <section className="py-24 bg-[#07070A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Boutique Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Why High-Growth Leaders Choose RTB Media
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Mega-agencies bill for endless meetings. We operate with lean, high-velocity precision to get you in the news.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-5 sm:p-6 text-xs uppercase font-mono tracking-widest text-zinc-400">Dimension</th>
                  <th className="p-5 sm:p-6 text-xs uppercase font-mono tracking-widest text-gold-accent bg-gold-accent/5 border-x border-gold-accent/20">
                    Raise The Bar Media
                  </th>
                  <th className="p-5 sm:p-6 text-xs uppercase font-mono tracking-widest text-zinc-400">
                    Traditional Mega PR Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-white">
                      {item.feature}
                    </td>
                    <td className="p-5 sm:p-6 bg-gold-accent/[0.03] border-x border-gold-accent/20 font-medium text-zinc-100 flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold-accent shrink-0" />
                      <span>{item.rtb}</span>
                    </td>
                    <td className="p-5 sm:p-6 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
