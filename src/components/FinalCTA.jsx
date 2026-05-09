import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FinalCTA.css'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  useEffect(() => {
    gsap.to('#finalMark', { rotation: 360, duration: 80, repeat: -1, ease: 'none' })
    gsap.fromTo('#finalMark', { scale: 0.8, y: 30 }, { scale: 1, y: 0, ease: 'power2.out', scrollTrigger: { trigger: '.final', start: 'top 80%', end: 'top 30%', scrub: true } })
  }, [])

  return (
    <section className="final" id="cta">
      <div className="wrap">
        <div className="final-mark" id="finalMark" />
        <h2>Walk in<br /><em>kwento.</em></h2>
        <div className="actions">
          <a href="#" className="btn btn-primary">Get early access <span className="arrow">→</span></a>
          <a href="#" className="btn btn-ghost">For hosts &amp; co-ops</a>
        </div>
        <div className="meta">iOS · Android · Web · Launching Q3 · 2026 · Made in Zamboanga</div>
      </div>
    </section>
  )
}
