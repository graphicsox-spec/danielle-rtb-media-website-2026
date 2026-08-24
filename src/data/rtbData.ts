export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'tech' | 'environmental' | 'artists' | 'athletes';
  summary: string;
  challenge: string;
  solution: string;
  results: {
    stat: string;
    label: string;
  }[];
  pressOutlets: string[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  featuredImg: string;
  tags: string[];
  impactMetric: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: string;
}

export interface VerticalCategory {
  id: 'tech' | 'environmental' | 'artists' | 'athletes';
  title: string;
  headline: string;
  description: string;
  clientNames: string[];
  metrics: { value: string; label: string }[];
  featuredImage: string;
  badge: string;
}

export const AGENCY_INFO = {
  name: "Raise The Bar Media",
  shortName: "RTB Media",
  tagline: "We Turn Visionaries Into Global Headlines.",
  subtagline: "A boutique PR and marketing agency representing high-growth technology startups, environmental pioneers, groundbreaking artists, and elite athletes.",
  address: {
    street: "7083 Hollywood Boulevard",
    district: "Hollywood",
    city: "Los Angeles",
    state: "CA",
    zip: "90028",
    country: "United States"
  },
  phone: "+1 (415) 233-5974",
  email: "info@rtb-media.com",
  socials: {
    twitter: "https://twitter.com/rtbmedia",
    linkedin: "https://linkedin.com/company/raise-the-bar-media",
    instagram: "https://instagram.com/rtbmedia",
    facebook: "https://facebook.com/rtbmedia"
  },
  metrics: {
    placementsSecured: "4,500+",
    earnedMediaValue: "$180M+",
    globalMediaReach: "2.4B+",
    placementSuccessRate: "98.4%",
    avgTimeToFirstTier1: "14 Days"
  }
};

export const TIER1_MEDIA = [
  { name: "TechCrunch", tier: "Tier 1", category: "Technology", impact: "High Authority" },
  { name: "Forbes", tier: "Tier 1", category: "Business", impact: "Global Influence" },
  { name: "The Wall Street Journal", tier: "Tier 1", category: "Finance", impact: "Market Mover" },
  { name: "The New York Times", tier: "Tier 1", category: "Global", impact: "Cultural Benchmark" },
  { name: "Fast Company", tier: "Tier 1", category: "Innovation", impact: "Design & Tech" },
  { name: "Wired", tier: "Tier 1", category: "Technology", impact: "Deep Tech" },
  { name: "CNN", tier: "Tier 1", category: "Broadcast", impact: "Mass Reach" },
  { name: "Bloomberg", tier: "Tier 1", category: "Finance & Markets", impact: "Investor Focus" },
  { name: "Business Insider", tier: "Tier 1", category: "Business", impact: "High Velocity" },
  { name: "CoinDesk", tier: "Tier 1", category: "Web3 & Crypto", impact: "Industry Core" },
  { name: "LA Times", tier: "Tier 1", category: "Entertainment & Culture", impact: "West Coast Lead" },
  { name: "Sports Illustrated", tier: "Tier 1", category: "Sports", impact: "Iconic Authority" },
  { name: "Fox News", tier: "Tier 1", category: "Broadcast", impact: "National TV" },
  { name: "Cheddar", tier: "Tier 1", category: "Broadcast & Streaming", impact: "Startup Voice" },
  { name: "Entrepreneur", tier: "Tier 1", category: "Founders", impact: "Ecosystem Giant" },
  { name: "CoinTelegraph", tier: "Tier 1", category: "Web3", impact: "Global Crypto" }
];

export const VERTICALS: VerticalCategory[] = [
  {
    id: 'tech',
    title: "Technology & High-Growth Startups",
    headline: "Transforming disruptive technology into industry-defining news.",
    description: "From seed-stage stealth unveilings to Series B/C momentum and multi-million dollar acquisitions, we position founders as indispensable industry authorities across Tier-1 tech and financial press.",
    clientNames: [
      "Clipchamp (Acquired by Microsoft)",
      "Procurify",
      "LoginRadius (CIAM Leader)",
      "Usersnap",
      "iAdvize (Conversational AI)",
      "Skava (Omni-Commerce)",
      "Snowcookie (Wearable Ski Tech)",
      "Udelv (Autonomous Delivery)",
      "NYCE (Real Estate FinTech)",
      "Ule Communications"
    ],
    metrics: [
      { value: "400+", label: "Clipchamp Press Hits" },
      { value: "$45M+", label: "Funding Announcements Covered" },
      { value: "100%", label: "Acquisition Visibility" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    badge: "Tech & SaaS PR"
  },
  {
    id: 'environmental',
    title: "Environmental & Sustainable Pioneers",
    headline: "Championing leaders who build a regenerative future.",
    description: "We love our planet and are passionate about helping ESG leaders, circular economy disruptors, clean mobility innovators, and sustainable consultancies capture global headlines that drive investment and policy shift.",
    clientNames: [
      "Anthesis (Global ESG Consultancy)",
      "Fuell (Electric Superbikes & Clean Mobility)",
      "Lineage Farms (Sustainable Agriculture & Hemp)",
      "EcoMobility Systems",
      "CleanTech Ventures",
      "Regenerative Materials"
    ],
    metrics: [
      { value: "85M+", label: "Fuell E-Bike Media Impressions" },
      { value: "60+", label: "ESG Feature Articles" },
      { value: "Top 1%", label: "Sustainability Share of Voice" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    badge: "Climate & ESG PR"
  },
  {
    id: 'artists',
    title: "Visionary Artists & Creators",
    headline: "Elevating contemporary visionaries, film launches & cultural movements.",
    description: "We work with groundbreaking artists who push creative boundaries. Whether orchestrating monumental gallery openings, high-profile NFT drops, independent film premieres, or Hollywood cultural activations.",
    clientNames: [
      "Leading Contemporary Fine Artists",
      "High-Value Web3 & NFT Drops",
      "Independent Film Premieres",
      "Gallery Openings (LA & NYC)",
      "Public Installation Artists",
      "Immersive Digital Creators"
    ],
    metrics: [
      { value: "$12M+", label: "Art Drop Media Coverage" },
      { value: "140+", label: "Art & Culture Outlets" },
      { value: "Viral", label: "Cultural Resonance" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    badge: "Art & Culture PR"
  },
  {
    id: 'athletes',
    title: "Elite Athletes & Sports Icons",
    headline: "Building transcendent legacies on and off the field.",
    description: "We represent world-class professional athletes navigating their post-game empires, venture investments, philanthropic foundations, and brand partnerships with unmatched Hollywood narrative precision.",
    clientNames: [
      "Pro Sports Icons & Olympic Champions",
      "Athlete-Led Venture Funds",
      "Philanthropic Foundations",
      "Signature Brand Drops",
      "Documentary & Media Features",
      "Keynote & Broadcast Appearances"
    ],
    metrics: [
      { value: "500M+", label: "Sports Media Impressions" },
      { value: "Tier 1", label: "Sports Illustrated & ESPN" },
      { value: "10x", label: "Sponsorship Leverage" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    badge: "Sports & Athlete PR"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'clipchamp',
    title: "From Seedling Tech to Microsoft Acquisition Blitz",
    client: "Clipchamp",
    category: "tech",
    summary: "How RTB Media orchestrated continuous tier-1 press velocity for Clipchamp, leading to widespread brand dominance and ultimate acquisition by Microsoft.",
    challenge: "In an overcrowded video creation software market, Clipchamp needed to differentiate its browser-based engine and command attention from tech journalists and major enterprise acquirers.",
    solution: "Executed a strategic, momentum-driven PR roadmap consisting of feature drop embargos, remote-work trendjacking during global shift to video, and executive thought leadership across TechCrunch, Fast Company, and WSJ.",
    results: [
      { stat: "400+", label: "Tier-1 Media Placements" },
      { stat: "1.2B+", label: "Global Audience Reach" },
      { stat: "M&A", label: "Acquired by Microsoft" }
    ],
    pressOutlets: ["TechCrunch", "Fast Company", "The Verge", "Wall Street Journal", "Forbes", "ZDNet"],
    quote: {
      text: "RTB Media's ability to consistently land us in top tier press was instrumental in establishing Clipchamp as the market leader before our Microsoft acquisition.",
      author: "Alex D.",
      title: "VP of Growth, Clipchamp"
    },
    featuredImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Tech", "M&A", "Video SaaS", "Product Launch"],
    impactMetric: "+580% Media Share"
  },
  {
    id: 'fuell',
    title: "Global Unveiling of the Future of Electric Mobility",
    client: "Fuell (Erik Buell Mobility)",
    category: "environmental",
    summary: "Global launch campaign for legendary motorcycle pioneer Erik Buell's premium e-Bike and electric motorcycle brand, generating 85M+ impressions in 30 days.",
    challenge: "Fuell needed a high-voltage international launch that balanced the motorcycle pedigree of Erik Buell with modern urban sustainability, while driving massive pre-order conversions.",
    solution: "Structured exclusive pre-briefings with Wired, Bloomberg, and CNN, synchronized with a synchronized embargo lift and high-production Hollywood video release.",
    results: [
      { stat: "85M+", label: "Verified Media Impressions" },
      { stat: "$2.4M", label: "Direct Campaign EMV" },
      { stat: "340%", label: "Pre-order Target Exceeded" }
    ],
    pressOutlets: ["Wired", "Bloomberg", "CNN", "Electrek", "Cycle World", "Engadget"],
    quote: {
      text: "RTB Media understood our engineering passion and delivered a launch strategy that had the entire clean mobility world talking about us overnight.",
      author: "Erik B.",
      title: "Co-Founder & Chief Designer, Fuell"
    },
    featuredImg: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    tags: ["CleanTech", "e-Mobility", "Product Launch", "Global PR"],
    impactMetric: "85M+ Global Impressions"
  },
  {
    id: 'usersnap-loginradius',
    title: "Dominating Category Authority in B2B SaaS & CIAM",
    client: "Usersnap & LoginRadius",
    category: "tech",
    summary: "Positioning enterprise developer tools and customer identity security platforms as gold standards for digital transformation.",
    challenge: "Complex technical SaaS products needed compelling human-centric narratives to reach C-suite buyers, CIOs, and tech reporters beyond niche blogs.",
    solution: "Constructed deep data-driven quarterly reports on user feedback & cybersecurity trends, pitching exclusive industry benchmarks to Forbes, VentureBeat, and ZDNet.",
    results: [
      { stat: "220+", label: "Enterprise Press Articles" },
      { stat: "+320%", label: "Inbound Enterprise Inquiries" },
      { stat: "18 Mo.", label: "Continuous Media Runway" }
    ],
    pressOutlets: ["Forbes", "VentureBeat", "TechRepublic", "Business Insider", "InfoWorld"],
    quote: {
      text: "The strategic narrative RTB Media crafted turned our technical product into high-level editorial stories that directly accelerated our sales pipeline.",
      author: "Rakesh S.",
      title: "Co-Founder, LoginRadius"
    },
    featuredImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Enterprise SaaS", "Security", "Thought Leadership", "Data Reports"],
    impactMetric: "+320% Enterprise Pipeline"
  },
  {
    id: 'anthesis-lineage',
    title: "Elevating ESG & Sustainable Agriculture into Mainstream Wall Street",
    client: "Anthesis & Lineage Farms",
    category: "environmental",
    summary: "Transforming complex sustainability consulting and regenerative farming into compelling WSJ, NYT, and Fast Company features.",
    challenge: "Moving sustainability discourse from specialist green blogs into mainstream executive agendas and investor priority lists.",
    solution: "Positioned senior executives as rapid-reaction commentators on ESG legislation, COP summits, and supply-chain resilience.",
    results: [
      { stat: "95+", label: "Tier-1 ESG Bylines & Quotes" },
      { stat: "#1", label: "Share of Voice in Clean Consultancies" },
      { stat: "3.5x", label: "Executive Social Amplification" }
    ],
    pressOutlets: ["Wall Street Journal", "Financial Times", "Fast Company", "Reuters", "GreenBiz"],
    featuredImg: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    tags: ["ESG", "Sustainability", "Executive Thought Leadership"],
    impactMetric: "#1 ESG Share of Voice"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'strategy',
    title: "Public Relations Strategy",
    subtitle: "Narrative Architecture & Positioning",
    description: "We work with you to architect a bulletproof short and long-term PR strategy, ensuring your brand story consistently commands attention in news cycles.",
    deliverables: [
      "Brand Narrative & Core Messaging Playbook",
      "12-Month Press Velocity Roadmap",
      "Media Landscape & Competitor Share-of-Voice Audit",
      "Key Angle & Hook Formulation",
      "Spokesperson Media Training & Briefing Guides"
    ],
    icon: "Compass",
    badge: "Foundation"
  },
  {
    id: 'media-relations',
    title: "Media Relations & Press Placements",
    subtitle: "Direct Tier-1 Journalist & Producer Access",
    description: "We craft irresistible pitches tailored for senior editors, broadcast producers, podcasts, and top-tier journalists across magazines, newspapers, and national TV.",
    deliverables: [
      "Direct Pitching to Top 100 Global Outlets",
      "TV & Broadcast Placements (CNN, Fox, Cheddar)",
      "Podcast Tours & Top 50 Business Show Bookings",
      "Embargo Management & Exclusive Story Placement",
      "Comprehensive Press Clippings & Metrics Reporting"
    ],
    icon: "Megaphone",
    badge: "Core Service"
  },
  {
    id: 'thought-leadership',
    title: "Executive Thought Leadership",
    subtitle: "Ghostwritten Bylines & Op-Eds",
    description: "Positioning your founders, CEOs, and lead creators as visionary industry authorities through high-impact contributed articles in Forbes, Fast Company, and WSJ.",
    deliverables: [
      "Ghostwritten Tier-1 Bylines & Op-Eds",
      "Fast Company & Forbes Council Editorial Submissions",
      "Keynote Speaking Engagements & Panel Placements",
      "Proprietary Trend Reports & Index Launches",
      "LinkedIn Executive Persona Optimization"
    ],
    icon: "PenTool",
    badge: "Authority"
  },
  {
    id: 'launches-funding',
    title: "Launch & Funding Announcements",
    subtitle: "Product Drops & Capital Raise Blitzes",
    description: "Make your Seed, Series A/B/C, or revolutionary product launch unmissable. We synchronize media exclusives, video assets, and global wire distributions.",
    deliverables: [
      "Pre-Launch Embargo Strategy & Journalist Pre-briefs",
      "Funding Round Valuation & Investor PR Synergy",
      "TechCrunch / VentureBeat / WSJ Exclusives",
      "Media Kit & High-Resolution Asset Distribution",
      "Post-Launch Momentum Follow-ups"
    ],
    icon: "Rocket",
    badge: "High Impact"
  },
  {
    id: 'crisis-brand-shield',
    title: "Crisis Communications & Brand Shield",
    subtitle: "24/7 Rapid Response & Reputation Defense",
    description: "Proactive narrative defense and rapid response protocols to protect your hard-earned valuation, leadership credibility, and public reputation in turbulent times.",
    deliverables: [
      "24/7 Rapid Response War Room Activation",
      "Holding Statements & Crisis Q&A Formulation",
      "Stakeholder & Investor Communication Alignment",
      "Negative Press Mitigation & Search Remediation",
      "Post-Crisis Trust Rebuilding Playbook"
    ],
    icon: "ShieldAlert",
    badge: "Protection"
  },
  {
    id: 'hollywood-activations',
    title: "Hollywood & Cultural Activations",
    subtitle: "Red Carpet, VIP Junkets & Celebrity Collabs",
    description: "Leveraging our 7083 Hollywood Blvd headquarters and entertainment rolodex to blend technology, climate, art, and sports into mainstream pop culture.",
    deliverables: [
      "Hollywood Premiere & Gallery Opening Media Junkets",
      "Celebrity & Athlete Ambassador Integration",
      "VIP Press Dinners & Intimate Media Previews",
      "High-Profile Red Carpet Press Lanes",
      "Experiential Publicity Stunts & Viral Moments"
    ],
    icon: "Film",
    badge: "Exclusive"
  }
];

export const TESTIMONIALS = [
  {
    quote: "RTB Media is the only agency we trust with our most critical announcements. They don't just send generic press releases — they understand high tech and know how to hook editors at TechCrunch and Fast Company within minutes.",
    author: "Danielle M.",
    title: "Chief Communications Officer",
    company: "Global Tech Syndicate",
    rating: 5,
    tag: "Tech Startup"
  },
  {
    quote: "Their Hollywood connections and relentless work ethic put our electric mobility launch in front of 85+ million people worldwide. The ROI was more than 10x what we invested.",
    author: "Marcus V.",
    title: "Managing Director",
    company: "Clean Mobility Europe",
    rating: 5,
    tag: "Sustainability"
  },
  {
    quote: "Launching our contemporary art exhibition and NFT collection with RTB Media generated unprecedented coverage across Artnet, CoinDesk, and national culture magazines. Phenomenal team!",
    author: "Elena Rostova",
    title: "Principal Artist & Founder",
    company: "Aura Studios LA",
    rating: 5,
    tag: "Fine Art & Creators"
  },
  {
    quote: "When transitioning from professional sports into venture capital, RTB Media completely reshaped my public narrative. They landed me on Bloomberg, Forbes, and CNBC in record time.",
    author: "J. Richardson",
    title: "Former Pro Athlete & Managing Partner",
    company: "NextPlay Capital",
    rating: 5,
    tag: "Sports Icon"
  }
];

export const PRESS_WIRE_SIMULATION = [
  {
    timestamp: "JUST IN • 4 MINS AGO",
    outlet: "TechCrunch",
    headline: "RTB Media Client Announces Breakthrough in Next-Gen Autonomous Logistics",
    category: "TECH",
    shares: "1.4k"
  },
  {
    timestamp: "18 MINS AGO",
    outlet: "Forbes",
    headline: "How This Hollywood-Backed Sustainability Pioneer Is Rewiring ESG Capital",
    category: "CLIMATE",
    shares: "3.2k"
  },
  {
    timestamp: "42 MINS AGO",
    outlet: "The Wall Street Journal",
    headline: "B2B SaaS Security Platform Sees Valuation Surge Following Strategic Expansion",
    category: "FINANCE",
    shares: "2.8k"
  },
  {
    timestamp: "1 HOUR AGO",
    outlet: "Sports Illustrated",
    headline: "All-Star Champion Launches Multi-Million Foundation for Youth Empowerment",
    category: "SPORTS",
    shares: "5.1k"
  },
  {
    timestamp: "2 HOURS AGO",
    outlet: "Fast Company",
    headline: "The 10 Most Innovative Creative Projects Redefining Digital Art This Summer",
    category: "ART",
    shares: "4.0k"
  }
];

export const PR_CALCULATOR_PRESETS = {
  sectors: [
    { id: 'tech', name: 'Technology & AI / SaaS', multiplier: 1.35, icon: 'Cpu' },
    { id: 'environmental', name: 'ClimateTech & Sustainability', multiplier: 1.25, icon: 'Leaf' },
    { id: 'artists', name: 'Artists, NFT & Film', multiplier: 1.15, icon: 'Palette' },
    { id: 'athletes', name: 'Athletes & Sports Ventures', multiplier: 1.30, icon: 'Trophy' }
  ],
  stages: [
    { id: 'seed', name: 'Seed / Early Stage', baseBudget: 8000, baseEMV: 75000, reachEst: '10M - 25M' },
    { id: 'seriesA', name: 'Series A / Scale-Up', baseBudget: 15000, baseEMV: 240000, reachEst: '35M - 75M' },
    { id: 'growth', name: 'Series B+ / Enterprise / Established', baseBudget: 28000, baseEMV: 650000, reachEst: '100M - 250M+' },
    { id: 'event', name: 'High-Profile Event / Drop / Product Launch', baseBudget: 18000, baseEMV: 350000, reachEst: '50M - 120M' }
  ],
  outlets: [
    { id: 'tier1_tech', name: 'TechCrunch / Wired / The Verge', weight: 1.4 },
    { id: 'tier1_biz', name: 'Forbes / Bloomberg / WSJ / NYT', weight: 1.6 },
    { id: 'broadcast', name: 'CNN / Fox / Cheddar / National TV', weight: 1.8 },
    { id: 'podcasts', name: 'Top 50 Apple & Spotify Business Podcasts', weight: 1.2 }
  ]
};

export const FAQ_ITEMS = [
  {
    q: "Why choose RTB Media over a traditional mega PR agency?",
    a: "Traditional agencies delegate your account to junior associates after the contract is signed. At RTB Media, senior partners with direct Hollywood and Tier-1 press relationships actively craft and pitch your stories. You get high velocity, 0 corporate red tape, and an agile team obsessed with your success."
  },
  {
    q: "How fast can RTB Media secure our first Tier-1 media placement?",
    a: "Our average time to first Tier-1 press placement is just 14 days. We maintain daily relationships with senior editors at TechCrunch, Forbes, WSJ, and major broadcast networks, allowing us to rapidly test hooks and secure early exclusives."
  },
  {
    q: "Do you offer guaranteed press placements?",
    a: "We practice authentic, high-integrity earned media relations. Because of our deep journalist relationships and rigorous narrative engineering, our historical campaign placement success rate stands at 98.4%."
  },
  {
    q: "Where is RTB Media based?",
    a: "Our flagship headquarters is located at 7083 Hollywood Boulevard in the heart of Hollywood, Los Angeles, California. We operate with a global reach across North America, Europe, and Asia-Pacific."
  },
  {
    q: "How do we get started with a customized PR campaign?",
    a: "Simply click 'Get A Proposal' or 'Book Discovery Call' to submit your project details. Our partners will conduct a complimentary media landscape audit and present a tailored 12-month PR roadmap within 48 hours."
  }
];
