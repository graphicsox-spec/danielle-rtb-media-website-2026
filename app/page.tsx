const mediaNames = ['TECHCRUNCH', 'FORBES', 'THE NEW YORK TIMES', 'FAST COMPANY', 'CNN', 'WIRED'];

const worlds = [
  { n: '01', code: 'TB', title: 'Technology + Business', copy: 'Complex ideas, translated into sharp stories that earn attention from the people who matter.', tags: ['START-UPS', 'SAAS', 'FINTECH'] },
  { n: '02', code: 'CS', title: 'Climate + Sustainability', copy: 'Mission-led narratives for the teams building a cleaner, smarter and more resilient future.', tags: ['CLIMATETECH', 'MOBILITY', 'IMPACT'] },
  { n: '03', code: 'AC', title: 'Artists + Culture', copy: 'Distinct positioning for creative voices ready to move from the edge into the conversation.', tags: ['MUSIC', 'ART', 'ENTERTAINMENT'] },
  { n: '04', code: 'AT', title: 'Athletes + Talent', copy: 'The story beyond the spotlight—from bold ventures to meaningful off-field impact.', tags: ['PROFILES', 'VENTURES', 'LEGACY'] },
];

const services = [
  ['Narrative Strategy', 'Positioning, message architecture and the one story your audience cannot unhear.'],
  ['Media Relations', 'Smart, relevant outreach to editors, writers, producers and cultural tastemakers.'],
  ['Launch Campaigns', 'Momentum for funding, products, partnerships and category-defining moments.'],
  ['Executive Visibility', 'A credible public voice for the founders and leaders shaping what comes next.'],
];

const clients = ['ANTHESIS', 'CLIPCHAMP', 'FUELL', 'iADVIZE', 'LOGINRADIUS', 'PROCURIFY', 'USERSNAP', 'UDELv'];
const outlets = ['Business Insider', 'Coindesk', 'Cosmopolitan', 'Sports Illustrated', 'Entrepreneur', 'Wall Street Journal', 'Yahoo! Finance', 'LA Times'];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Raise The Bar Media home">
          <span className="brand-mark">RTB.</span><span className="brand-name">RAISE THE BAR<br />MEDIA</span>
        </a>
        <div className="nav-links"><a href="#worlds">Expertise</a><a href="#method">Approach</a><a href="#proof">Proof</a></div>
        <a className="nav-cta" href="mailto:info@rtb-media.com"><span>Let&apos;s talk</span><b aria-hidden="true">↗</b></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-kicker"><span>Independent PR + Creative Communications</span><b>Los Angeles / Worldwide</b></div>
        <div className="hero-index" aria-hidden="true">EST. <b>RTB</b></div>
        <h1><span>RAISE</span><span className="outline-word">THE</span><span className="accent-word">CONVERSATION<span>.</span></span></h1>
        <div className="hero-bottom">
          <p>We turn ambitious ideas into stories that move through culture—and stay there.</p>
          <a className="round-link" href="#worlds"><span>See how we move</span><strong aria-hidden="true">↘</strong></a>
        </div>
        <div className="signal-orb" aria-hidden="true"><i /><i /><i /><b>ON<br />AIR</b></div>
      </section>

      <section className="proof-strip" aria-label="Media outlets featuring client stories">
        <p><span className="signal-dot" /> Client stories seen in</p>
        <div>{mediaNames.map((name, index) => <span key={name}><i>0{index + 1}</i>{name}</span>)}</div>
      </section>

      <section className="signal-section section-shell">
        <div className="section-label"><span>01 / POINT OF VIEW</span><b>SCROLL TO DISCOVER ↓</b></div>
        <div className="signal-copy">
          <h2>Stories with<br /><span>signal.</span> Not noise.</h2>
          <div className="signal-note">
            <span className="mini-orbit" aria-hidden="true"><i /><i /></span>
            <p>Raise The Bar is an independent PR agency for ambitious people with something real to say.</p>
            <p>Journalistic instinct. Strategic precision. Challenger energy.</p>
          </div>
        </div>
        <div className="pulse-line" aria-hidden="true"><span /><i /><span /><i /><span /></div>
      </section>

      <section className="worlds section-shell" id="worlds">
        <div className="section-label"><span>02 / OUR WORLDS</span><b>FOUR BEATS. ONE POINT OF VIEW.</b></div>
        <div className="split-heading"><h2>Where we<br /><span>make waves.</span></h2><p>We know the beats, the people and the nuance. More importantly, we know how to find the human story inside every category.</p></div>
        <div className="world-grid">
          {worlds.map((world) => (
            <article className="world-card" key={world.n}>
              <div className="world-meta"><span>{world.n}</span><b>{world.code}</b></div>
              <div className="world-glyph" aria-hidden="true"><i /><i /><span>{world.code}</span></div>
              <h3>{world.title}</h3>
              <p>{world.copy}</p>
              <div className="tag-row">{world.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method section-shell" id="method">
        <div className="section-label"><span>03 / THE RTB METHOD</span><b>BUILT FOR MOMENTUM</b></div>
        <div className="method-head"><h2>Senior thinking.<br /><span>Zero theatre.</span></h2><p>No bloated teams. No copy-and-paste playbooks. Just direct collaboration and a precise plan built around your moment.</p></div>
        <div className="method-track">
          <article><span>01</span><div className="method-icon" aria-hidden="true"><i /><b>+</b></div><h3>Strategy</h3><p>Find the tension. Sharpen the position. Map the moments worth owning.</p><em>DEFINE THE STORY</em></article>
          <article><span>02</span><div className="method-icon double" aria-hidden="true"><i /><b>→</b></div><h3>Execution</h3><p>Build the materials. Pitch with relevance, taste and persistence.</p><em>MAKE IT TRAVEL</em></article>
          <article><span>03</span><div className="method-icon target" aria-hidden="true"><i /><b>●</b></div><h3>Results</h3><p>Turn coverage into credibility, conversation and momentum.</p><em>RAISE THE PROFILE</em></article>
        </div>
      </section>

      <section className="capabilities section-shell">
        <div className="section-label"><span>04 / CAPABILITIES</span><b>ONE SHARP TEAM. EVERY ANGLE.</b></div>
        <div className="capability-wrap">
          <div className="capability-intro"><h2>Built to<br /><span>break through.</span></h2><div className="frequency" aria-hidden="true">{[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <i key={n} style={{height: `${18 + (n % 5) * 14}px`}} />)}</div></div>
          <div className="service-list">
            {services.map(([title, copy], index) => (
              <details key={title} open={index === 0}>
                <summary><span>0{index + 1}</span><h3>{title}</h3><b>+</b></summary>
                <p>{copy}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-shell" id="proof">
        <div className="section-label"><span>05 / IN GOOD COMPANY</span><b>SELECTED CLIENTS + COVERAGE</b></div>
        <div className="split-heading"><h2>Proof over<br /><span>promises.</span></h2><p>Trusted by ambitious teams across technology, sustainability, mobility and culture.</p></div>
        <div className="client-grid">{clients.map((client, index) => <div key={client}><span>0{index + 1}</span><b>{client}</b><i>↗</i></div>)}</div>
        <div className="outlet-wall" aria-label="Selected media outlets">
          {outlets.map((outlet, index) => <span className={index % 3 === 1 ? 'outline' : ''} key={outlet}>{outlet}</span>)}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <span className="cta-label"><i className="signal-dot" /> AVAILABLE FOR THE RIGHT STORY</span>
        <h2>READY TO<br />RAISE <span>IT?</span></h2>
        <p>Let&apos;s make your next story impossible to scroll past.</p>
        <a href="mailto:info@rtb-media.com"><span>info@rtb-media.com</span><b>↗</b></a>
        <div className="cta-orbit" aria-hidden="true"><i /><i /><i /><b>RTB.</b></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">RTB.</span><span className="brand-name">RAISE THE BAR<br />MEDIA</span></a>
        <div><span>LOS ANGELES, CA</span><span>+1 415 233 5974</span></div>
        <div><a href="#worlds">EXPERTISE</a><a href="#method">APPROACH</a><a href="#proof">PROOF</a></div>
        <p>© 2026 RAISE THE BAR MEDIA</p>
      </footer>
    </main>
  );
}
