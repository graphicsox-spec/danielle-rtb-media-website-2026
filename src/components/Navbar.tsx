import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, Volume2, VolumeX, Menu, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { AGENCY_INFO, VERTICALS } from '../data/rtbData';

interface NavbarProps {
  onOpenProposal: () => void;
  onOpenSearch: () => void;
  onSelectCategory?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal, onOpenSearch, onSelectCategory }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    soundFx.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (isMuted) soundFx.playClick();
  };

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string) => {
    soundFx.playClick();
    setCategoriesOpen(false);
    setMobileMenuOpen(false);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const elem = document.querySelector('#verticals');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#07070A]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              soundFx.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col relative"
            onMouseEnter={() => soundFx.playHover()}
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-accent transition-colors">
              RAISE THE BAR
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              MEDIA • HOLLYWOOD
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101018]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            <button
              onClick={() => handleNavClick('#about')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-gold-accent transition-colors rounded-full hover:bg-white/5"
            >
              About
            </button>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setCategoriesOpen(!categoriesOpen);
                }}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setCategoriesOpen(true);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-gold-accent transition-colors rounded-full hover:bg-white/5 flex items-center gap-1"
              >
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-gold-accent' : ''}`} />
              </button>

              {categoriesOpen && (
                <div
                  onMouseLeave={() => setCategoriesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl glass-card-gold shadow-2xl border border-gold-accent/30 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold-accent font-semibold px-3 py-1.5 border-b border-white/5 mb-1">
                    Specializations
                  </div>
                  {VERTICALS.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => handleCategorySelect(v.id)}
                      onMouseEnter={() => soundFx.playHover()}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-zinc-200 hover:bg-gold-accent/15 hover:text-gold-accent transition-all flex items-center justify-between group"
                    >
                      <span>{v.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-accent" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('#services')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-gold-accent transition-colors rounded-full hover:bg-white/5"
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick('#case-studies')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-gold-accent transition-colors rounded-full hover:bg-white/5"
            >
              Case Studies
            </button>

            <button
              onClick={() => handleNavClick('#roi-calculator')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 transition-colors rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              PR ROI
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-gold-accent transition-colors rounded-full hover:bg-white/5"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenSearch();
              }}
              title="Search & Quick Navigation (Cmd+K)"
              className="p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={toggleMute}
              title={isMuted ? "Enable sound" : "Mute sound"}
              className="p-2 rounded-full text-zinc-400 hover:text-gold-accent bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold-accent" />}
            </button>

            <button
              onClick={() => {
                soundFx.playSuccess();
                onOpenProposal();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="btn-primary px-5 py-2.5 text-xs uppercase tracking-wider"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full text-zinc-300 hover:text-gold-accent"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-gold-accent" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-accent" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07070A]/95 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-gold-accent font-semibold border-b border-white/10 pb-2">
              Menu
            </div>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('#about')}
                className="text-left text-lg font-bold text-zinc-200 hover:text-gold-accent py-1"
              >
                About RTB Media
              </button>
              
              <div className="py-2 border-y border-white/5 space-y-2">
                <div className="text-xs uppercase tracking-wider text-gold-accent font-semibold">Specializations</div>
                {VERTICALS.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => handleCategorySelect(v.id)}
                    className="block text-left text-sm text-zinc-300 hover:text-gold-accent py-1 pl-2 border-l border-gold-accent/40"
                  >
                    {v.title}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNavClick('#services')}
                className="text-left text-lg font-bold text-zinc-200 hover:text-gold-accent py-1"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('#case-studies')}
                className="text-left text-lg font-bold text-zinc-200 hover:text-gold-accent py-1"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleNavClick('#roi-calculator')}
                className="text-left text-lg font-bold text-amber-300 hover:text-amber-200 py-1 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                PR ROI Estimator
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-left text-lg font-bold text-zinc-200 hover:text-gold-accent py-1"
              >
                Contact & Hollywood HQ
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                soundFx.playSuccess();
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="btn-primary w-full py-3.5 text-sm uppercase tracking-wider"
            >
              <span>Get A Quote / Proposal</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>

            <div className="flex items-center justify-center gap-6 text-xs text-zinc-400">
              <a href={`tel:${AGENCY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-gold-accent" />
                {AGENCY_INFO.phone}
              </a>
              <a href={`mailto:${AGENCY_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-gold-accent" />
                {AGENCY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
