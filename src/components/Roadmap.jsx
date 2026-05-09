import './Roadmap.css'

const PHASES = [
  { num:'01', when:'2025 · Q3', status:'is-done', title:'Research & <em>kwento collection</em>', desc:'Conversations across barangays in Zamboanga, Basey, and Lake Sebu to understand what hosts and travelers actually need. The brand and product brief came out of these.', tag:'Complete' },
  { num:'02', when:'2025 · Q4', status:'is-done', title:'Brand, design system & <em>woven mark</em>', desc:'The Anyam identity, type system, color palette, and the first end-to-end product flows for traveler and host. Most of what you see on this site lives here.', tag:'Complete' },
  { num:'03', when:'2026 · Q1', status:'is-now',  title:'First <em>closed user test</em>', desc:'A small, invite-only round with a handful of travelers and three host communities. No public testimonials yet — when we have honest feedback, we\'ll share it here, the good and the rough.', tag:'In progress' },
  { num:'04', when:'2026 · Q2', status:'',         title:'Open <em>private beta</em>', desc:'Inviting our early-access list in waves — travelers first, then host co-ops in three pilot regions. We\'ll be onboarding hosts in person, not via email blast.', tag:'Upcoming' },
  { num:'05', when:'2026 · Q3', status:'',         title:'Public launch on iOS, Android & web', desc:'Anyam goes wide, with the first hundred kwentos already woven. By then, anything we say about how it feels will be in the words of real travelers and hosts — not ours.', tag:'Planned' },
]

export default function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="wrap">
        <div className="roadmap-head">
          <div>
            <div className="eyebrow reveal">Where we are</div>
            <h2 className="display reveal" style={{ marginTop: 24 }}>Honestly,<br /><em>still weaving.</em></h2>
          </div>
          <p className="lead reveal">We haven't put Anyam in front of users yet. The threads are in place — the <em>loom is set</em> — and we're getting ready for our first real test with travelers and host communities.</p>
        </div>
        <div className="timeline">
          {PHASES.map((p, i) => (
            <div key={i} className={`phase ${p.status} reveal`}>
              <div className="dot">{p.num}</div>
              <div className="when">{p.when}</div>
              <div className="body">
                <div className="title" dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="desc">{p.desc}</div>
              </div>
              <div className="status-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
