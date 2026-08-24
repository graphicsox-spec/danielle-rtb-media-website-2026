import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PR_CALCULATOR_PRESETS } from '../data/rtbData';

interface PRCalculatorProps {
  onOpenProposalWithData: (data: any) => void;
}

export const PRCalculator: React.FC<PRCalculatorProps> = ({ onOpenProposalWithData }) => {
  const [selectedSector, setSelectedSector] = useState<string>('tech');
  const [selectedStage, setSelectedStage] = useState<string>('seriesA');
  const [selectedOutlets, setSelectedOutlets] = useState<string[]>(['tier1_tech', 'tier1_biz']);
  const [months, setMonths] = useState<number>(6);

  const toggleOutlet = (id: string) => {
    soundFx.playClick();
    if (selectedOutlets.includes(id)) {
      if (selectedOutlets.length > 1) {
        setSelectedOutlets(selectedOutlets.filter(o => o !== id));
      }
    } else {
      setSelectedOutlets([...selectedOutlets, id]);
    }
  };

  const sectorObj = PR_CALCULATOR_PRESETS.sectors.find(s => s.id === selectedSector) || PR_CALCULATOR_PRESETS.sectors[0];
  const stageObj = PR_CALCULATOR_PRESETS.stages.find(st => st.id === selectedStage) || PR_CALCULATOR_PRESETS.stages[0];
  
  const outletMultiplier = selectedOutlets.reduce((acc, curr) => {
    const o = PR_CALCULATOR_PRESETS.outlets.find(item => item.id === curr);
    return acc * (o ? o.weight : 1);
  }, 1);

  const estimatedEMV = Math.round(stageObj.baseEMV * sectorObj.multiplier * (outletMultiplier / 1.5) * (months / 4));
  const estimatedPlacements = Math.round(18 * (months / 6) * (selectedOutlets.length / 2));
  const estimatedImpressions = Math.round(45 * (months / 6) * sectorObj.multiplier * (outletMultiplier / 1.2));

  const handleTransferToProposal = () => {
    soundFx.playSuccess();
    onOpenProposalWithData({
      sector: sectorObj.name,
      stage: stageObj.name,
      duration: `${months} Months`,
      estimatedEMV: `$${(estimatedEMV / 1000).toFixed(0)}k`
    });
  };

  return (
    <section id="roi-calculator" className="py-24 bg-[#07070A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            Interactive PR Coverage & Value Estimator
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Estimate Your Earned Media Value (EMV)
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Configure your industry vertical, stage, and target media tiers to project your estimated media impressions and advertising value equivalency.
          </p>
        </div>

        {/* Interactive Calculator Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-8 border border-white/15">
            
            {/* 1. Sector Selection - CLEAR HIGH CONTRAST */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-bold mb-3">
                1. Select Industry Sector
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PR_CALCULATOR_PRESETS.sectors.map((sec) => {
                  const isSelected = selectedSector === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedSector(sec.id);
                      }}
                      className={`p-4 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-gold-accent text-black border-gold-accent shadow-lg shadow-gold-accent/25'
                          : 'bg-[#151522] border-white/15 text-zinc-100 hover:bg-[#1E1E2F] hover:border-gold-accent/50'
                      }`}
                    >
                      {sec.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Company / Launch Stage */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-bold mb-3">
                2. Company or Launch Stage
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PR_CALCULATOR_PRESETS.stages.map((st) => {
                  const isSelected = selectedStage === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedStage(st.id);
                      }}
                      className={`p-4 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-gold-accent text-black border-gold-accent shadow-lg shadow-gold-accent/25'
                          : 'bg-[#151522] border-white/15 text-zinc-100 hover:bg-[#1E1E2F] hover:border-gold-accent/50'
                      }`}
                    >
                      {st.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Target Outlets - CLEAR GOLD CHECKBOXES */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-bold mb-3">
                3. Desired Media Tiers (Select Multiple)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PR_CALCULATOR_PRESETS.outlets.map((out) => {
                  const isChecked = selectedOutlets.includes(out.id);
                  return (
                    <button
                      key={out.id}
                      onClick={() => toggleOutlet(out.id)}
                      className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-gold-accent/20 border-gold-accent text-white shadow-md'
                          : 'bg-[#151522] border-white/15 text-zinc-200 hover:bg-[#1E1E2F]'
                      }`}
                    >
                      <span className="truncate mr-2 font-medium">{out.name}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${
                        isChecked ? 'bg-gold-accent border-gold-accent text-black font-bold' : 'border-zinc-400 bg-black/40'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Campaign Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                  4. Campaign Duration
                </label>
                <span className="font-mono text-sm text-gold-accent font-extrabold px-3.5 py-1 rounded bg-[#1B1B28] border border-gold-accent/30">
                  {months} Months
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="1"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-gold-accent"
              />
              <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium mt-1.5">
                <span>3 Mo (Sprint)</span>
                <span>6 Mo (Standard)</span>
                <span>12 Mo (Dominance)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 glass-card-gold rounded-3xl p-6 sm:p-8 space-y-6 border border-gold-accent/40 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                Projected PR Performance
              </span>
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Live Simulation
              </span>
            </div>

            {/* Major EMV Metric */}
            <div className="text-center py-5 bg-black/60 rounded-2xl border border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                Estimated Earned Media Value (EMV)
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-gold">
                $${(estimatedEMV).toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-300 mt-1 font-medium">
                Equivalent organic advertising & credibility value
              </div>
            </div>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs text-zinc-300 font-semibold">Estimated Audience</div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {estimatedImpressions}M+
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Impressions</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs text-zinc-300 font-semibold">Target Placements</div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {estimatedPlacements}+
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Tier-1 & Vertical Hits</div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-2.5 pt-2 text-xs text-zinc-200 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-accent shrink-0 stroke-[2.5]" />
                <span>Custom narrative playbook & soundbite coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-accent shrink-0 stroke-[2.5]" />
                <span>Senior partner pitching (0 junior account reps)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-accent shrink-0 stroke-[2.5]" />
                <span>Direct access to Tier-1 editorial desks in NYC & LA</span>
              </div>
            </div>

            {/* SOLID GOLD CTA BUTTON */}
            <button
              onClick={handleTransferToProposal}
              className="btn-gold-solid w-full py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In This Blueprint & Get Proposal</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <p className="text-[10px] text-center text-zinc-400 italic font-medium">
              *Projections based on historical performance of 4,500+ client media placements.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
