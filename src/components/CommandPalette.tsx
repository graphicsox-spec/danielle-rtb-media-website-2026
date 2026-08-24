import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Building, Briefcase, FileText, Phone } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { VERTICALS, SERVICES, CASE_STUDIES } from '../data/rtbData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (id: string) => void;
  onOpenProposal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectCategory, onOpenProposal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) onClose();
        else {
          // Open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (anchor: string) => {
    soundFx.playClick();
    onClose();
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-card-gold rounded-2xl p-4 border border-gold-accent/40 shadow-2xl space-y-4">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/60 border border-white/15">
          <Search className="w-5 h-5 text-gold-accent" />
          <input
            type="text"
            autoFocus
            placeholder="Search verticals, services, case studies or press outlets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
          />
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 text-xs">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2">Quick Navigation</div>
          
          <button
            onClick={() => navigateTo('#about')}
            className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-zinc-200 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Building className="w-4 h-4 text-gold-accent" />
              About RTB Media & Methodology
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          <button
            onClick={() => navigateTo('#services')}
            className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-zinc-200 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gold-accent" />
              All Boutique Services & Capabilities
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          <button
            onClick={() => navigateTo('#roi-calculator')}
            className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-zinc-200 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              PR ROI & Coverage Value Calculator
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          <button
            onClick={() => navigateTo('#case-studies')}
            className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-zinc-200 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold-accent" />
              Client Case Studies (Clipchamp, Fuell, Usersnap)
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          <button
            onClick={() => navigateTo('#contact')}
            className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-zinc-200 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-accent" />
              Hollywood HQ & Contact Directory
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </button>
        </div>

      </div>
    </div>
  );
};
