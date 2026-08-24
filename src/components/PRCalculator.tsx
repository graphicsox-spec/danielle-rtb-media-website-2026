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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            Interactive PR Coverage & Value Estimator
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Estimate Your Earned Media Value (EMV)
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Configure your industry vertical, stage, and target media tiers to project your estimated media impressions and advertising value equivalency.
          </p>
        </div>

        {/* Interactive Calculator Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-8 border border-white/10">
            
            {/* 1. Sector Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold mb-3">
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
                      className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-gold-accent text-black border-gold-accent font-bold shadow-md shadow-gold-accent/20'
                          : 'bg-[#12121C] border-white/10 text-zinc-300 hover:bg-white/5 hover:border-white/20'
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
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold mb-3">
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
                      className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-gold-accent text-black border-gold-accent font-bold shadow-md shadow-gold-accent/20'
                          : 'bg-[#12121C] border-white/10 text-zinc-300 hover:bg-white/5 hover:border-white/20'
                      }`}
                    >
                      {st.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Target Outlets */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold mb-3">
                3. Desired Media Tiers (Select Multiple)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PR_CALCULATOR_PRESETS.outlets.map((out) => {
                  const isChecked = selectedOutlets.includes(out.id);
                  return (
                    <button
                      key={out.id}
                      onClick={() => toggleOutlet(out.id)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-gold-accent/15 border-gold-accent/60 text-white'
                          : 'bg-[#12121C] border-white/10 text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate mr-2">{out.name}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                        isChecked ? 'bg-gold-accent border-gold-accent text-black' : 'border-white/20'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Campaign Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold">
                  4. Campaign Duration
                </label>
                <span className="font-mono text-xs text-gold-accent font-bold px-3 py-0.5 rounded bg-white/5 border border-white/10">
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
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span>3 Mo (Sprint)</span>
                <span>6 Mo (Standard)</span>
                <span>12 Mo (Dominance)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 glass-card-gold rounded-3xl p-6 sm:p-8 space-y-6 border border-gold-accent/30 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                Projected PR Performance
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Live Simulation
              </span>
            </div>

            {/* Major EMV Metric */}
            <div className="text-center py-4 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                Estimated Earned Media Value (EMV)
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-gold">
                $${(estimatedEMV).toLocaleString()}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">
                Equivalent organic advertising & credibility value
              </div>
            </div>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-xs text-zinc-400 font-medium">Estimated Audience</div>
                <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  {estimatedImpressions}M+
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">Impressions</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-xs text-zinc-400 font-medium">Target Placements</div>
                <div className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  {estimatedPlacements}+
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">Tier-1 & Vertical Hits</div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-2 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <span>Custom narrative playbook & soundbite coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <span>Senior partner pitching (0 junior account reps)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                <span>Direct access to Tier-1 editorial desks in NYC & LA</span>
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={handleTransferToProposal}
              className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider"
            >
              <span>Lock In Blueprint & Get Proposal</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <p className="text-[10px] text-center text-zinc-500 italic">
              *Projections based on historical performance of 4,500+ client media placements.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
