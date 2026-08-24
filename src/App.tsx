import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaMarquee } from './components/MediaMarquee';
import { PillarsFramework } from './components/PillarsFramework';
import { VerticalsHub } from './components/VerticalsHub';
import { CaseStudies } from './components/CaseStudies';
import { ServicesSuite } from './components/ServicesSuite';
import { PRCalculator } from './components/PRCalculator';
import { PressWireSimulator } from './components/PressWireSimulator';
import { WhyRTB } from './components/WhyRTB';
import { Testimonials } from './components/Testimonials';
import { HollywoodHQ } from './components/HollywoodHQ';
import { Footer } from './components/Footer';
import { VIPProposalModal } from './components/VIPProposalModal';
import { VideoModal } from './components/VideoModal';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [proposalInitialData, setProposalInitialData] = useState<any>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState('tech');

  const handleOpenProposal = (data?: any) => {
    if (data) setProposalInitialData(data);
    setProposalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07070A] text-zinc-100 flex flex-col font-sans selection:bg-gold-accent selection:text-black">
      
      {/* Navigation */}
      <Navbar
        onOpenProposal={() => handleOpenProposal()}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={(id) => setSelectedVertical(id)}
      />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenProposal={() => handleOpenProposal()}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* Global Press Marquee */}
        <MediaMarquee />

        {/* Live Press Wire Simulator */}
        <PressWireSimulator />

        {/* 3 Pillars Methodology */}
        <PillarsFramework />

        {/* Specialized Verticals Hub */}
        <VerticalsHub
          activeCategory={selectedVertical}
          onSelectCategory={(id) => setSelectedVertical(id)}
          onOpenProposal={() => handleOpenProposal()}
        />

        {/* Interactive Case Studies Grid */}
        <CaseStudies onOpenProposal={() => handleOpenProposal()} />

        {/* Boutique Services Suite */}
        <ServicesSuite onOpenProposal={() => handleOpenProposal()} />

        {/* Interactive PR ROI Calculator */}
        <PRCalculator onOpenProposalWithData={(data) => handleOpenProposal(data)} />

        {/* Why RTB vs Traditional Mega Agencies */}
        <WhyRTB />

        {/* Testimonials */}
        <Testimonials />

        {/* Hollywood HQ with Interactive Map & Photo Switcher */}
        <HollywoodHQ onOpenProposal={() => handleOpenProposal()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenProposal={() => handleOpenProposal()}
        onSelectCategory={(id) => setSelectedVertical(id)}
      />

      {/* VIP Proposal Modal */}
      <VIPProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        initialData={proposalInitialData}
      />

      {/* Video Showreel Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Spotlight Command Search */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCategory={(id) => setSelectedVertical(id)}
        onOpenProposal={() => handleOpenProposal()}
      />

    </div>
  );
}

export default App;
