import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Globe, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/rtbData';
import { soundFx } from '../utils/audio';

export const HollywoodHQ: React.FC = () => {
  const [laTime, setLaTime] = useState<string>('');

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

  return (
    <section id="contact" className="py-24 bg-[#07070A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Info & Hollywood Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Headquarters
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                7083 Hollywood Boulevard, Los Angeles
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
                Located at the historic crossroads of entertainment, technology, and culture in Hollywood, California. We bring West Coast creativity together with global media firepower.
              </p>
            </div>

            {/* Live Clock */}
            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-accent animate-spin-slow" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Current Los Angeles Local Time (PST)
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                    {laTime || '11:45:00 AM PST'}
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                Office Open
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
                    <div className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-gold-accent">
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
                    <div className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-gold-accent">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-gold-accent" />
              </a>
            </div>

          </div>

          {/* Right: Map Visual Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-gold rounded-3xl p-8 border border-gold-accent/30 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                  Hollywood Office Hub
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  34.1016° N, 118.3444° W
                </span>
              </div>

              {/* Map Illustration Frame */}
              <div className="h-64 rounded-2xl bg-zinc-950 border border-white/10 relative overflow-hidden flex items-center justify-center">
                {/* Simulated Stylized Dark Map Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#f3d97a15_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Hollywood Blvd Graphic */}
                <div className="absolute w-full h-1 bg-gold-accent/30 top-1/2 -translate-y-1/2"></div>
                <div className="absolute h-full w-1 bg-white/10 left-1/3"></div>
                <div className="absolute h-full w-1 bg-white/10 right-1/3"></div>

                {/* Animated Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold-accent/20 border-2 border-gold-accent flex items-center justify-center animate-bounce shadow-xl shadow-gold-accent/40">
                    <MapPin className="w-6 h-6 text-gold-accent fill-gold-accent/20" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-gold-accent/40">
                    7083 Hollywood Blvd
                  </div>
                </div>
              </div>

              <div className="text-xs text-zinc-400 leading-relaxed">
                Visiting our Hollywood office? Private briefings and discovery sessions are available by appointment only for prospective clients and media representatives.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
