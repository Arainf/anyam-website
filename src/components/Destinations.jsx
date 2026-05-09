import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Destinations.css'

gsap.registerPlugin(ScrollTrigger)

const PROBLEMS = [
  {
    stat: '7,641',
    label: 'islands',
    title: "The world's most under-discovered archipelago.",
    body: 'The Philippines has more islands than Greece, Indonesia, and the Maldives combined — yet only 5% of its destinations appear on international travel platforms. Most islands have no digital presence at all.',
    color: '--teal',
  },
  {
    stat: '87%',
    label: 'of tourism revenue',
    title: 'Leaves the community before nightfall.',
    body: 'Resort chains, international booking platforms, and middlemen capture the bulk of every peso a tourist spends. The fishing village that makes the experience possible sees almost nothing.',
    color: '--red',
  },
  {
    stat: '2,400+',
    label: 'indigenous communities',
    title: 'With no digital storefront. No story. No trust.',
    body: 'T\'boli weavers, Sama Bahari fishers, Talaandig earth painters — their crafts are world-class. But without a platform built for them, they remain invisible to the travellers who would cherish them most.',
    color: '--purple',
  },
]

const HOW = [
  { icon: '🧵', title: 'One thread at a time', body: 'Every community gets a full digital storefront — stories, listings, reviews — built with them, not for them.' },
  { icon: '📖', title: 'Kwento-first discovery', body: 'Travellers find destinations through the stories of hosts, not algorithms. Read before you book.' },
  { icon: '💰', title: 'Fair revenue, direct', body: '87¢ of every peso goes directly to the host. No hidden commissions, no platform extracting value from a community.' },
  { icon: '🤝', title: 'Kapwa at the core', body: 'Anyam is built on kapwa — shared identity. Guests and hosts meet as people first, transaction second.' },
]

export default function Destinations() {
  useEffect(() => {
    gsap.utils.toArray('.prob-card').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
      )
    })
    gsap.utils.toArray('.how-item').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, delay: i * 0.10, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
      )
    })
  }, [])

  return (
    <section className="dest-section" id="explore">
      {/* Problem block */}
      <div className="wrap">
        <div className="dest-head">
          <div className="eyebrow reveal">The Problem</div>
          <h2 className="display reveal" style={{ marginTop: 24 }}>
            7,641 islands.<br />One <em>thread</em> at a time.
          </h2>
          <p className="dest-lead reveal">
            The Philippines is one of the most biodiverse, culturally rich, and naturally stunning nations on earth — and one of the most overlooked by global tourism. Here's why.
          </p>
        </div>

        <div className="prob-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="prob-card" style={{ '--pc': `var(${p.color})` }}>
              <div className="prob-stat">
                <span className="prob-num">{p.stat}</span>
                <span className="prob-unit">{p.label}</span>
              </div>
              <h3 className="prob-title">{p.title}</h3>
              <p className="prob-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="dest-divider">
        <div className="dest-divider-line" />
        <div className="dest-divider-label">How Anyam solves it</div>
        <div className="dest-divider-line" />
      </div>

      {/* Solution block */}
      <div className="wrap">
        <div className="how-grid">
          {HOW.map((h, i) => (
            <div key={i} className="how-item">
              <div className="how-icon">{h.icon}</div>
              <h4 className="how-title">{h.title}</h4>
              <p className="how-body">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="dest-cta-row reveal">
          <div className="dest-islands-badge">
            <img src="/assets/anyam-logo.png" alt="" />
            <div>
              <div className="dib-title">7,641 islands</div>
              <div className="dib-sub">waiting to be woven in</div>
            </div>
          </div>
          <a href="#cta" className="btn btn-primary">Get early access <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  )
}
