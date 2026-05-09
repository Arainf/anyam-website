import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from './hooks/useReveal'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Values from './components/Values'
import Destinations from './components/Destinations'
import Features from './components/Features'
import AppPreview from './components/AppPreview'
import TalaAI from './components/TalaAI'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import FinalCTA from './components/FinalCTA'

import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [lenis, setLenis] = useState(null)

  useReveal()

  useEffect(() => {
    const l = new Lenis({ lerp: 0.085, smoothWheel: true })
    setLenis(l)

    function raf(time) { l.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)

    l.on('scroll', ScrollTrigger.update)

    return () => l.destroy()
  }, [])

  return (
    <>
      <div className="paper-texture" />
      <Nav lenis={lenis} />
      <Hero />
      <Marquee />
      <Values />
      <Destinations />
      <Features />
      <AppPreview />
      <TalaAI />
      <Team />
      <Roadmap />
      <FinalCTA />

      <footer>
        <div className="wrap row">
          <div>© 2026 Anyam · Made with kapwa in Zamboanga</div>
          <div className="palette">
            {['--red','--orange','--yellow','--green','--teal','--blue','--purple'].map(c => (
              <span key={c} style={{ '--c': `var(${c})` }} />
            ))}
          </div>
          <div className="links">
            <a href="#">Manifesto</a>
            <a href="#">For hosts</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
