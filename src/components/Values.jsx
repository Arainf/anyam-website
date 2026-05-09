import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Values.css'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  { num: '001 · The self in the other', word: 'Kapwa.', gloss: 'Shared selfhood', accent: '--red', img: '/assets/asset-1.png', text: 'Every booking begins with hello — host and guest learn each other before money changes hands. Anyam is not a marketplace of strangers.' },
  { num: '002 · The story carried with you', word: 'Kwento.', gloss: 'Story · Tale', accent: '--blue', img: '/assets/asset-3.png', text: "A stop isn't a stop without its story. Every place on Anyam carries the kwento of the people who keep it — voiced by them, paid forward to them." },
  { num: '003 · Together, we lift', word: 'Bayanihan.', gloss: 'Communal effort', accent: '--green', img: '/assets/asset-7.png', text: 'Profits are shared with the village, not extracted from it. Hosts vouch for hosts. Trust is woven, not algorithmically scored.' },
]

export default function Values() {
  useEffect(() => {
    gsap.utils.toArray('.value-card').forEach((c, i) => {
      gsap.from(c, { y: 60, opacity: 0, scrollTrigger: { trigger: c, start: 'top 88%' }, duration: 1, ease: 'power3.out', delay: i * 0.1 })
    })
  }, [])

  return (
    <section className="values" id="kapwa">
      <div className="wrap">
        <div className="values-head">
          <div>
            <div className="eyebrow reveal">Our values</div>
            <h2 className="display reveal" style={{ marginTop: 24 }}>Built on three<br />Filipino <em>truths.</em></h2>
          </div>
          <p className="lead reveal">We don't believe travel is a transaction. We believe it's a relationship — between guests, hosts, and the lands and stories that hold them together.</p>
        </div>
        <div className="values-grid">
          {CARDS.map((c, i) => (
            <div key={i} className="value-card reveal" style={{ '--c-accent': `var(${c.accent})` }}>
              <div>
                <div className="num">{c.num}</div>
                <div className="word">{c.word}</div>
                <div className="gloss">{c.gloss}</div>
                <p>{c.text}</p>
              </div>
              <img className="ic" src={c.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
