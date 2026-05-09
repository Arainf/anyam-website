import './Team.css'

const MEMBERS = [
  { initial:'G', c1:'--red',    c2:'--orange', img:'/assets/asset-1.png', corner:'Lead',   name:'Gabrielle Tatel',         role:'Project Lead · Strategy',       bio:'Sets the vision and holds the threads together. Drives field research across barangays and ensures every feature serves real communities, not just metrics.', tags:['Strategy','Field Research'] },
  { initial:'A', c1:'--blue',   c2:'--purple', img:'/assets/asset-3.png', corner:'Dev',    name:'Adrian Rainier Fabian',   role:'Development · Engineering',     bio:'Architects the platform\'s core — from the Kwento feed to the booking engine. Champions offline-first design so no barangay gets left behind by slow signal.', tags:['Backend','System Architecture'] },
  { initial:'D', c1:'--green',  c2:'--teal',   img:'/assets/asset-7.png', corner:'Dev',    name:'Donald Lee Novo',         role:'Development · Frontend',        bio:'Crafts the interfaces that travelers and hosts actually touch. Bridges the gap between the design system and the living, breathing app on every screen size.', tags:['Frontend','UI Engineering'] },
  { initial:'J', c1:'--yellow', c2:'--orange', img:'/assets/asset-5.png', corner:'Dev',    name:'John Marco Antonio Yu',   role:'Development · AI & Planning',   bio:'Builds the brain of Anyam — the AI itinerary generator, preference survey, and smart route planner that turns community stories into personalized journeys.', tags:['AI / ML','Trip Planning Engine'] },
  { initial:'J', c1:'--purple', c2:'--red',    img:'/assets/asset-9.png', corner:'Dev',    name:'Jon Orillineda',          role:'Development · Marketplace',     bio:'Owns the transactional layer — multi-merchant booking flows, GCash/Maya payment integration, and the merchant portal that lets small operators manage listings from their phone.', tags:['Booking System','Payments'] },
  { initial:'R', c1:'--teal',   c2:'--blue',   img:'/assets/asset-6.png', corner:'Design', name:'Resham Qhaleed Kadiri',   role:'UI / UX Design · Brand',        bio:'Shapes every pixel of Anyam — from the woven diamond mark to the story pages, booking screens, and the design system that keeps it all consistent across the platform.', tags:['UI / UX','Brand Identity'] },
]

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <div className="team-head">
          <div>
            <div className="eyebrow reveal">The weavers</div>
            <h2 className="display reveal" style={{ marginTop: 24 }}>Built by hand,<br />in <em>Zamboanga.</em></h2>
          </div>
          <p className="lead reveal">A small student-led team weaving design, code, and field research. <em>Kapwa</em> isn't a tagline for us — it's the thread we work by.</p>
        </div>

        <div className="team-grid">
          {MEMBERS.map((m, i) => (
            <div key={i} className="member reveal">
              <div className="portrait" style={{ '--c1': `var(${m.c1})`, '--c2': `var(${m.c2})` }}>
                <div className="initials">{m.initial}</div>
                <div className="glyph"><img src={m.img} alt="" /></div>
                <div className="corner">{m.corner}</div>
              </div>
              <div className="info">
                <div className="nm">{m.name}</div>
                <div className="role">{m.role}</div>
                <p className="bio">{m.bio}</p>
                <div className="tags">{m.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-footnote reveal">
          <div className="badge">A</div>
          <div className="copy">
            Guided by <em>Mr. Andrae Manguilimotan</em> — our adviser and anchor.
            <small>Ateneo de Zamboanga University · DOST AZUL Hub · Tourism Start-Up Challenge 2025</small>
          </div>
          <a href="#cta" className="cta-mini">Weave with us →</a>
        </div>
      </div>
    </section>
  )
}
