const mediaNames = [
  'TECHCRUNCH', 'FORBES', 'THE NEW YORK TIMES', 'FAST COMPANY', 'CNN', 'WIRED',
];

const expertise = [
  {
    number: '01',
    title: 'Technology & Business',
    copy: 'From funding rounds to category-defining launches, we turn complex ideas into stories people want to share.',
    tags: ['Start-ups', 'SaaS', 'FinTech'],
    tone: 'orange',
  },
  {
    number: '02',
    title: 'Climate & Sustainability',
    copy: 'Mission-led narratives for the organizations building a cleaner, smarter and more resilient future.',
    tags: ['ClimateTech', 'Mobility', 'Impact'],
    tone: 'lime',
  },
  {
    number: '03',
    title: 'Artists & Culture',
    copy: 'Sharp positioning for creative voices ready to move from the edge of culture into the conversation.',
    tags: ['Music', 'Art', 'Entertainment'],
    tone: 'cream',
  },
  {
    number: '04',
    title: 'Athletes & Talent',
    copy: 'Building the story beyond the spotlight—from bold business moves to meaningful off-field impact.',
    tags: ['Profiles', 'Ventures', 'Thought leadership'],
    tone: 'pink',
  },
];

const services = [
  ['Narrative Strategy', 'Find the sharpest angle, the clearest point of view and the story only you can own.'],
  ['Media Relations', 'Put that story in front of the right editors, writers, producers and cultural tastemakers.'],
  ['Launch Campaigns', 'Build momentum around funding, products, partnerships and the moments that matter.'],
  ['Executive Visibility', 'Turn founders and leaders into trusted voices people look to for what comes next.'],
];

const clients = ['ANTHESIS', 'CLIPCHAMP', 'FUELL', 'iADVIZE', 'LOGINRADIUS', 'PROCURIFY', 'USERSNAP', 'UDELv'];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Raise The Bar Media home">
          <span className="brand-mark">RTB</span>
          <span className="brand-name">Raise The Bar<br />Media</span>
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#work">Work</a>
        </div>
        <a className="nav-cta" href="mailto:info@rtb-media.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="signal-dot" /> Boutique PR · Los Angeles / Worldwide</div>
        <h1>
          We make brands
          <span className="hero-line"><em>impossible</em><span className="orbit-word">to ignore.</span></span>
        </h1>
        <div className="hero-bottom">
          <p>Strategic storytelling and earned media for the people building, creating and changing what comes next.</p>
          <a className="round-link" href="#expertise" aria-label="Explore our expertise"><span>Explore</span><strong aria-hidden="true">↓</strong></a>
        </div>
        <div className="hero-stamp" aria-label="Strategy. Execution. Results."><span>STRATEGY · EXECUTION · RESULTS ·</span><b>R</b></div>
      </section>

      <section className="proof" aria-label="Media outlets featuring client stories">
        <p>Client stories seen in</p>
        <div className="media-row">{mediaNames.map((name) => <span key={name}>{name}</span>)}</div>
      </section>

      <section className="manifesto section-pad">
        <div className="eyebrow"><span>What we do</span><b>01</b></div>
        <div className="manifesto-grid">
          <h2>Attention is easy.<br /><em>Relevance</em> is earned.</h2>
          <div className="manifesto-copy">
            <p>Raise The Bar is an independent PR and marketing agency for ambitious people with something real to say.</p>
            <p>We combine a journalist&apos;s instinct, a strategist&apos;s focus and a challenger&apos;s energy to create stories that land—and last.</p>
            <a className="text-link" href="#approach">How we work <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="section-heading section-pad">
          <div className="eyebrow light"><span>Our worlds</span><b>02</b></div>
          <h2>Big stories live<br />between <em>worlds.</em></h2>
          <p>We know the beats, the people and the nuance. Most importantly, we know how to find the human story inside every category.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className={`expertise-card ${item.tone}`} key={item.title}>
              <div className="card-top"><span>{item.number}</span><span aria-hidden="true">↗</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="eyebrow"><span>The RTB method</span><b>03</b></div>
        <div className="approach-intro">
          <h2>Built on instinct.<br />Backed by <em>intent.</em></h2>
          <p>No bloated teams. No copy-and-paste playbooks. Just senior thinking, direct collaboration and a precise plan built around your moment.</p>
        </div>
        <div className="steps">
          <article><span className="step-number">01</span><div><h3>Strategy</h3><p>We uncover the tension, sharpen the position and map the moments worth owning.</p></div><b>Define the story</b></article>
          <article><span className="step-number">02</span><div><h3>Execution</h3><p>We build the right materials and pitch with relevance, taste and persistence.</p></div><b>Make it travel</b></article>
          <article><span className="step-number">03</span><div><h3>Results</h3><p>We turn coverage into credibility, conversation and compounding momentum.</p></div><b>Raise the profile</b></article>
        </div>
      </section>

      <section className="services-band">
        <div className="marquee" aria-hidden="true"><span>BE SEEN · BE HEARD · BE REMEMBERED · BE SEEN · BE HEARD · BE REMEMBERED ·</span></div>
        <div className="services-inner section-pad">
          <div className="services-title"><span>What we bring</span><h2>One sharp team.<br /><em>Every angle.</em></h2></div>
          <div className="services-list">
            {services.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="eyebrow"><span>Selected company</span><b>04</b></div>
        <div className="work-head"><h2>Good company.<br /><em>Great stories.</em></h2><p>Trusted by ambitious teams across technology, sustainability, mobility and culture.</p></div>
        <div className="client-grid">{clients.map((client, index) => <div key={client}><span>{String(index + 1).padStart(2, '0')}</span><b>{client}</b></div>)}</div>
        <div className="press-cloud" aria-label="Selected media outlets">
          <span>Business Insider</span><strong>Coindesk</strong><em>Cosmopolitan</em><b>Sports Illustrated</b><span>Entrepreneur</span><strong>Wall Street Journal</strong><em>Yahoo! Finance</em><b>LA Times</b>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-sun" aria-hidden="true"><span>LET&apos;S RAISE THE BAR · LET&apos;S RAISE THE BAR ·</span><b>↗</b></div>
        <p>Have a story worth telling?</p>
        <h2>Let&apos;s make it<br /><em>unmissable.</em></h2>
        <a href="mailto:info@rtb-media.com">info@rtb-media.com <span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">RTB</span><span className="brand-name">Raise The Bar<br />Media</span></a>
        <div><span>Los Angeles, CA</span><span>+1 415 233 5974</span></div>
        <div><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#work">Work</a></div>
        <p>© {new Date().getFullYear()} Raise The Bar Media</p>
      </footer>
    </main>
  );
}
