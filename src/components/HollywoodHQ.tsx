import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Navigation, Sparkles, Image as ImageIcon, Map as MapIcon, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/rtbData';
import { soundFx } from '../utils/audio';

interface HollywoodHQProps {
  onOpenProposal?: () => void;
}

export const HollywoodHQ: React.FC<HollywoodHQProps> = ({ onOpenProposal }) => {
  const [laTime, setLaTime] = useState<string>('');
  const [viewMode, setViewMode] = useState<'map' | 'photo'>('map');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=7083+Hollywood+Boulevard+Hollywood+Los+Angeles+CA+90028";

  return (
    <section id="contact" className="py-24 bg-[#07070A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Info & Hollywood Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Physical Headquarters
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                7083 Hollywood Boulevard, Los Angeles
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
                Located in the heart of Hollywood, California. We bridge West Coast entertainment & culture with high-growth technology and global media power.
              </p>
            </div>

            {/* Live Clock */}
            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-accent" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    Current Los Angeles Local Time (PST)
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                    {laTime || '11:45:00 AM PST'}
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                HQ Open
              </div>
            </div>

            {/* Contact Direct Links */}
            <div className="space-y-3">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                onClick={() => soundFx.playClick()}
                className="glass-card rounded-2xl p-4 border border-white/10 hover:border-gold-accent/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Direct Telephone</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-gold-accent transition-colors">
                      {AGENCY_INFO.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold-accent" />
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                onClick={() => soundFx.playClick()}
                className="glass-card rounded-2xl p-4 border border-white/10 hover:border-gold-accent/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Inquiry Email</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-gold-accent transition-colors">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold-accent" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Map / Photo Switcher Hub */}
          <div className="lg:col-span-6">
            <div className="glass-card-gold rounded-3xl p-6 sm:p-8 border border-gold-accent/30 shadow-2xl space-y-6">
              
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between flex-wrap gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                    Hollywood Office Hub
                  </span>
                  <div className="text-[11px] font-mono text-zinc-400">
                    34.1016° N, 118.3444° W
                  </div>
                </div>

                {/* View Switcher Toggle */}
                <div className="flex items-center gap-1.5 bg-[#0C0C14] p-1.5 rounded-xl border border-white/15">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setViewMode('map');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === 'map'
                        ? 'bg-[#F3D97A] text-[#07070A] shadow-md'
                        : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <MapIcon className={`w-3.5 h-3.5 ${viewMode === 'map' ? 'text-[#07070A]' : 'text-[#F3D97A]'}`} />
                    <span>Live Map</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setViewMode('photo');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === 'photo'
                        ? 'bg-[#F3D97A] text-[#07070A] shadow-md'
                        : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ImageIcon className={`w-3.5 h-3.5 ${viewMode === 'photo' ? 'text-[#07070A]' : 'text-[#F3D97A]'}`} />
                    <span>Hollywood View</span>
                  </button>
                </div>
              </div>

              {/* Display Frame */}
              <div className="h-72 rounded-2xl bg-zinc-950 border border-white/10 relative overflow-hidden">
                {viewMode === 'map' ? (
                  /* Real Embedded Google Map */
                  <iframe
                    title="RTB Media Hollywood Headquarters"
                    src="https://maps.google.com/maps?q=7083+Hollywood+Boulevard,+Los+Angeles,+CA+90028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 rounded-2xl"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                ) : (
                  /* High-Res Hollywood Visual */
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1000&q=80"
                      alt="Hollywood Boulevard Los Angeles"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold-accent/30">
                        <MapPin className="w-4 h-4 text-gold-accent" />
                        <span className="text-xs font-mono text-white font-bold">7083 Hollywood Blvd, Suite 400</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons & Amenities */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="btn-primary flex-1 py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions (Google Maps)</span>
                  </a>

                  {onOpenProposal && (
                    <button
                      onClick={() => {
                        soundFx.playSuccess();
                        onOpenProposal();
                      }}
                      className="btn-secondary px-5 py-3 text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                      <span>Book In-Person Briefing</span>
                    </button>
                  )}
                </div>

                {/* VIP Amenities Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-zinc-400 border-t border-white/5 font-medium">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
                    By Appointment Only
                  </span>
                  <span>•</span>
                  <span>Private Media Suites</span>
                  <span>•</span>
                  <span>Valet Parking Available</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
