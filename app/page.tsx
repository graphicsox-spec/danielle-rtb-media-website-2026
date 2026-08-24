const mediaNames = ['TECHCRUNCH', 'FORBES', 'THE NEW YORK TIMES', 'FAST COMPANY', 'CNN', 'WIRED'];

const worlds = [
  { n: '01', title: 'Technology + Business', short: 'TECH', copy: 'Funding. Launches. Ideas that define the next category.', className: 'bento-tech' },
  { n: '02', title: 'Climate + Sustainability', short: 'IMPACT', copy: 'Mission-led stories built to move the future forward.', className: 'bento-impact' },
  { n: '03', title: 'Artists + Culture', short: 'CULTURE', copy: 'Creative voices with a point of view worth amplifying.', className: 'bento-culture' },
  { n: '04', title: 'Athletes + Talent', short: 'TALENT', copy: 'The story beyond the spotlight. Ventures, vision, legacy.', className: 'bento-talent' },
];

const services = [
  ['Narrative Strategy', 'Find the sharpest angle and the story only your brand can own.'],
  ['Media Relations', 'Reach the editors, writers and producers who shape the conversation.'],
  ['Launch Campaigns', 'Turn your biggest moment into momentum that keeps moving.'],
  ['Executive Visibility', 'Build a credible public voice for the leaders shaping what comes next.'],
];

const clients = ['ANTHESIS', 'CLIPCHAMP', 'FUELL', 'iADVIZE', 'LOGINRADIUS', 'PROCURIFY', 'USERSNAP', 'UDELv'];
const outlets = ['Business Insider', 'Coindesk', 'Cosmopolitan', 'Sports Illustrated', 'Entrepreneur', 'Wall Street Journal', 'Yahoo! Finance', 'LA Times'];

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="trend-nav" aria-label="Primary navigation">
        <a className="trend-brand" href="#top" aria-label="Raise The Bar Media home"><b>RTB</b><span>RAISE THE BAR<br />MEDIA</span></a>
        <div className="trend-links"><a href="#worlds">Expertise</a><a href="#method">Approach</a><a href="#proof">Proof</a></div>
        <a className="trend-cta" href="mailto:info@rtb-media.com">Start a project <span>↗</span></a>
      </nav>

      <section className="video-hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline aria-label="City media screens and nightlife">
          <source src="/hero-media.mp4" type="video/mp4" />
        </video>
        <div className="video-shade" aria-hidden="true" />
        <div className="video-topline"><span><i /> INDEPENDENT PR + CREATIVE COMMUNICATIONS</span><b>LOS ANGELES — WORLDWIDE</b></div>
        <h1><span>WE MAKE</span><span className="hero-headline">HEADLINES<span>.</span></span></h1>
        <div className="hero-glass-card">
          <span>STORIES / WITH / IMPACT</span>
          <p>For the people building, creating and changing what comes next.</p>
          <a href="#worlds">Explore the agency <b>↘</b></a>
        </div>
        <div className="live-pill"><i /> LIVE SIGNAL <span>00:14:26</span></div>
        <div className="video-footer"><p>STRATEGY</p><span>◆</span><p>EXECUTION</p><span>◆</span><p>RESULTS</p><a href="#worlds">SCROLL <b>↓</b></a></div>
      </section>

      <section className="trend-marquee" aria-label="Media outlets featuring client stories">
        <div>{[...mediaNames, ...mediaNames].map((name, index) => <span key={`${name}-${index}`}>{name}<i>✦</i></span>)}</div>
      </section>

      <section className="statement trend-section">
        <div className="trend-label"><span>01 — WHO WE ARE</span><b>BOUTIQUE BY DESIGN · SENIOR BY DEFAULT</b></div>
        <div className="statement-layout">
          <h2>WE DON&apos;T<br />MANUFACTURE<br /><span>HYPE.</span></h2>
          <div className="statement-side">
            <span className="spinning-disc" aria-hidden="true"><i>RTB · RTB · RTB · RTB ·</i><b>↗</b></span>
            <p>We engineer relevance. The kind that earns attention, shapes perception and keeps your story moving long after launch day.</p>
            <a href="#method">Our way of working <span>↘</span></a>
          </div>
        </div>
        <div className="kinetic-rail" aria-hidden="true"><span>STORY</span><i>+</i><span>STRATEGY</span><i>+</i><span>SIGNAL</span></div>
      </section>

      <section className="worlds trend-section" id="worlds">
        <div className="trend-label"><span>02 — OUR WORLDS</span><b>FOUR BEATS. ENDLESS ANGLES.</b></div>
        <div className="worlds-head"><h2>BUILT FOR THE<br /><span>NOW.</span></h2><p>We know the beats, the people and the nuance. Most importantly, we find the human story inside every category.</p></div>
        <div className="bento-grid">
          {worlds.map((world, index) => (
            <article className={`bento-card ${world.className}`} key={world.n}>
              {index === 0 && <video autoPlay muted loop playsInline aria-hidden="true"><source src="/hero-media.mp4" type="video/mp4" /></video>}
              <div className="bento-overlay" aria-hidden="true" />
              <div className="bento-top"><span>{world.n}</span><b>↗</b></div>
              <strong>{world.short}</strong>
              <div className="bento-bottom"><h3>{world.title}</h3><p>{world.copy}</p></div>
            </article>
          ))}
          <article className="bento-card bento-more">
            <span>YOUR STORY<br />COULD BE NEXT</span><a href="mailto:info@rtb-media.com">LET&apos;S TALK <b>↗</b></a>
          </article>
        </div>
      </section>

      <section className="method trend-section" id="method">
        <div className="trend-label"><span>03 — HOW WE MOVE</span><b>FROM ANGLE TO IMPACT</b></div>
        <div className="method-stage">
          <div className="method-title"><h2>THREE<br />MOVES.<br /><span>ONE</span> GOAL.</h2><p>No bloated teams. No templated playbooks. Just precise thinking, direct collaboration and relentless execution.</p></div>
          <div className="method-cards">
            <article><span>01</span><div className="method-visual rings" aria-hidden="true"><i /><i /><i /></div><h3>Strategy</h3><p>Find the tension. Sharpen the position. Map the moments worth owning.</p><b>DEFINE THE STORY →</b></article>
            <article><span>02</span><div className="method-visual bars" aria-hidden="true"><i /><i /><i /><i /><i /></div><h3>Execution</h3><p>Build the assets. Pitch with relevance, taste and persistence.</p><b>MAKE IT TRAVEL →</b></article>
            <article><span>03</span><div className="method-visual pulse" aria-hidden="true"><i /><i /></div><h3>Results</h3><p>Turn coverage into credibility, conversation and momentum.</p><b>RAISE THE PROFILE →</b></article>
          </div>
        </div>
      </section>

      <section className="services trend-section">
        <div className="trend-label"><span>04 — WHAT WE DO</span><b>ONE SHARP TEAM. EVERY ANGLE.</b></div>
        <div className="services-head"><h2>FULL<br /><span>SIGNAL.</span></h2><div className="services-orb" aria-hidden="true"><i /><i /><b>RTB</b></div></div>
        <div className="service-list">
          {services.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>
          ))}
        </div>
      </section>

      <section className="proof trend-section" id="proof">
        <div className="trend-label"><span>05 — PROOF</span><b>TRUSTED BY AMBITIOUS TEAMS</b></div>
        <div className="proof-head"><h2>GOOD<br />COMPANY<span>.</span></h2><p>Across technology, sustainability, mobility and culture.</p></div>
        <div className="client-grid">{clients.map((client, index) => <div key={client}><i>0{index + 1}</i><b>{client}</b><span>↗</span></div>)}</div>
        <div className="outlet-ticker"><div>{[...outlets, ...outlets].map((name, index) => <span key={`${name}-${index}`}>{name}<i>•</i></span>)}</div></div>
      </section>

      <section className="closing">
        <div className="closing-video" aria-hidden="true"><video autoPlay muted loop playsInline><source src="/hero-media.mp4" type="video/mp4" /></video></div>
        <div className="closing-shade" aria-hidden="true" />
        <span className="closing-kicker"><i /> GOT A STORY WORTH TELLING?</span>
        <h2>LET&apos;S MAKE IT<br /><span>UNMISSABLE.</span></h2>
        <a href="mailto:info@rtb-media.com"><span>info@rtb-media.com</span><b>↗</b></a>
      </section>

      <footer>
        <a className="trend-brand" href="#top"><b>RTB</b><span>RAISE THE BAR<br />MEDIA</span></a>
        <div><span>LOS ANGELES, CA</span><span>+1 415 233 5974</span></div>
        <div><a href="#worlds">EXPERTISE</a><a href="#method">APPROACH</a><a href="#proof">PROOF</a></div>
        <p>© 2026 RAISE THE BAR MEDIA</p>
      </footer>
    </main>
  );
}
